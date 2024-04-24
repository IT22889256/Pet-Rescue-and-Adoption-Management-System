import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditRescueTask() {
  const { id } = useParams();
  const [rescue_task_id, setTaskId] = useState(id);
  const [rescue_req_id, setReqId] = useState();
  const [user_id, setUserId] = useState();
  const [pet_type, setPettype] = useState();
  const [rescue_task_priority, setTaskPriority] = useState();
  const [health_status, setHealStatus] = useState();
  const [rescue_task_status, setRescueTaskStatus] = useState();
  const [location, setLocation] = useState();
  const [imgUrl, setPetImage] = useState();
  const [date, setDate] = useState();
  const navigate = useNavigate();

  useEffect((e) => {
    axios
      .get(`http://localhost:3000/petManager/rescueTask/viewRescueTask/${id}`)
      .then((res) => {
        setReqId(res.data.rescue_req_id);
        setTaskId(res.data.rescue_task_id);
        setUserId(res.data.user_id);
        setTaskPriority(res.data.rescue_task_priority);
        setPettype(res.data.pet_type);
        setHealStatus(res.data.health_status);
        setRescueTaskStatus(res.data.rescue_task_status);
        setLocation(res.data.location);
        setPetImage(res.data.imgUrl);
        setDate(res.data.date);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const Edit = (e) => {
    const data = {
      rescue_req_id,
      rescue_task_id,
      user_id,
      pet_type,
      rescue_task_priority,
      health_status,
      location,
      imgUrl,
      date,
      rescue_task_status,
    };
    console.log("result");
    axios
      .put(
        `http://localhost:3000/petManager/rescueTask/editRescueTask/${id}`,
        data
      )
      .then((result) => {
        alert("updated");
        console.log(result);
        navigate("/petManager/rescueTask");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="text-xl font-bold ">Edit Task</div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Profile picture
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <img
                  className="h-20 w-20 text-gray-300"
                  src={imgUrl}
                  alt="image"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="request-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Task ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="task_id"
                  id="task-id"
                  value={rescue_task_id}
                  className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="request-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Request ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="request_id"
                  id="request-id"
                  value={rescue_req_id}
                  className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="request-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="user_id"
                  id="user-id"
                  value={user_id}
                  className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="request-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Task Priority
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="rescue_task-_id"
                  id="rescue-task-id"
                  value={rescue_task_priority}
                  onChange={(e) => setTaskPriority(e.target.value)}
                  className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="request-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rescue Task Status
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="rescue_task_status"
                  id="rescue-task-status"
                  value={rescue_task_status}
                  className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="pet-type"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pet type
              </label>
              <div className="mt-2">
                <input
                  id="pet-type"
                  name="pet_type"
                  value={pet_type}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="health-status"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Health Status
              </label>
              <div className="mt-2">
                <input
                  id="health-status"
                  name="health_status"
                  value={health_status}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                ></input>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Location
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="location"
                  id="locations"
                  value={location}
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pet Image
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file_upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => setPetImage(e.target.value)}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Link>
        <button
          onClick={Edit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Pet Image
        </button>
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="mt-4 flex text-sm leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file_upload"
                  type="file"
                  className="sr-only"
                  value={pet_image}
                  onChange={(e) => setPetImage(e.target.value)}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
