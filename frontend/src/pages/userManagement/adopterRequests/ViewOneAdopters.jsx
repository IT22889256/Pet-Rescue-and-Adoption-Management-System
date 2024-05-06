import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function ViewVerificationRequest() {
  const [adopter, setAdopter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/userManager/userProfile/view-adopter/${id}`)
      .then((res) => {
        setAdopter(res.data.Data.adopter[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
            Verification Request
          </h3>
        </div>
        <div>
          <label htmlFor="profile">
            <img
              src={adopter?.photo}
              alt="User Avatar"
              className="w-auto h-56 my-7 rounded-full object-cover mx-auto"
            />
          </label>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Request ID</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter._id}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">User Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.email}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Contact Number
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.phone}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Bio</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.bio}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Role</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.role}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.location}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">NIC</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.nic}
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                NIC Front Image
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <img src={adopter?.image} className=""></img>
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                NIC Rear Image
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                <img src={adopter?.nicback} className=""></img>
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Pet Ownership
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.petOwnerShip}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Reason</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {adopter.reason}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
