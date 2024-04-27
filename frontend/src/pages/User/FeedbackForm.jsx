import React, { useState } from "react";
import feedbackFormImg from "../../image/feedbackFormImg.png";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FeedbackForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    const data = {
      user_id: currentUser._id,
      email: currentUser.email,
      reason: message,
      status: "Waiting",
    };
    console.log("result");
    axios
      .post(
        "http://localhost:3000/userAffairsManager/feedback/createFeedback",
        data
      )
      .then((result) => {
        alert("Feedback Submitted Successfully");
        console.log(result);
        navigate(`user/${currentUser._id}/feedback`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="mx-4 rounded-lg my-7 md:w-1/3 p-4">
          <img src={feedbackFormImg} alt=""></img>
        </div>

        <div className="mx-4 rounded-lg my-7 md:w-2/3 p-4 ">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-gray-600 text-center bg-orange-100 rounded-2xl px-20 py-2 max-w-xl">
              Submit Your Feedback
            </h1>
          </div>

          <form className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
            <div className="my-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                type="text"
                placeholder="Enter Name"
                name="name"
                value={currentUser.name}
                disabled
              />
            </div>

            <div className="my-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                type="email"
                placeholder="Enter Email"
                name="email"
                value={currentUser.email}
                disabled
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="feedback"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Feedback
              </label>
              <div className="mt-2">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              onClick={Submit}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
