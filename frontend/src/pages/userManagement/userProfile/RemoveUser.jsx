import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function RemoveUser() {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteUser = () => {
    axios
      .delete(`http://localhost:3000/userManager/userProfile/removeUser/${id}`)
      .then(() => {
        alert("deleted");
        navigate("/userManager/userProfile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      <button
        className="p-4 bg-red-600 text-white m-8 w-full"
        onClick={handleDeleteUser}
      >
        Yes, Delete it
      </button>
    </div>
  );
}
