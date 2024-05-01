import React, { useEffect, useState } from 'react'
import background from "../../image/background-image.jpg";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase';
const RescueRequestForm = () => {
    
    const [user_id, setUserId] = useState()
    const [pet_type, setPettype] = useState()
    const [health_status, setHealStatus] = useState()
    const [location, setLocation] = useState()
    const [date, setDate] = useState()
    const [imgUrl, setPetImage] = useState()
    const [rescue_request_status, setRescueRequestStatus] = useState("Pending")
    const navigate = useNavigate()
    
    const [img, setImg] = useState(null);

    const [validationErrors, setValidationErrors] = useState({}); 

    useEffect((e) => {
        if (img) {
          uploadFile(img, "imgUrl");
        }
      }, [img]);
  
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
            
            console.log('DownloadURL - ', downloadURL);
            
            setPetImage(() => {
                // console.log("45"+JSON.parse(downloadURL));
            return downloadURL
            });
        });
        }
    );
    }


    const validateForm = () => {
        const errors = {}; // Object to store validation errors
    
        if (!user_id) {
          errors.user_id = 'User ID is required';
        }
    
        if (!pet_type) {
          errors.pet_type = 'Pet type is required';
        }
    
        if (!health_status) {
          errors.health_status = 'Health status is required';
        }
        
        if (!location) {
          errors.location = 'Location is required';
        }
        if (!img) {
            errors.img = 'Image is required';
          }
    
        // You can add more validation rules here, e.g., email validation for location
    
        setValidationErrors(errors); // Update validation errors state
        return Object.keys(errors).length === 0; // Return true if no errors
      };

    const Submit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Don't submit if validation fails
          }

        const data = {
            user_id,pet_type,health_status,location,rescue_request_status,imgUrl

        };
        console.log('result')
        axios.post('http://localhost:3000/user/rescueRequest/createRescueRequest',data)
        .then(result => {
            alert("Request send successfully!")
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
return (
    <div
        className=" min-h-screen flex flex-col md:flex-row "
        style={{
            backgroundImage: `url(${background})`,
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
                Create Your Resque Request
                </h1>
            </div>

            <form action="">

            <div className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
                <div className="sm:col-span-3">
                <label htmlFor="user-id" className="block text-sm font-medium leading-6 text-gray-900">
                    User ID
                        </label>
                <div className="mt-2">
                <input

                    type="text"
                    name="user_id"
                    id="user-id"
                    value={user_id}
                    onChange={(e) => setUserId(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />

                </div>

                </div>
                <div className="sm:col-span-3">
                                        <label htmlFor="pet-type" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet type
                                        </label>
                                            <div className="mt-2">
                                            <div className="mt-2">
                                            <input required type="radio" id="pet-types" name="pet_type" value={"Cat"} onChange={(e) => setPettype(e.target.value)}/>
                                            <label className="p-1"  for="pet-type">Cat</label>
                                            <input required type="radio" id="pet-type" name="pet_type" value={"Dog"} onChange={(e) => setPettype(e.target.value)}/>
                                            <label className="p-1" for="pet-type" >Dog</label>

                                        </div>
                                        </div>
                </div>{validationErrors.pet_type && (
            <p className="text-red-500 text-xs">{validationErrors.pet_type}</p>
          )}
                
                <div className="sm:col-span-3 hidden">
                                        <label htmlFor="health-status" className="block text-sm font-medium leading-6 text-gray-900">
                                        Date
                                        </label>
                                            <div className="mt-2">
                                            
                                            <input type='date' value={date} onChange={(e) => setDate(e.target.value)}/>

                                        </div>
                </div>
                <div className="sm:col-span-3">
                                        <label htmlFor="health-status" className="block text-sm font-medium leading-6 text-gray-900">
                                        Health Status
                                        </label>
                                            <div className="mt-2">
                                            <input required type="radio" id="health-status" name="health_status" value={"Good"}  onChange={(e) => setHealStatus(e.target.value)}/>
                                            <label className="p-1"  for="health-status">Good</label>
                                            <input required type="radio" id="health-status" name="health_status" value={"Need Treament"}  onChange={(e) => setHealStatus(e.target.value)}/>
                                            <label className="p-1" for="health-status" >Need Treament</label>


                                        </div>
                </div>
                {validationErrors.health_status && (
            <p className="text-red-500 text-xs">{validationErrors.health_status}</p>
          )}

                <div className="col-span-full">
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                            Location
                                        </label>
                                        <div className="mt-2">
                                            <input required
                                                
                                                type="text"
                                                name="location"
                                                id="locations"
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />

                                            {validationErrors.location && (
            <p className="text-red-500 text-xs">{validationErrors.location}</p>
          )}
                                        </div>
                                    </div>
                             



                                    {<div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                        Pet Image
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <img src={imgUrl} className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>

                                                <input required id="file-upload" name="file_upload"  type="file" className="sr-only" 

                                                onChange={(e) => setImg(() => e.target.files[0])}
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>

                                            {validationErrors.img && (
            <p className="text-red-500 text-xs">{validationErrors.img}</p>
          )}
                                    </div>
                                    </div>
                                    </div> }

                                        <div className="mt-6 flex items-center justify-end gap-x-6">
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    onClick={Submit}
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit
                                </button>
                                        
                                </div>
                                    </div>
                                    </form>
                                </div>

                        </div>
          
  )
};

export default RescueRequestForm;
