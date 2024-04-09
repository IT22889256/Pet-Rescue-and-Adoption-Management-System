import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

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
    const navigate = useNavigate()
    const {id} = useParams()
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
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/transportManager/vehicleProfile')
        })
        .catch(err => console.log(err))
    }
        return (

        
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
            <img className="h-20 w-20 text-gray-300" alt='image' />
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
                                            value={Vehicle_image}
                                            onChange={(e) => setvehImg(e.target.value)}
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


)}