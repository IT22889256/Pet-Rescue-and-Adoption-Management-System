import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RecentVerificationRequests() {
  const [verificationRequests, setVerificationRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/adopter/adopter-requests")
      .then((res) => {
        console.log(res);
        setVerificationRequests(res.data);
      })
      .catch((error) => {
        console.error("Error fetching verification requests:", error);
      });
  }, []);

  const displayedRequests = verificationRequests.slice(0, 3);

  const getRequestStatus = (status) => {
    // Implement logic to determine request status based on status code
    return status;
  };

  return (
    <div className="bg-gray-100 px-4 py-3 rounded-md border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium block">
        Recent Account Verification Requests
      </strong>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Phone No
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                NIC
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedRequests.map((request) => (
              <tr key={request.id}>
                <td className="px-6 py-4 whitespace-nowrap">{request.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">{request.nic}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/userManager/verificationRequest/viewRequest/${request._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
