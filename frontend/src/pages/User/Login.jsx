import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  logInStart,
  logInSuccess,
  logInFailure,
  reLogin,
} from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Login() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(logInStart());
      const { email, password } = formData;
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);

      if (data.message === "Invalid email or password") {
        dispatch(logInFailure(data));
        return;
      }

      console.log("login Data", data);
      dispatch(logInSuccess(data));
      if (data.role === "admin") {
        if (data.roletype === "userManager") {
          navigate("/userManager");
        } else if (data.roletype === "petManager") {
          navigate("/petManager");
        } else if (data.roletype === "transportManager") {
          navigate("/transportManager");
        } else if (data.roletype === "employeeManager") {
          navigate("/employeeManager");
        } else if (data.roletype === "donationManager") {
          navigate("/DonationManager");
        } else if (data.roletype === "adoptionManager") {
          navigate("/adoptionManager");
        } else if (data.roletype === "inventoryManager") {
          navigate("/InventoryManager");
        } else if (data.roletype === "userAffairsManager") {
          navigate("/userAffairsManager");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      dispatch(logInFailure(error));
    }
  };

  useEffect(() => {
    // Dispatch reLogin action when the component mounts
    dispatch(reLogin());
  }, []);

  return (
    <div>
      <div className="bg-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Login
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@gmail.com"
                    required={true}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required={true}
                    onChange={handleChange}
                  />
                </div>
                <Link
                  to="/recovery-password"
                  className="flex items-center justify-between"
                >
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </a>
                </Link>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-950 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? "Loading..." : "Login"}
                </button>
                <p className="text-sm font-light text-gray-500 0">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Create an account
                  </Link>
                </p>
                <p className="text-red-700 mt-2">
                  {error ? error.message || "Something went wrong!" : ""}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
