import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const email = useParams().email;
  console.log(email);
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const handleChangePassword = async () => {
    if (password !== password1) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await fetch(
        "http://localhost:3000/api/users/resetpassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, password1 }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        alert("Password changed successfully");
        navigate("/log-in");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 pt-3">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Change Password
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Enter new password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    type="password"
                    placeholder="New Password"
                    name="password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password1"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    type="password"
                    placeholder="Confirm Password"
                    name="password1"
                    required
                    onChange={(e) => setPassword1(e.target.value)}
                  />
                </div>

                <button
                  onClick={handleChangePassword}
                  className="w-full text-white bg-gray-950 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
