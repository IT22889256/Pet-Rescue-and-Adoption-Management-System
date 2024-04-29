import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Advanced front-end validations
    const newErrors = {};
    if (!formData.name || formData.name.trim() === "") {
      newErrors.name = "Name is required.";
    }
    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one number, one special character, and one letter.";
    }
    if (formData.password !== formData.password2) {
      newErrors.password2 = "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      setErrors({});
      const { name, email, password } = formData;
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      setLoading(false);
      console.log(data);
      if (data.success === false) {
        setErrors({ general: "Something went wrong." });
        return;
      }
      alert("Account created successfully. Please log in.");
      navigate("/log-in");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setErrors({ general: "Something went wrong." });
    }
  };

  return (
    <div>
      <div className="bg-gray-50 pt-3">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Create an account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your name
                  </label>
                  <input
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    type="text"
                    placeholder="Name"
                    required
                    name="name"
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your email
                  </label>
                  <input
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.password ? "border-red-500" : ""
                    }`}
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Confirm Password
                  </label>
                  <input
                    className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                      errors.password2 ? "border-red-500" : ""
                    }`}
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="password2"
                    onChange={handleChange}
                  />
                  {errors.password2 && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password2}
                    </p>
                  )}
                </div>
                <div className="flex items-start">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      I agree with the{" "}
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="w-full text-white bg-gray-950 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? "Loading..." : "Create Account"}
                </button>
                <p className="text-sm font-light text-gray-500 ">
                  Already have an account?{" "}
                  <Link
                    to="/log-in"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Login here
                  </Link>
                </p>
                <p className="text-red-700 mt-2">
                  {errors.general && errors.general}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
