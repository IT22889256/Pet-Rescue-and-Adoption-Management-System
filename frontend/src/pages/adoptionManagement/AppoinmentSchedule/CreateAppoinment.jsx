import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateAppoinment() {

    const [request_id, setReqId] = useState()
    const [createdAt, setDate] = useState()
    const [appoinment_time, setTime] = useState()
    const [appoinment_doctor, setDoctor] = useState()
    
    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            request_id,createdAt,appoinment_time,appoinment_doctor,
        };
        console.log('result')
        axios.post('http://localhost:3000/adoptionManager/AppoinmentSchedule/CreateAppoinment',data)
        .then(result => {
            console.log(result)
            navigate('/adoptionManager/AppoinmentSchedule')
        })
        .catch(err => console.log(err))
    }

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Appoinment Request</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                             {/*<div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                        Request ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_id"
                                            id="request-id"
                                            value={request_id}
                                            onChange={(e) => setReqId(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                    </div>
                                </div>*/}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="appoinment-time" className="block text-sm font-medium leading-6 text-gray-900">
                                            Time
                                        </label>
                                            <div className="mt-2">
                                                <select
                                                    id="appoinment-time"
                                                    name="appoinment_time"
                                                    value={appoinment_time}
                                                    
                                                    onChange={(e) => setTime(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    ><option></option>
                                                    <option>8.00am</option>
                                                    <option>11.00am</option>
                                                    <option>2.00pm</option>
                                                    <option>5.00pm</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="appoinment-doctor" className="block text-sm font-medium leading-6 text-gray-900">
                                            Doctor
                                        </label>
                                            <div className="mt-2">
                                                <select
                                                    id="appoinment-doctor"
                                                    name="appoinment_doctor"
                                                    value={appoinment_doctor}
                                                    
                                                    onChange={(e) => setDoctor(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    ><option></option>
                                                    <option>Doctor 1</option>
                                                    <option>Doctor 2</option>
                                                </select>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
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
    )
}

