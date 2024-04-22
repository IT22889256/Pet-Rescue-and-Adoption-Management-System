import React from "react";

import specificneedbg from "../../image/specificneedbg.png";

const SpecificNeedDonationForm = () => {
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
          <form className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
            <h1 className=" text-lg text-center my-2 font-bold">
              Choose an amount
            </h1>
            <div>
              <div className="flex gap-16 my-5">
                <button className=" bg-slate-50 py-2 px-10 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  5$
                </button>
                <button className=" bg-slate-50 py-2 px-10 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  10$
                </button>
                <button className=" bg-slate-50 py-2 px-10 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  50$
                </button>
              </div>
              <div className="my-5 flex gap-16">
                <button className=" bg-slate-50 py-2 px-9 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  90$
                </button>
                <button className=" bg-slate-50 py-2 px-9 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  200$
                </button>
                <button className=" bg-slate-50 py-2 px-9 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  300$
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-center font-bold my-5">For?</h1>
            </div>

            <div className="flex justify-center">
              <div className=" mb-4 ">
                <button className="block bg-slate-50 py-2 px-12 border-amber-400 border-solid border-2 rounded-lg mb-4">
                  Pet Food
                </button>
                <button className="block bg-slate-50 py-2 px-12 border-amber-400 border-solid border-2 rounded-lg mb-4">
                  Vet Care
                </button>

                <button className="block bg-slate-50 py-2 px-12 border-amber-400 border-solid border-2 rounded-lg">
                  Pet Toys
                </button>
              </div>
            </div>

            <div className="flex justify-end my-5">
              <button className="text-gray-950 px-8 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SpecificNeedDonationForm;
