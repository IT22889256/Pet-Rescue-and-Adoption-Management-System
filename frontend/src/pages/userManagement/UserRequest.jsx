import React from "react";
import { format } from "date-fns";
import { getRequestStatus } from "../../lib/helpers/petManager/rescueRequestStatus";
// import PopUp from './PopUp'
const recentRequestData = [
  {
    request_id: "1",
    user_id: "23143",
    user_name: "Shirley A. Lape",
    request_date: "2022-05-17T03:24:00",
    current_status: "Accepted",
    location: "Cottage Grove, OR 97424",
  },
  {
    request_id: "1",
    user_id: "23143",
    user_name: "Shirley A. Lape",
    request_date: "2022-05-17T03:24:00",
    current_status: "Rejected",
    location: "Cottage Grove, OR 97424",
  },
  {
    request_id: "1",
    user_id: "23143",
    user_name: "Shirley A. Lape",
    request_date: "2022-05-17T03:24:00",
    current_status: "Pending",
    location: "Cottage Grove, OR 97424",
  },
];

export default function UserRequest() {
  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">
        Account Verification Requests
      </strong>
      <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Generate Report
        </div>
      </div>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>Request ID</th>
              <th>User ID</th>
              <th>User Name</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentRequestData.map((request) => (
              <tr
                className="border-b-2 border-[#c1c3c558] text-center"
                key={request.id}
              >
                <td>{request.request_id}</td>
                <td>{request.user_id}</td>
                <td>{request.user_name}</td>
                <td>{format(new Date(request.request_date), "dd MMM yyyy")}</td>
                <td>{request.location}</td>
                <td>{getRequestStatus(request.current_status)}</td>
                {/* <td>
									<div className="text-xs text-gray-400 pl-1.5 mb-1 "><Link to='/rescueRequest' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link></div>
								</td> */}
                <td>
                  <div className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">
                    View
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
