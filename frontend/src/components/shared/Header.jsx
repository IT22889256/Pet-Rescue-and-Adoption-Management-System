import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const isLogedin = useSelector((state) => state.user.logedIn);
  return (
    <div className="bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
      </div>
      <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        {isLogedin ? (
          <Link
            to={`/employeeProfiles/${currentUser._id}`}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <img
              src={currentUser.photo}
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>
        ) : (
          <Link
            to="/log-in"
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
}
