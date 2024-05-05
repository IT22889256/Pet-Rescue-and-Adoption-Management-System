import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import DoctorAvailability from '../../DoctorAvailability'


// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditAppoinment() {
    
    const [appoinment_id, setReqId] = useState()
    const [createdAt, setDate] = useState()
    const [appoinment_time, setTime] = useState()
    const [appoinment_doctor, setDoctor] = useState()

    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()
    useEffect((e) => {
        
        axios.get(`http://localhost:3000/adoptionManager/AppoinmentSchedule/ViewAppoinment/${id}`)
        .then((res) => {
            setReqId(res.data.appoinment_id)
            setDate(res.data.createdAt)
            setTime(res.data.appoinment_time)
            setDoctor(res.data.appoinment_doctor)

            console.log(res);
            
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            appoinment_id,createdAt,appoinment_time,appoinment_doctor,
        };
        
        console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/appoinmentSchedule/EditAppoinment/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/adoptionManager/AppoinmentSchedule')
        })
        .catch(err => console.log(err))
    }
        return (

            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Appoinment Schedule</div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                {/* <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                         Profile picture
                    </label>
                <div className="mt-2 flex items-center gap-x-3">
                    <img className="h-20 w-20 text-gray-300" alt='image' />
                </div>
                </div> */}
                        <div className="sm:col-span-3">
                            <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                Appoinment ID
                            </label>
                            <div className="mt-2">
                                <input
                                required
                                    type="text"
                                    name="request_id"
                                    id="request-id"
                                    value={appoinment_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="createdAt" className="block text-sm font-medium leading-6 text-gray-900">
                                    Date
                                </label>
                                <div className="mt-2">
                                    <input
                                    required
                                        type="text"
                                        name="createdAt"
                                        id="createdAt"
                                        value={createdAt}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="appoinment-time" className="block text-sm font-medium leading-6 text-gray-900">
                                    Time
                                </label>
                                <div className="mt-2">
                                <select
                                required
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
                                        <div
                                        required
                                        id="appoinment-doctor"
                                        name="appoinment_doctor"
                                        value={appoinment_doctor}
                                        
                                        onChange={(e) => setDoctor(e.target.value)}>  <DoctorAvailability/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button>
                            <Link to={`/adoptionManager/AppoinmentSchedule`} className="text-sm font-semibold leading-6 text-gray-900"
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