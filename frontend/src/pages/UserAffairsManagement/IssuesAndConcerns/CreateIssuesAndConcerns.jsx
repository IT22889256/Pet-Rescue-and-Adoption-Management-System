import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateIssuesAndConcerns() {
  const [user_id, setUserId] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [issuesandconcerns_status, setStatus] = useState("Waiting");
  const navigate = useNavigate();

  const [nameError, setNameError] = useState("");
  const [valid, setValid] = useState(true);

  const Submit = (e) => {
    const data = {
      user_id,
      email,
      message,
    };
    console.log("result");
    axios
      .post("http://localhost:3001/UserAffairsManager/issuesandconcerns", data)
      .then((result) => {
        console.log(result);
        navigate("/UserAffairsManager/IssuesAndConcerns");
      })
      .catch((err) => console.log(err));
  };

  //email validate
  const emailValidator = (email) => {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      setNameError("Invalid email address");
      setValid(false);
    } else {
      setNameError("");
      setValid(true);
    }
  };

  return (
    <div>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="text-xl font-bold ">
            Technical Issues or Adoption Related Concerns
          </div>
          <div className="text-red-600">{nameError}</div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="request-id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User ID
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="user_id"
                  id="user-id"
                  value={user_id}
                  onChange={(e) => setUserId(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="pet-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    emailValidator(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="pet-gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="pet-gender"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Status
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="status"
                  id="status"
                  value={issuesandconcerns_status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            onClick={Submit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
