import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

import  app  from "../../firebase";

import { useDispatch } from "react-redux";
import {
  updateUserStart,
  updateUserFailure,
  updateUserSuccess,
} from "../../redux/user/userSlice";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [formData, setFormData] = useState({}); // Move formData declaration outside the function

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const filename = `${currentUser.id}/${image.name}`;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, photo: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(currentUser);
      dispatch(updateUserStart());
      const res = await fetch(
        `http://localhost:3000/api/users/updateuser/${currentUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      navigate("/profile");
      console.log(data);
    } catch (error) {
      dispatch(updateUserFailure(error));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-200"
      >
        {/* User Avatar */}
        <input
          type="file"
          id="profile"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <label htmlFor="profile">
          <img
            src={formData.photo || currentUser?.photo}
            alt="User Avatar"
            className="w-auto h-48 my-7 cursor-pointer rounded-full object-cover mx-auto"
            onClick={() => fileRef.current.click()}
          />
        </label>
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-500">Image upload failed</span>
          ) : imagePercent > 0 && imagePercent < 100 ? (
            <span className="text-slate-700">
              {`Uploading image: ${imagePercent}%`}
            </span>
          ) : imagePercent === 100 ? (
            <span className="text-green-500">Image uploaded successfully</span>
          ) : (
            ""
          )}
        </p>

        <div className="my-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your name
          </label>
          <input
            defaultValue={currentUser?.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="my-3">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            defaultValue={currentUser?.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            type="email"
            placeholder="Email"
            name="email"
            disabled
            onChange={handleChange}
          />
        </div>

        <div className="my-3">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone number
          </label>
          <input
            defaultValue={currentUser?.phone}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            type="tel"
            placeholder="phone"
            name="phone"
            onChange={handleChange}
          />
        </div>

        <div className="my-3">
          <label
            htmlFor="bio"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Bio
          </label>
          <input
            defaultValue={currentUser?.bio}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
            type="text"
            placeholder="bio"
            name="bio"
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center my-8">
          <button className="text-gray-950 px-5 py-3 rounded-lg bg-orange-300 font-semibold  hover:opacity-95 disabled:opacity-80">
            {currentUser?.loading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
