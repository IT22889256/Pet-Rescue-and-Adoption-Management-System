import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  logOut,
} from "../../redux/user/userSlice";
import axios from 'axios'

const Profile = () => {

  const [rescueRequests, setRescueRequests] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/rescueRequest').then(res => {
			console.log(res);
			setRescueRequests(res.data)
		})
	},[])


  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const handleDeleteAccount = async () => {
    dispatch(deleteUserStart());
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/delete/${currentUser._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }

      dispatch(deleteUserSuccess());
      alert("Account deleted successfully");
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/users/logout");
      dispatch(logOut());
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
        {/* Left Section: User Data */}
        <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4 bg-gray-200">
          {/* User Avatar */}
          <div>
            <label htmlFor="profile">
              <img
                src={currentUser?.photo}
                alt="User Avatar"
                className="w-auto h-56 my-7 rounded-full object-cover mx-auto"
              />
            </label>
          </div>

          <div className="my-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your name
            </label>
            <input
              defaultValue={currentUser?.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              placeholder="Name"
              disabled="true"
              name="name"
            />
          </div>

          <div className="my-3">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              defaultValue={currentUser?.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="email"
              placeholder="Email"
              disabled="true"
              name="email"
            />
          </div>

          <div className="my-3">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Phone number
            </label>
            <input
              defaultValue={currentUser?.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="tel"
              placeholder="phone"
              disabled="true"
              name="phone"
            />
          </div>

          <div className="my-3">
            <label
              htmlFor="bio"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Bio
            </label>
            <input
              defaultValue={currentUser?.bio}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              placeholder="bio"
              disabled="true"
              name="bio"
            />
          </div>

          <div className="flex justify-center my-8">
            <Link to="/edit-profile">
              <button className="text-gray-950 px-5 py-3 rounded-lg bg-orange-300 font-semibold  hover:opacity-95 disabled:opacity-80">
                Update Details
              </button>
            </Link>

            <button
              onClick={handleDeleteAccount}
              className="text-white px-5  rounded-lg bg-red-500 font-semibold ml-4 hover:opacity-95 disabled:opacity-80"
            >
              Delete Account
            </button>
          </div>

          <p>
            Do you want to logout?{" "}
            <span
              onClick={handleLogout}
              className="text-red-700 mt-2 cursor-pointer"
            >
              Logout
            </span>
          </p>
        </div>

        {/* Right Section: Donation, Complaint, Adoption, Feedback */}
        <div className="md:w-1/2 space-y-4 my-7">
          {/* Donation History */}
          <div className="bg-gray-200 mx-4 rounded-lg py-16">
            <div className="text-center">
              <p className="text-gray-600">My donation amount</p>
              <p className="text-2xl font-semibold">Rs. 15,000.00</p>
            </div>
          </div>
          {/* Complaint History */}
          
          <div className="bg-gray-200 mx-4 rounded-lg py-16">
            <div className="text-center">
             
            {rescueRequests.map((rescueRequest) => (
              
              rescueRequest.user_id === currentUser._id &&(
              <div>
                <p className="text-gray-600">My complaints</p>
                  <p className="text-green-500">
                    {rescueRequest.rescue_req_id}
                  </p>
                  
              </div>
              )
            ))}
            </div>
          </div>
          <div className="bg-gray-100  flex flex-col md:flex-row">
            <div className="mx-4 rounded-lg mt-8 md:w-1/2 p-4 bg-gray-200 h-56 w-20">
              {/* Adoption History */}
              <div className="text-center">
                <div className="bg-white rounded-xl py-1 mb-3 ">
                  <p className="text-gray-600">Adoption history</p>
                </div>
                <p className="text-gray-600">Name: Tommy</p>
                <p className="text-gray-600">Age: 2 years</p>
                <p className="text-gray-600">Gender: Male</p>
              </div>
            </div>
            <div className="mx-4 rounded-lg mt-8 md:w-1/2 p-4 bg-gray-200 h-56 w-20">
              {/* Feedback History */}
              <div className="text-center">
                <div className="bg-white rounded-xl py-1 mb-3 ">
                  <p className="text-gray-600">Feedback history</p>
                </div>
                {/* Example feedback data */}
                <p className="text-gray-600">Received positive feedback</p>
                <p className="text-gray-600">Great service!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
