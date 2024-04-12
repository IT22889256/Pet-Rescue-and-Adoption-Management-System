import React from "react";
import Header from "../../components/common/Header/Header";
import feedbackFormImg from "../../image/feedbackFormImg.png";

const FeedbackForm = () => {
  return (
    <div>
      <Header />

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
              />
            </div>

            <div className="my-3">
              <label
                htmlFor="feedback"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Feedback
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                type="text"
                placeholder="Enter Feedback"
                name="feedback"
              />
            </div>

            <div className="flex justify-between my-8">
              <button className="text-gray-950 px-5 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
