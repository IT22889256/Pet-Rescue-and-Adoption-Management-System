import React from "react";

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from "axios";
import { useReactToPrint } from "react-to-print";

const ViewLogins = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/userManager/userProfile/view-loginData")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      });
  }, []);

  const ComponetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponetRef.current,
    DocumentTItle: "User Report",
    onafterprint: () => "User Report Successfully Download",
  });

  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  return (
    <div>
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search..."
        className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm my-4"
      />
      <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
        <button
          onClick={handlePrint}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Report
        </button>
      </div>
      <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Login History</strong>

        <div
          ref={ComponetRef}
          className="border-x border-gray-200 rounded-sm mt-3"
        >
          <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
            <thead className="bg-[#c1c3c558]">
              <tr>
                <th>User ID</th>
                <th>Emp ID</th>
                <th>Email</th>
                <th>Login Date</th>
                <th>Login Time</th>
                <th>Role</th>
              </tr>
            </thead>
            {
              <tbody>
                {users
                  .filter((user) => {
                    return searchQuery === ""
                      ? user
                      : user.eid.includes(searchQuery) ||
                          user.role.includes(searchQuery);
                  })
                  .map((user) => (
                    <tr
                      className="h-12 border-b-2 border-[#c1c3c558] text-center "
                      key={user._id}
                    >
                      <td>{user.user_id}</td>
                      <td>{user.eid}</td>
                      <td>{user.email}</td>
                      <td>{user.createdAt.slice(0, 10)}</td>
                      <td>{user.time}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
              </tbody>
            }
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewLogins;
