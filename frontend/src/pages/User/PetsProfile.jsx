import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PetsProfile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const id = window.location.pathname.split("/")[2];

  const [pet, setPet] = useState([]);
  const [adopter_message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/petManager/petProfile/viewPet/${id}`)
      .then((res) => {
        console.log(res);
        setPet(res.data);
      });
  }, []);

  const Submit = (e) => {
    const data = {
      adopter_nic: currentUser._id,
      adopter_name: currentUser.name,
      adopter_phone: currentUser.phone,
      adopter_email: currentUser.email,
      adopter_pettype: pet.pet_type,
      adopter_petname: pet.pet_name,
      adopter_message,
      adopter_status: "Pending",
    };
    console.log("result");
    axios
      .post(
        "http://localhost:3000/adoptionManager/adoptionProfile/createRequest",
        data
      )
      .then((result) => {
        console.log(result);
        navigate(`/`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>
        <label
          htmlFor="pet_image"
          className="block mb-2 text-sm font-medium text-gray-900 "
        ></label>
        <img src={pet.imgUrl} alt="Pet" className="w-auto h-60" />
      </div>
      <div>
        <label
          htmlFor="pet_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Pet Name
        </label>
        <input
          type="text"
          name="pet_name"
          id="pet_name"
          value={pet.pet_name}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="pet_type"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Pet Type
        </label>
        <input
          type="text"
          name="pet_type"
          id="pet_type"
          value={pet.pet_type}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="pet_age"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Pet Age
        </label>
        <input
          type="text"
          name="pet_age"
          id="pet_age"
          value={pet.pet_age}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="health_status"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Health Status
        </label>
        <input
          type="text"
          name="health_status"
          id="health_status"
          value={pet.health_status}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="pet_gender"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Pet Gender
        </label>
        <input
          type="text"
          name="pet_gender"
          id="pet_gender"
          value={pet.pet_gender}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="pet_appearance"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Pet Appearance
        </label>
        <input
          type="text"
          name="pet_appearance"
          id="pet_appearance"
          value={pet.pet_appearance}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="location"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={pet.location}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          disabled
        />
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="adopter-message"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Message
        </label>
        <div className="mt-2">
          <textarea
            type="text"
            name="adopter_message"
            id="adopter-message"
            value={adopter_message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <button
        onClick={Submit}
        className="rounded-md my-5 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </button>
    </div>
  );
};

export default PetsProfile;
