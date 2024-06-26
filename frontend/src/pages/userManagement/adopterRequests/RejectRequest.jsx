import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function RejectRequest() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteVehicle = () => {
    axios
      .delete(`http://localhost:3000/api/vehicles/${id}`)
      .then(() => {
        alert("deleted");
        navigate("/transportManager/vehicleProfile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Are you sure you want to delete?</strong>
      <span class="block sm:inline"> This action cannot be undone.</span>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteVehicle}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
}
