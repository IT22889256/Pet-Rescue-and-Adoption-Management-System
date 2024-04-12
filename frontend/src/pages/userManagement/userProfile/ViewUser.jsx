import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

export default function ViewUser() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/userManager/userProfile/viewUser/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">User Profile</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-[#c1c3c558] text-center">
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{`********`}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
              <td>{user.bio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
