import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import app from "../../firebase";
import { useNavigate } from "react-router-dom";

const BecomeAdopter = () => {
  const [imagePercent, setImagePercent] = useState(0);
  const [imagePercent1, setImagePercent1] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [imageError1, setImageError1] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(currentUser);
  const [image, setImage] = useState(undefined);
  const [nicback, setNicback] = useState(undefined);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [email, setEmail] = useState(currentUser.email);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  useEffect(() => {
    if (nicback) {
      handleFileNicbackUpload(nicback);
    }
  }, [nicback]);

  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const filename = `${currentUser._id}/nic/${image.name}`;
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
          setFormData({ ...formData, image: downloadURL });
        });
      }
    );
  };

  const handleFileNicbackUpload = async (nicback) => {
    const storage = getStorage(app);
    const filename = `${currentUser._id}/nicback/${nicback.name}`;
    const storageRef = ref(storage, filename);
    const uploadTask = uploadBytesResumable(storageRef, nicback);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent1(Math.round(progress));
      },
      (error) => {
        setImageError1(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, nicback: downloadURL });
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      role: currentUser.role,
      email: email,
      photo: currentUser.photo,
      bio: currentUser.bio,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch(
        `http://localhost:3000/api/adopter/create-adopter-request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          credentials: "include",
        }
      );
      const data = await res.json();

      if (data.success === false) {
        return;
      }

      navigate(`/profile/${currentUser._id}`);
      console.log(data);
    } catch (error) {}
  };

  return (
    <div className=" bg-white">
      <div className="flex justify-center my-10 ">
        <div className=" bg-orange-100 rounded-lg">
          <h1 className=" text-3xl font-bold py-4 px-32 shadow-lg ">
            Become a pet adopter
          </h1>
        </div>
      </div>
      <div className=" bg-gray-100 mx-44 rounded-xl px-20 py-10">
        <div className="space-y-12">
          <div className=" pb-12">
            <form
              onSubmit={handleSubmit}
              className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
            >
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload front image of your NIC
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 h-20">
                    <div className="flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="image"
                        className=" my-5 relative cursor-pointer py-2 px-5 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a Image</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <p className="text-sm self-center">
                  {imageError ? (
                    <span className="text-red-500">Image upload failed</span>
                  ) : imagePercent > 0 && imagePercent < 100 ? (
                    <span className="text-slate-700">
                      {`Uploading image: ${imagePercent}%`}
                    </span>
                  ) : imagePercent === 100 ? (
                    <span className="text-green-500">
                      Image uploaded successfully
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
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
                <p className="text-gray-500 text-sm">
                  We require this to be able to send you communications
                  regarding pet adoption
                </p>
              </div>
              <div className="sm:col-span-3">
                <div className="col-span-full">
                  <label
                    htmlFor="nicback"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Upload rear side image of your NIC
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 h-20">
                    <div className="flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="nicback"
                        className=" my-5 relative cursor-pointer py-2 px-5 rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a Image</span>
                        <input
                          id="nicback"
                          name="nicback"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={(e) => setNicback(e.target.files[0])}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <p className="text-sm self-center">
                  {imageError1 ? (
                    <span className="text-red-500">Image upload failed</span>
                  ) : imagePercent1 > 0 && imagePercent1 < 100 ? (
                    <span className="text-slate-700">
                      {`Uploading image: ${imagePercent1}%`}
                    </span>
                  ) : imagePercent1 === 100 ? (
                    <span className="text-green-500">
                      Image uploaded successfully
                    </span>
                  ) : (
                    ""
                  )}
                </p>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="petOwnerShip"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Have you adopted a pet before?
                </label>
                <div className="mt-2">
                  <div className="my-1">
                    <input
                      type="radio"
                      name="petOwnerShip"
                      value="yes"
                      onChange={handleChange}
                    />
                    <label htmlFor="yes" className="mx-5">
                      Yes
                    </label>
                  </div>

                  <div className="my-1">
                    <input
                      type="radio"
                      name="petOwnerShip"
                      value="no"
                      onChange={handleChange}
                    />
                    <label htmlFor="yes" className="mx-5">
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contact Number
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="text-gray-500 text-sm">
                  We require this to be able to send you communications
                  regarding pet adoption
                </p>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Why do you want to adopt a pet?
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="reason"
                    id="reason"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Where do you live?
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="location"
                    id="location"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="empStatus"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select your employeement status
                </label>
                <div className="mt-2">
                  <select
                    name="empStatus"
                    id="empStatus"
                    onChange={handleChange}
                    className=" border-0 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value=""></option>
                    <option value="full-time">Full-time employment</option>
                    <option value="part-time">Part-time employment</option>
                    <option value="Self-employed">Self-employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="nic"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your NIC number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="nic"
                    id="nic"
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="text-gray-500 text-sm">Enter your NIC number.</p>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Birth date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    name="dob"
                    id="dob"
                    onClick={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="block text-sm font-medium leading-6 text-gray-900"></div>
                <div className="mt-2">
                  <div className="block w-full rounded-md border-0 py-1.5 text-gray-900    placeholder:text-gray-400    sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div className="flex justify-between">
                <button className="text-gray-950 px-5 py-3 rounded-lg bg-orange-300 font-semibold hover:opacity-95 disabled:opacity-80">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAdopter;
