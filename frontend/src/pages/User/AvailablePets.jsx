import React from "react";

import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AvailablePets = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/petManager/petProfile").then((res) => {
      console.log(res);
      setPets(res.data);
    });
  }, []);

  function Details(pet) {}

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
          <div className="ml-8 flex flex-col justify-center ">
            <div>
              <h1 className="font-serif text-7xl font-medium text-gray-900 text-left">
                EVERY PET DESERVES A HOME
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

        <div className="mx-4 rounded-lg my-7 md:w-2/3 p-4 ">
          <div className="flex justify-center">
            <h1 className="text-3xl font-semibold text-gray-600 text-center bg-orange-100 rounded-2xl px-20 py-2 max-w-xl">
              Pets available for Adoption
            </h1>
          </div>

          <table className="max-w-xl mx-auto rounded-lg my-7 py-5  bg-white line">
            <tbody>
              {pets.map((pet, index) =>
                index % 2 === 0 ? (
                  <tr key={pet._id}>
                    <td>
                      <div
                        className="max-w-sm rounded overflow-hidden shadow-lg mt-5"
                        onMouseOver={() => Details(pet)}
                      >
                        <img
                          className=" w-40 h-40"
                          src={pet.imgUrl}
                          alt="Pet"
                        />
                        <div className="px-6 py-4">
                          <Link
                            to={`/pet-profile/${pet._id}`}
                            className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </td>
                    {pets[index + 1] && (
                      <td>
                        <div className="max-w-sm rounded overflow-hidden shadow-lg ml-40 mt-5">
                          <img
                            className=" w-40 h-40"
                            src={pets[index + 1].imgUrl}
                            alt="Pet"
                          />
                          <div className="px-6 py-4">
                            <Link
                              to={`/pet-profile/${pet._id}`}
                              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                            >
                              View
                            </Link>
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AvailablePets;

/*

import background from "../../image/background-image.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PetAdoption = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/petManager/petProfile").then((res) => {
      console.log(res);
      setPets(res.data);
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row"
      style={{
        backgroundImage: url(${background}),
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
            Create Your Rescue Request
          </h1>
        </div>
        <table className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-white line">
          <tbody>
            {pets.map((pet, index) =>
              index % 2 === 0 ? (
                <tr key={pet._id}>
                  <td>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                      <img className=" w-40 h-40" src={pet.imgUrl} alt="Pet" />
                      <div className="px-6 py-4">
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                          Request
                        </button>
                      </div>
                    </div>
                  </td>
                  {pets[index + 1] && (
                    <td>
                      <div className="max-w-sm rounded overflow-hidden shadow-lg ml-5">
                        <img
                          className=" w-40 h-40"
                          src={pets[index + 1].imgUrl}
                          alt="Pet"
                        />
                        <div className="px-6 py-4">
                          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                            Request
                          </button>
                        </div>
                      </div>
                    </td>
                  )}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PetAdoption;

*/
