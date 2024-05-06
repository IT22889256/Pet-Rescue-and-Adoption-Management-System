import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditAssignedTask() {
    
    const [appoinment_id, setReqId] = useState()
    const [createdAt, setDate] = useState()
    const [appoinment_time, setTime] = useState()
    const [appoinment_doctor, setDoctor] = useState()
    const [appoinment_status, setAppStatus] = useState("Pending")

    const navigate = useNavigate()
    const {id} = useParams()
    useEffect((e) => {
        axios.get(`http://localhost:3000/adoptionManager/AppoinmentSchedule/ViewAppoinment/${id}`)
        .then((res) => {
            setReqId(res.data.appoinment_id)
            setDate(res.data.createdAt)
            setTime(res.data.appoinment_time)
            setDoctor(res.data.appoinment_doctor)
            setAppStatus(res.data.appoinment_status)

            console.log(res);
        }).catch(err => console.log(err))
    },[])

    const Edit = (e) => {
        const data = {
            appoinment_id,createdAt,appoinment_time,appoinment_doctor,appoinment_status,
        };
        console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/AppoinmentSchedule/EditAppoinment/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/doctor/ViewAppoinmentTask')
        })
        .catch(err => console.log(err))
    }
        return (

        
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>You can Change the Progress</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
        </div>
            <div className="sm:col-span-3">
                                <label htmlFor="appoinment_id" className="block text-sm font-medium leading-6 text-gray-900">
                                Appoinment ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="appoinment_id"
                                        id="appoinment_id"
                                        value={appoinment_id}
                                        // onChange={(e) => setUserId(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <label htmlFor="createdAt" className="block text-sm font-medium leading-6 text-gray-900">
                                Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="createdAt"
                                        id="createdAt"
                                        value={new Date(createdAt).toLocaleDateString()}

                                        // onChange={(e) => setUserId(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <label htmlFor="appoinment_time" className="block text-sm font-medium leading-6 text-gray-900">
                                Time
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="appoinment_time"
                                        id="appoinment_time"
                                        value={appoinment_time}
                                        // onChange={(e) => setUserId(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                                <label htmlFor="appoinment_doctor" className="block text-sm font-medium leading-6 text-gray-900">
                                Doctor
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="appoinment_doctor"
                                        id="appoinment_doctor"
                                        value={appoinment_doctor}
                                        // onChange={(e) => setUserId(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="appoinment_status" className="block text-sm font-medium leading-6 text-gray-900">
                                appoinment_status
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="appoinment_status"
                                            name="appoinment_status"
                                            value={appoinment_status}
                                            onChange={(e) => setAppStatus(e.target.value)}
                                          
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>{appoinment_status}</option>
                                           
                                          
                                            <option>In Progress</option>
                                            <option>Completed</option>
                                           
                                          
                                        </select>
                                </div>
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button>
                            <Link to={'/doctor/ViewAppoinmentTask'} className="text-sm font-semibold leading-6 text-gray-900"
        >                   Cancel
                            </Link>
                        </button>
                <button
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
        </div>
</div>


)}