import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import axios from "axios";


import {
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  logOut,
} from "../../redux/user/userSlice";


import cardImage from "../../image/card.png";

const Profile = () => {
  const [rescueRequests, setRescueRequests] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/petManager/rescueRequest").then((res) => {
      console.log(res);
      setRescueRequests(res.data);
    });
  }, []);

  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState([]);
  const [adoptionProcesses, setAdoptionProcesses] = useState([]);
  const [card, setCard] = useState("");

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/userAffairsManager/feedback/my/${currentUser._id}`
      )
      .then((res) => {
        setFeedback(res.data);
        console.log(res.data); // Move console.log here
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/adoptionManager/my/${currentUser.email}`)
      .then((res) => {
        console.log(res);
        setAdoptionProcesses(res.data);
      });
  }, []);

  //get card details
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/donationManager/cards/getCardDetails/${currentUser._id}`
      )
      .then((res) => {
        console.log(res.data);
        setCard(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

            <Link
              to={`/delete-account/${currentUser._id}`}
              className="text-white px-5 py-3 rounded-lg bg-red-600 font-semibold  hover:opacity-95 disabled:opacity-80 ml-10"
            >
              Delete Account
            </Link>
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
          {card ? (
            <div className="bg-gray-200 mx-4 rounded-lg py-16">
              <div className="flex flex-col md:flex-row">
                <div className="text-center md:w-1/2">
                  <img
                    src={cardImage}
                    alt="card"
                    className="h-20 w-auto ml-20"
                  />
                </div>
                <div className=" md:w-1/2">
                  <p className="text-gray-600">
                    Card Number : **** **** **** *
                    {card?.cardNumber.slice(13, 16)}
                  </p>
                  <p className="text-2xl font-semibold">Rs. 1,000.00</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-200 mx-4 rounded-lg py-16">
              <div className="text-center">
                <p className="text-gray-600">My donation amount</p>
                <p className="text-2xl font-semibold">Rs. 00.00</p>
              </div>
            </div>
          )}
          {/* Complaint History */}

          <div className="bg-gray-200 mx-4 rounded-lg py-16">
            <div className="text-center">
              {rescueRequests.map(
                (rescueRequest) =>
                  rescueRequest.user_id === currentUser._id && (
                    <div>
                      <p className="text-gray-600">My complaints</p>
                      <p className="text-green-500">
                        {rescueRequest.rescue_req_id}
                      </p>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="bg-gray-100  flex flex-col md:flex-row">
            <div className="mx-4 rounded-lg mt-8 md:w-1/2 p-4 bg-gray-200 h-56 w-20">
              {/* Adoption History */}
              <div className="text-center">
                <div className="bg-white rounded-xl py-1 mb-3 ">
                  <p className="text-gray-600">Adoption Requests</p>
                </div>
                <table className="bg-[#f3f3f3] w-full text-gray-700">
                  <thead className="bg-[#c1c3c558]">
                    <tr>
                      <th>Pet Type</th>
                      <th>Pet Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {adoptionProcesses.map((adoptionProcesses) => (
                    <tr
                      className="border-b-2 border-[#c1c3c558] text-center"
                      key={adoptionProcesses._id}
                    >
                      <td className=" text-left">
                        {adoptionProcesses.adopter_pettype}
                      </td>
                      <td className=" text-left">
                        {adoptionProcesses.adopter_petname}
                      </td>

                      <td className="overflow-auto py-1 capitalize rounded-md text-s text-yellow-600  text-center ml">
                        <div>{adoptionProcesses.adopter_status}</div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
            <div className="mx-4 rounded-lg mt-8 md:w-1/2 p-4 bg-gray-200 h-56 w-20">
              {/* Feedback History */}
              <div className="text-center">
                <div className="bg-white rounded-xl py-1 mb-3 ">
                  <p className="text-gray-600">Feedback history</p>
                </div>
                {/* Example feedback data */}

                <table className="bg-[#f3f3f3] w-full text-gray-700">
                  <thead className="bg-[#c1c3c558]">
                    <tr>
                      <th>Feedback</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {feedback.map((feedback) => (
                    <tr
                      className="border-b-2 border-[#c1c3c558] text-center"
                      key={feedback._id}
                    >
                      <td className=" text-left">{feedback.reason}</td>

                      <td className="overflow-auto py-1 capitalize rounded-md text-s text-yellow-600 text-center ml">
                        <div>{feedback.status}</div>
                      </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
