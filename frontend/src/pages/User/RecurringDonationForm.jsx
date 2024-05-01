import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import donationFormImg from "../../image/donationFormImg.png";

const RecurringDonationForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [amount, setAmount] = useState(0);
  const [donationFrequency, setDonationFrequency] = useState("once");
  const navigate = useNavigate();

  const Submit = (e) => {
    const data = {
      user_id: currentUser._id,
      amount: amount,
      donation_frequency: donationFrequency,
      donation_status: "pending",
      donation_start_date: new Date().toISOString(),

      // donation_start_date,
      // donation_end_date,
    };

    axios
      .post("http://localhost:3000/donationManager/reccuringdonation/add", data)
      .then((result) => {
        console.log(result);
        alert("Donation Added Successfully");
        navigate(`/user/${currentUser._id}/donation`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className=" min-h-screen flex flex-col md:flex-row ">
        <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
          <div
            className="ml-8 flex flex-col justify-center h-full"
            style={{
              backgroundImage: `url(${donationFormImg})`,
              backgroundSize: "cover",
              backgroundColor: "rgba(255,255,255 )",
            }}
          >
            <div>
              <h1 className="font-serif text-7xl font-medium text-gray-900 text-left">
                Recurring Donations
              </h1>
            </div>
            <div className="mt-8 w-3/4">
              <p className="text-lg text-gray-900">
                Your generosity provided comfort for countless animals in need.
                <div className="ml-10">
                  <ul className="list-disc">
                    <li>
                      Saved Lives: Your contributions directly enabled us to
                      provide medical care and shelter for animals facing
                      critical situations.
                    </li>
                    <li>
                      Built a Brighter Future: With your help, we can continue
                      to provide essential care for animals and advocate for
                      their well-being.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
          <div className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
            <h1 className=" text-lg text-center my-2 font-bold">
              Choose an amount
            </h1>
            <div>
              <div className="flex gap-16 my-5">
                <div
                  onClick={() => setAmount(5)}
                  className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer   border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200 "
                >
                  5$
                </div>
                <div
                  onClick={() => setAmount(10)}
                  className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  10$
                </div>
                <div
                  onClick={() => setAmount(50)}
                  className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  50$
                </div>
              </div>
              <div className="my-5 flex gap-16">
                <div
                  onClick={() => setAmount(100)}
                  className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  100$
                </div>
                <div
                  onClick={() => setAmount(200)}
                  className=" bg-slate-50 py-2 px-8 mr-1 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  200$
                </div>
                <div
                  onClick={() => setAmount(300)}
                  className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  300$
                </div>
              </div>
              <div className="my-5 flex gap-16">
                <div
                  onClick={() => setAmount(500)}
                  className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  500$
                </div>
                <div
                  onClick={() => setAmount(1000)}
                  className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  1000$
                </div>
                <div
                  onClick={() => setAmount(2000)}
                  className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  2000$
                </div>
              </div>
            </div>

            <div>
              <input
                type="text"
                className=" bg-gray-200 border-neutral-200 border-b-slate-400 w-full py-2 px-3 my-5 text-center font-bold text-red-700"
                value={amount}
                disabled
              ></input>
            </div>

            <div>
              <h1 className="text-center font-bold my-5">Make it monthly?</h1>
            </div>

            <div className="flex justify-center">
              <div className=" mb-4 ">
                <div
                  onClick={() => setDonationFrequency("monthly")}
                  className="block bg-slate-50 py-2 px-12 cursor-pointer border-amber-400 border-solid border-2 rounded-lg mb-4 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  Yes, count me in
                </div>

                <div
                  onClick={() => setDonationFrequency("once")}
                  className="block bg-slate-50 py-2 px-12 cursor-pointer border-amber-400 border-solid border-2 rounded-lg hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  No, donate once
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                className=" bg-gray-200 border-neutral-200 border-b-slate-400 w-full py-2 px-3 my-5 text-center font-bold text-red-700 "
                value={donationFrequency}
                disabled
              ></input>
            </div>

            <div className="flex justify-end my-5">
              <button
                onClick={Submit}
                className="text-gray-950 px-8 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecurringDonationForm;
