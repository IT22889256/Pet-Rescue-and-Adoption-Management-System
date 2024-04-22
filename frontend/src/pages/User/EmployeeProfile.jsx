import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EmployeeProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("Employee : ", currentUser);
  console.log("Employee : ", currentUser?.eid);
  return (
    <div>
      <div className="mx-20 ">
        <div className="mx-4 rounded-lg my-7 mx-32  p-4 bg-gray-200 ">
          {/* User Avatar */}
          <div>
            <label htmlFor="profile">
              <img
                src={currentUser?.photo}
                alt="User Avatar"
                className="w-auto h-44 my-7 rounded-full object-cover mx-auto"
              />
            </label>
          </div>
          <div className="my-5">
            <label
              htmlFor="eid"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Employee ID
            </label>
            <input
              value={currentUser.eid}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              placeholder="Employee ID"
              disabled="true"
              name="eid"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Name
            </label>
            <input
              value={currentUser.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              placeholder="Name"
              disabled="true"
              name="name"
            />
          </div>

          <div className="my-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Email
            </label>
            <input
              value={currentUser.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="email"
              placeholder="Email"
              disabled="true"
              name="email"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Contact Number
            </label>
            <input
              value={currentUser.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              placeholder="Phone Number"
              disabled="true"
              name="phone"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="role"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your Role
            </label>
            <input
              value={currentUser.role}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="role"
              placeholder="role"
              disabled="true"
              name="role"
            />
          </div>
          <div className="my-5">
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Bio
            </label>
            <input
              value={currentUser.bio}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              placeholder="Bio"
              disabled="true"
              name="bio"
            />

               
          </div>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						            <Link to={`/employeeProfiles/LeaveApply/${currentUser?.eid}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Apply leave</Link>
                       
                    </div>
                </div>
      </div>
    </div>
  );
}
