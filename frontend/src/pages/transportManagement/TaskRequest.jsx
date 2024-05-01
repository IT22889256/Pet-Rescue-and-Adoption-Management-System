import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

export default function TaskRequest() {
  const [rescueTasks, setTaskRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/petManager/rescueTask").then((res) => {
      console.log(res);
      setTaskRequests(res.data);
    });
  }, []);

  const ComponetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponetRef.current,
    DocumentTItle: "Rescue Requests Report",
    onafterprint: () => "Rescue Requests Report Successfully Download",
  });

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  return (
    <>
      <div className="relative">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          name="search"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />

        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <strong className="text-gray-700 font-medium">
            Recent Task Request
          </strong>
          <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
            <button
              onClick={handlePrint}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Generate Report
            </button>
          </div>
          <div className="border-x border-gray-200 rounded-sm mt-3">
            <table className="bg-[#f3f3f3] w-full text-gray-700 h-20">
              <thead className="bg-[#c1c3c558]">
                <tr>
                  <td className="text-center">Task Priority</td>
                  <th>Pet type</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              {
                <tbody>
                  {rescueTasks
                    .filter((taskRequest) => {
                      return searchQuery === ""
                        ? taskRequest
                        : taskRequest.pet_type.includes(searchQuery);
                    })
                    .map(
                      (taskRequest) =>
                        taskRequest.rescue_task_status === "Pending" && (
                          <tr
                            className="border-b-2 border-[#c1c3c558] text-center"
                            key={taskRequest._id}
                          >
                            <td>{taskRequest.rescue_task_priority}</td>
                            <td>{taskRequest.pet_type}</td>
                            <td>{taskRequest.location}</td>
                            <td>{taskRequest.date}</td>

                            {taskRequest.rescue_task_status === "Pending" && (
                              <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
                                <div>{taskRequest.rescue_task_status}</div>
                              </td>
                            )}
                            <td>
                              <Link
                                to={`/transportManager/taskRequest/viewTaskRequest/${taskRequest._id}`}
                                className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                              >
                                View
                              </Link>
                            </td>
                          </tr>
                        )
                    )}
                </tbody>
              }
            </table>
          </div>
        </div>
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
          <strong className="text-gray-700 font-medium">Checked List</strong>
          <div
            ref={ComponetRef}
            className="border-x border-gray-200 rounded-sm mt-3"
          >
            <table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
              <thead className="bg-[#c1c3c558]">
                <tr>
                  <td className="text-center">Task Priority</td>
                  <th>Pet type</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              {
                <tbody>
                  {rescueTasks.map(
                    (taskRequest) =>
                      taskRequest.rescue_task_status !== "Pending" && (
                        <tr
                          className="border-b-2 border-[#c1c3c558] text-center"
                          key={taskRequest._id}
                        >
                          <td>{taskRequest.rescue_task_priority}</td>
                          <td>{taskRequest.pet_type}</td>
                          <td>{taskRequest.location}</td>
                          <td>{taskRequest.date}</td>

                          {/* {taskRequest.rescue_task_status} */}

                          {taskRequest.rescue_task_status === "Completed" && (
                            <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
                              <div>{taskRequest.rescue_task_status}</div>
                            </td>
                          )}
                          {taskRequest.rescue_task_status === "Failed" && (
                            <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
                              <div>{taskRequest.rescue_task_status}</div>
                            </td>
                          )}
                          {taskRequest.rescue_task_status === "In Progress" && (
                            <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
                              <div>{taskRequest.rescue_task_status}</div>
                            </td>
                          )}
                          {taskRequest.rescue_task_status ===
                            "In Waiting List" && (
                            <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
                              <div>{taskRequest.rescue_task_status}</div>
                            </td>
                          )}

                          <td>
                            {taskRequest.rescue_task_status ===
                              "In Waiting List" && (
                              <Link
                                to={`/transportManager/taskRequest/viewTaskRequest/${taskRequest._id}`}
                                className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                              >
                                View
                              </Link>
                            )}
                            {taskRequest.rescue_task_status ===
                              "In Progress" && (
                              <Link
                                to={`/transportManager/taskRequest/viewTaskRequest/${taskRequest._id}`}
                                className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                              >
                                View
                              </Link>
                            )}
                          </td>
                        </tr>
                      )
                  )}
                </tbody>
              }
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
