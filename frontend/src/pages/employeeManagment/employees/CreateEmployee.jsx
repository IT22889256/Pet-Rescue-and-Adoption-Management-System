import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import JobRoleAvailability from "../../jobroleAvailability";

r

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import { PhotoIcon } from "@heroicons/react/24/solid";


export default function CreateEmployee() {
  
  const [nic, setNic] = useState();
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [jobRole, setJobRole] = useState();
  const [recruitedDate, setRecruitedDate] = useState();
  const [birthday, setBirthday] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postalCode, setPostalCode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [maritalStatus, setMaritalStatus] = useState();
  const [employeeimgUrl, setEmployeeimgUrl] = useState();

  const navigate = useNavigate();


  const [nameError,setNameError]=useState("");
  const [valid,setValid] = useState(true);


  const [img, setImg] = useState(null);
  const [imgPerc, setImgPerc] = useState();
  const [videoPerc, setVideoPerc] = useState();

  useEffect(
    (e) => {
      if (img) {
        uploadFile(img, "imgUrl");
      }
    },
    [img]
  );

  const uploadFile = (file, fileType) => {
    const storage = getStorage(app);
    const folder = fileType === "imgUrl" ? "images/" : "videos/";
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        fileType === "imgUrl"
          ? setImgPerc(Math.round(progress))
          : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log(error);
            break;
          case "storage/canceled":
            // User canceled the upload
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
          default:
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("DownloadURL - ", downloadURL);

          setEmployeeimgUrl(() => {
            // console.log("45"+JSON.parse(downloadURL));
            return downloadURL;
          });
        });
      }
    );
  };

  const Submit = (e) => {
    const data = {
      // eid,
      nic,
      firstName,
      middleName,
      lastName,
      jobRole,
      recruitedDate,
      birthday,
      address,
      city,
      postalCode,
      phoneNumber,
      email,
      maritalStatus,
      employeeimgUrl,
    };

    console.log('result')
    axios.post('http://localhost:3000/EmployeeManager/employees',data)
    .then(result => {
        console.log(result)
        alert('Employee added successfully')
        navigate('/EmployeeManager/ManageEmployees')
    })
    .catch(err => console.log(err))
  }

   //nic validate
    const nicValidator = (nic) => {
        let regex = /^[0-9]{12}$/;
        if (!regex.test(nic)) {
            setNameError("Invalid NIC number");
            setValid(false);
        } else {
            setNameError("");
            setValid(true);
        }
    }

//string validation
const stringValidator = (value)=>{
  let regex = /^[a-zA-Z\s]*$/; // Updated regex to include spaces
  if(!regex.test(value) ){
      setNameError("Invalid input");
      setValid(false);
  }
  else{
      setNameError("");
      setValid(true);
  }
}



//email validate
const emailValidator = (email) => {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
      setNameError("Invalid email address");
      setValid(false);
  } else {
      setNameError("");
      setValid(true);
  }
}

//phone number validate
const pnumberValidator = (value)=>{
  let regex = /^[0-9]{10}$/;
  if(!regex.test(value) ){
      setNameError("Invalid input");
      setValid(false);
  }
  else{
      setNameError("");
      setValid(true);
  }
}

//number validate
const numberValidator = (value)=>{
  let regex = /^[0-9]{5}$/;
  if(!regex.test(value) ){
      setNameError("Invalid input");
      setValid(false);
  }
  else{
      setNameError("");
      setValid(true);
  }
}



  return (
    <div>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="text-xl font-bold ">Create Employee Profile</div>

          <div className='text-red-600'>{nameError}</div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nic"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                NIC Number
              </label>
              <div className="mt-2">
                <input

                required

                  type="text"
                  name="nic"
                  id="nic"
                  value={nic}
                  onChange={(e) => {
                    setNic(e.target.value);

                    nicValidator(e.target.value)}}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input

                required

                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}

                  onChange={(e) => {setFirstName(e.target.value)
                    stringValidator(e.target.value); 

                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="middleName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                MiddleName
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  value={middleName}

                  onChange={(e) => 
                    {setMiddleName(e.target.value)
                      stringValidator(e.target.value); 
                    }}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                LastName
              </label>
              <div className="mt-2">
                <input

                required

                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}

                  onChange={(e) => 
                    {setLastName(e.target.value)
                      stringValidator(e.target.value); 
                    }}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


        
          

              <div className="sm:col-span-3">
                                          <label htmlFor="jobRole" className="block text-sm font-medium leading-6 text-gray-900">
                                          jobRole <span className="text-sm font-small leading-6 text-gray-400">(Available jobRole Appear Here)</span>
                                          </label>
                                          <div
                                          
                                          id="jobRole"
                                          name="jobRole"
                                          value={jobRole}
                                          
                                          onChange={(e) => setJobRole(e.target.value)}>  <JobRoleAvailability/>
                                            </div>
                                      </div>




            <div className="sm:col-span-3">
              <label
                htmlFor="recruitedDate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                RecruitedDate
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="recruitedDate"
                  id="recruitedDate"
                  value={recruitedDate}
                  onChange={(e) => setRecruitedDate(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="birthday"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Birth date
              </label>
              <div className="mt-2">
                <input

                required

                  type="date"
                  name="birthday"
                  id="birthday"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input

                required

                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)
                 }
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Employee Image
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                  <img src={employeeimgUrl} className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file_upload"
                          type="file"
                          className="sr-only"
                          accept="image/"
                          onChange={(e) => setImg(() => e.target.files[0])}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>

      <div>
        <div className="sm:col-span-3">
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="mt-2">
            <input

            required

              type="text"
              name="city"
              id="city"
              value={city}

              onChange={(e) => {setCity(e.target.value)
                stringValidator(e.target.value); 

              }}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="postalCode"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Postal Code
          </label>
          <div className="mt-2">
            <input

            required

              type="text"
              name="postalCode"
              id="postalCode"
              value={postalCode}

              onChange={(e) => {setPostalCode(e.target.value)
                numberValidator(e.target.value)}}

              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone Number
          </label>
          <div className="mt-2">
            
            <input
              required
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={phoneNumber}

              onChange={(e) => {setPhoneNumber(e.target.value)
                pnumberValidator(e.target.value)}}

              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
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
              type="email"
              name="email"
              id="email"
              value={email}

              onChange={(e) => {setEmail(e.target.value)
                emailValidator(e.target.value)}}

              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="maritalStatus"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Marital Status
          </label>
          <div className="mt-2">
            <select
              name="maritalStatus"
              id="maritalStatus"
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option></option>
              <option>single</option>
              <option>married</option>
              <option>divorced</option>
              <option>widowed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button

        disabled = {!valid}

          onClick={Submit}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
