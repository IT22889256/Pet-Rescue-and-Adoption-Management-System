import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase';

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditVehicle() {
    
    const [Vehicle_Serial_No, setSerNo] = useState()
    const [Vehicle_Model, setVehMod] = useState()
    const [Plate_Number, setPlateNo] = useState()
    const [vehicle_status, setVehStatus] = useState()
    const [Year_Manufactured, setYearMan] = useState()
    const [Engine_Number, setEngNo] = useState()
    const [Chassis_Number, setChsNo] = useState()
    const [Vehicle_Type, setvehType] = useState()
    const [Vehicle_image, setvehImg] = useState()
    const [preImg, setPre] = useState()
    const navigate = useNavigate()
    const {id} = useParams()
    const [showSuccess, setShowSuccess] = useState(false);
    useEffect((e) => {
        axios.get(`http://localhost:3000/api/vehicles/${id}`)
        .then((res) => {
            setSerNo(res.data.Vehicle_Serial_No)
            setVehMod(res.data.Vehicle_Model)
            setPlateNo(res.data.Plate_Number)
            setVehStatus(res.data.vehicle_status)
            setYearMan(res.data.Year_Manufactured)
            setEngNo(res.data.Engine_Number)
            setChsNo(res.data.Chassis_Number)
            setvehType(res.data.Vehicle_Type)
            setvehImg(res.data.Vehicle_image)

            console.log(res);
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            Vehicle_Serial_No,
            Vehicle_Model,
            Plate_Number,
            vehicle_status,
            Year_Manufactured,
            Engine_Number,
            Chassis_Number,
            Vehicle_Type,
            Vehicle_image
        };
        console.log('result')
        axios.put(`http://localhost:3000/api/vehicles/${id}`,data)
        .then(() => {
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              navigate('/transportManager/vehicleProfile');
            }, 3000);
          })
        .catch(err => console.log(err))

        .catch((error) => {
            console.log(error);
          });
      

    }
    const [img, setImg] = useState(null);
    const [imgPerc, setImgPerc] = useState();
    const [videoPerc, setVideoPerc] = useState();
  
  
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
            
            console.log('DownloadURL - ', downloadURL);
            
            setvehImg(() => {
                // console.log("45"+JSON.parse(downloadURL));
            setPre(downloadURL)
            return downloadURL
            });
          });
        }
      );
    }
        return (

            <div>
            <div className={`fixed inset-0 overflow-y-auto flex items-center justify-center z-50 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Updated successful</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">The Vehicle Profile has been successfully Updated</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
              </div>
            </div>

        
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Vehicle Profile</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
            <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            Profile picture
            </label>
            <div className="mt-2 flex items-center gap-x-3">
            <img className="h-20 w-20 text-gray-300" src={preImg} alt='image' />
            </div>
        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="Vehicle_Serial_No" className="block text-sm font-medium leading-6 text-gray-900">
                            Vehicle Serial Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="Vehicle_Serial_No"
                                    id="Vehicle_Serial_No"
                                    value={Vehicle_Serial_No}
                                    onChange={(e) => setSerNo(e.target.value)}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Vehicle_Model" className="block text-sm font-medium leading-6 text-gray-900">
                                Vehicle Model
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Vehicle_Model"
                                        id="Vehicle_Model"
                                        value={Vehicle_Model}
                                        onChange={(e) => setVehMod(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Plate_Number" className="block text-sm font-medium leading-6 text-gray-900">
                                Plate Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Plate_Number"
                                        id="Plate_Number"
                                        value={Plate_Number}
                                        onChange={(e) => setPlateNo(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Year_Manufactured" className="block text-sm font-medium leading-6 text-gray-900">
                                Year Manufacturedr
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Year_Manufactured"
                                        id="Year_Manufactured"
                                        value={Year_Manufactured}
                                        onChange={(e) => setYearMan(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Engine_Number" className="block text-sm font-medium leading-6 text-gray-900">
                                Engine Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Engine_Number"
                                        id="Engine_Number"
                                        value={Engine_Number}
                                        onChange={(e) => setEngNo(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Chassis_Number" className="block text-sm font-medium leading-6 text-gray-900">
                                Chassie Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="Chassis_Number"
                                        id="Chassis_Number"
                                        value={Chassis_Number}
                                        onChange={(e) => setChsNo(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="Vehicle_Type" className="block text-sm font-medium leading-6 text-gray-900">
                                Vehicle type
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="Vehicle_Type"
                                            name="Vehicle_Type"
                                            value={Vehicle_Type}
                                            
                                            onChange={(e) => setvehType(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                           <option>Car</option>
                                            <option>Van</option>
                                            <option>Truck</option>
                                        </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="vehicle_status" className="block text-sm font-medium leading-6 text-gray-900">
                                Vehicle Status
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="vehicle_status"
                                            name="vehicle_status"
                                            value={vehicle_status}
                                            onChange={(e) => setVehStatus(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option className='bg-[#15803d]'>Good</option>
                                            <option className='bg-[#be123c]'>Need Maintenence</option>
                                            <option className='bg-[#ca8a04]'>On service</option>
                                        </select>
                                </div>
                            </div>

                            
                            { <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Vehicle Image
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file_upload"  type="file" className="sr-only" 
                                            
                                             onChange={(e) => setImg(() => e.target.files[0])}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                            </div> }
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </Link>
                <button
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
                </div>
        </div>
</div>


)}