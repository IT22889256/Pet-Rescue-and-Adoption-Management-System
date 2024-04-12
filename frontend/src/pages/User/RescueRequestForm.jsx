import React from "react";
import Header from "../../components/common/Header/Header";
import background from "../../image/background-image.png";

const RescueRequestForm = () => {
  return (
    <div>
      <Header />

      <div
        className=" min-h-screen flex flex-col md:flex-row "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(255,255,255 )",
        }}
      >
        <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
          <div className="ml-8 flex flex-col justify-center h-full">
            <div>
              <h1 className="font-serif text-7xl font-medium text-gray-900 text-left">
                EVERY PET DESERVES <br />A HOME
              </h1>
            </div>
            <div className="mt-8 w-3/4">
              <p className="text-lg text-gray-900">
                Bringing home a pet is a life-changing experience that only
                spreads joy and cheer! Take a step forward and help pets start
                over their lives again, with love that they truly deserve. While
                every pet deserves a home, we truly believe every household
                deserves a pet!
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
          <div className="bg-orange-100 mx-11 py-3 rounded-2xl">
            <h1 className="text-3xl font-semibold text-gray-600 text-center">
              Create Your Resque Request
            </h1>
          </div>
          <form className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
            <div className="my-5">
              <label
                htmlFor="userid"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                UserId
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                type="text"
                placeholder="User ID"
                name="userid"
              />
            </div>

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

            <div className="my-3">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Contact Number
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                type="tel"
                placeholder="phone"
                name="phone"
              />
            </div>

            <div className="my-5">
              <label
                htmlFor="location"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Location
              </label>
              <div className="relative">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                  type="text"
                  placeholder="Enter Location"
                  name="location"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 my-1 mx-1 px-4  bg-gray-300 text-black text-sm rounded-lg"
                >
                  Choose
                </button>
              </div>
            </div>
            <div className="my-5">
              <label
                htmlFor="image"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Add Image
              </label>
              <div className="relative">
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                  type="text"
                  placeholder="Upload Image"
                  name="image"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 my-1 mx-1 px-4  bg-gray-300 text-black text-sm rounded-lg"
                >
                  Choose
                </button>
              </div>
            </div>

            <div className="flex justify-between my-8">
              <button className="text-gray-950 px-5 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80">
                Cancel
              </button>
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

export default RescueRequestForm;
