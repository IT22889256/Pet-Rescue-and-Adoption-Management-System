import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const VerificationRequests = () => {
  const [verificationRequests, setVerificationRequests] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/adopter/adopter-requests")
      .then((res) => {
        console.log(res);
        setVerificationRequests(res.data);
      });
  }, []);

  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">User Profiles</strong>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Role</th>
              <th>NIC</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          {
            <tbody>
              {verificationRequests.map((verificationRequest) => (
                <tr
                  className="h-12 border-b-2 border-[#c1c3c558] text-center "
                  key={verificationRequest._id}
                >
                  <td>{verificationRequest.name}</td>
                  <td>{verificationRequest.email}</td>
                  <td>{verificationRequest.phone}</td>
                  <td>{verificationRequest.role}</td>
                  <td>{verificationRequest.nic}</td>
                  <td>{verificationRequest.reason}</td>

                  <td>
                    <Link
                      to={`/userManager/verificationRequest/viewRequest/${verificationRequest._id}`}
                      className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 "
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          }
        </table>
      </div>
    </div>
  );
};

export default VerificationRequests;
