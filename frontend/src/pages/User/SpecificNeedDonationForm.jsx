import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import specificneedbg from "../../image/specificneedbg.png";

const SpecificNeedDonationForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [amount, setAmount] = useState(0);
  const [specificneed_category, setSpecificNeedCategory] = useState("Pet Food");
  const navigate = useNavigate();

  const Submit = (e) => {
    const data = {
      user_id: currentUser._id,
      specificneed_category: specificneed_category,
      amount: amount,
    };
    console.log("result");
    axios
      .post(
        "http://localhost:3000/donationManager/specificneedsdonations/add",
        data
      )
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
        <div className="mx-4 rounded-lg my-7 p-4">
          <div
            className="ml-8 h-5/6"
            style={{
              backgroundImage: `url(${specificneedbg})`,
              backgroundSize: "cover",
              backgroundColor: "rgba(255,255,255 )",
            }}
          >
            <div className="my-12">
              <h1 className="font-serif text-5xl font-medium text-gray-900 text-left">
                Donate money for specific needs
              </h1>
            </div>
            <div className="mt-24 w-3/4">
              <p className="text-lg text-gray-900">
                <h1 className="font-bold text-xl mb-10">
                  Make a Difference, Bowl by Bowl, Purr by Purr: Donate Today!
                </h1>
                <p>
                  Make a Difference! Donate essentials for healthy, happy
                  animals. Your gift provides food, vet care, and enrichment
                  toys.by donating, you're directly contributing to the
                  well-being of animals in our care, helping us fulfill our
                  mission of finding them loving forever homes.
                </p>
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
                  className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
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
                  className=" bg-slate-50 py-2 px-10 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  50$
                </div>
              </div>
              <div className="my-5 flex gap-16">
                <div
                  onClick={() => setAmount(100)}
                  className=" bg-slate-50 py-2 px-9 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  100$
                </div>
                <div
                  onClick={() => setAmount(200)}
                  className=" bg-slate-50 py-2 px-9 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  200$
                </div>
                <div
                  onClick={() => setAmount(300)}
                  className=" bg-slate-50 py-2 px-9 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  300$
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
              <h1 className="text-center font-bold my-5">For?</h1>
            </div>

            <div className="flex justify-center">
              <div className=" mb-4 ">
                <div
                  onClick={() => setSpecificNeedCategory("Pet Food")}
                  className="block bg-slate-50 py-2 px-12 cursor-pointer border-amber-400 border-solid border-2 rounded-lg mb-4 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  Pet Food
                </div>
                <div
                  onClick={() => setSpecificNeedCategory("Vet Care")}
                  className="block bg-slate-50 py-2 px-12 cursor-pointer border-amber-400 border-solid border-2 rounded-lg mb-4 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  Vet Care
                </div>

                <div
                  onClick={() => setSpecificNeedCategory("Pet Toys")}
                  className="block bg-slate-50 py-2 px-12 cursor-pointer border-amber-400 border-solid border-2 rounded-lg hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
                >
                  Pet Toys
                </div>
              </div>
            </div>

            <div>
              <input
                type="text"
                className=" bg-gray-200 border-neutral-200 border-b-slate-400 w-full py-2 px-3 my-5 text-center font-bold text-red-700"
                value={specificneed_category}
                disabled
              ></input>
            </div>

            <div className="flex justify-end my-5">
              <button
                onClick={Submit}
                className="text-gray-950 px-8 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80 hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
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

export default SpecificNeedDonationForm;
