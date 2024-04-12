import React from "react";
import Header from "../../components/common/Header/Header";
import donationFormImg from "../../image/donationFormImg.png";

const RecurringDonationForm = () => {
  return (
    <div>
      <Header />

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
              <div className="my-5 flex gap-16">
                <button className=" bg-slate-50 py-2 px-8 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  500$
                </button>
                <button className=" bg-slate-50 py-2 px-8 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  1000$
                </button>
                <button className=" bg-slate-50 py-2 px-8 text-center rounded-lg  border-amber-400 border-solid border-2 font-bold">
                  2000$
                </button>
              </div>
            </div>

            <div>
              <h1 className="text-center font-bold my-5">Make it monthly?</h1>
            </div>

            <div className="flex justify-center">
              <div className=" mb-4 ">
                <button className="block bg-slate-50 py-2 px-12 border-amber-400 border-solid border-2 rounded-lg mb-4">
                  Yes, count me in
                </button>

                <button className="block bg-slate-50 py-2 px-12 border-amber-400 border-solid border-2 rounded-lg">
                  No, donate once
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

export default RecurringDonationForm;
