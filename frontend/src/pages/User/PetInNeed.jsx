import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PetInNeed = () => {
  const [pets, setPets] = useState([]);
  const [amount, setAmount] = useState(0);
  const [pet_id, setPetId] = useState();
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/petManager/petProfile").then((res) => {
      console.log(res);
      setPets(res.data);
    });
  }, []);

  const Submit = (e) => {
    const data = {
      user_id: currentUser._id,
      amount: amount,
      pet_id: pet_id,
    };
    console.log("result");
    axios
      .post("http://localhost:3000/donationManager/sponsordonation/add", data)
      .then((result) => {
        console.log(result);
        alert("Donation Successfull");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4 ">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold text-gray-600 text-center bg-orange-100 rounded-2xl px-20 py-2 max-w-xl">
            Pets in Need
          </h1>
        </div>

        <table className="max-w-xl mx-auto rounded-lg my-7 py-5  bg-white line">
          <tbody>
            {pets.map((pet) => (
              <tr key={pet._id}>
                <td>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                    <img className=" w-40 h-40" src={pet.imgUrl} alt="Pet" />
                    <div className="px-6 py-4 text-left">
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        Pet Id : {pet.pet_id}
                      </h1>
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        Name : {pet.pet_name}
                      </h1>
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        Age : {pet.pet_age}
                      </h1>
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        Breed : {pet.health_status}
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
        <div className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
          <div>
            <h1 className=" text-lg text-center my-2 font-bold">
              Choose an Pet
            </h1>
            <div>
              <select
                onChange={(e) => setPetId(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {pets.map((opts, i) => (
                  <option key={i}>{opts.pet_id}</option>
                ))}
              </select>
            </div>
          </div>

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

          <div className="flex justify-end my-5">
            <button
              onClick={Submit}
              className="text-gray-950 px-8 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInNeed;
