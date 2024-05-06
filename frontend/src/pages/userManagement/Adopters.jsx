import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Adopters = () => {
  const [adopters, setAdopters] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/adopter/adopters").then((res) => {
      console.log(res);
      setAdopters(res.data);
    });
  }, []);

  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Adopter Profiles</strong>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Role</th>
              <th>NIC</th>
              <th>Location</th>
              <th>Reason</th>
              <th>Actions</th>
            </tr>
          </thead>
          {
            <tbody>
              {adopters.map((adopter) => (
                <tr
                  className="h-12 border-b-2 border-[#c1c3c558] text-center "
                  key={adopter._id}
                >
                  <td>{adopter.user_id}</td>
                  <td>{adopter.name}</td>
                  <td>{adopter.email}</td>
                  <td>{adopter.phone}</td>
                  <td>{adopter.role}</td>
                  <td>{adopter.nic}</td>
                  <td>{adopter.location}</td>
                  <td>{adopter.reason}</td>

                  <td>
                    <Link
                      to={`/userManager/view-adopter/${adopter._id}`}
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

export default Adopters;
