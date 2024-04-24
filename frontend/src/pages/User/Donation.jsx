import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import donationPageBg from "../../image/DonationFormBg.png";

const Donation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className=" h-screen w-auto">
      <div
        className=" justify-center h-full w-full"
        style={{
          backgroundImage: `url(${donationPageBg})`,
          backgroundSize: "cover",
          backgroundColor: "rgba(255,255,255 )",
        }}
      >
        <div className=" text-center mx-52">
          <h1 className=" font-bold text-4xl py-2 my-10">Donate today</h1>
          <p>
            Your kind donations help us provide life changing care and forever
            homes for over 14,000 of our furry friends. We really appreciate
            your support (and we know the dogs do too!)
          </p>
          <h1 className=" font-bold text-3xl py-2 mt-10 ">Ways to give</h1>
        </div>

        <div className="grid gap-8 grid-cols-3 grid-rows-3 my-10 ">
          <Link to={`/user/${currentUser._id}/recurring-donation`}>
            <div className="bg-orange-50 rounded-xl  h-64 px-10 py-10 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200">
              <h1 className=" font-bold text-xl my-2">Recurring donations</h1>
              <p>
                Set up a monthly donation online The simplest ways to make a
                regular donation are to setup a Direct Debit. You can choose how
                much to give, and when you'd like your monthly payment to be
                made - it's totally up to you.
              </p>
            </div>
          </Link>

          <Link to="">
            <div className="bg-orange-50 rounded-xl h-64 px-10 py-10 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200">
              <h1 className=" font-bold text-xl my-2">
                Sponsoring pet in need
              </h1>
              <p>
                Sponsorship is a great way to help some of the dogs who are
                taking that little bit longer to find a fur-ever home. 
              </p>
            </div>
          </Link>
          <Link to={`/user/${currentUser._id}/specific-need-donation`}>
            <div className="bg-orange-50  rounded-xl h-64 px-10 py-10 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200">
              <h1 className=" font-bold text-xl my-2">
                Donate for specific needs
              </h1>
              <p>
                Every bit heals a paw . Your donation, no matter the size, can
                make a real difference in the lives of animals in need. Help us
                provide them with food, vet care, and the things that make them
                happy.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Donation;
