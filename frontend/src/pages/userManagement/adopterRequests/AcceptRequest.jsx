import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function RejectRequest() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAcceptRequest = () => {
    axios
      .post(`http://localhost:3000/api/adopter/accept-adopter-request/${id}`)
      .then(() => {
        alert("Accepted");
        navigate("/userManager/account-vericifacton-requests");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">
        Are you sure you want to accept request?
      </strong>
      <span class="block sm:inline"> This action cannot be undone.</span>
      <div className="flex justify-end">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleAcceptRequest}
        >
          Yes, Accept it
        </button>
      </div>
    </div>
  );
}
