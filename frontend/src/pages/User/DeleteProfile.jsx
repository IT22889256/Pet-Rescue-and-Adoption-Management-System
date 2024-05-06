import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  logOut,
} from "../../redux/user/userSlice";

export default function DeleteProfile() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDeleteAccount = async () => {
    dispatch(deleteUserStart());
    try {
      const res = await fetch(
        `http://localhost:3000/api/users/delete/${currentUser._id}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data));
        return;
      }

      dispatch(deleteUserSuccess());
      navigate("/log-in");
      alert("Account deleted successfully");
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  return (
    <div
      class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong class="font-bold">Are you sure you want to remove user?</strong>
      <span class="block sm:inline"> This action cannot be undone.</span>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeleteAccount}
        >
          Yes, Delete my Profile
        </button>
      </div>
    </div>
  );
}
