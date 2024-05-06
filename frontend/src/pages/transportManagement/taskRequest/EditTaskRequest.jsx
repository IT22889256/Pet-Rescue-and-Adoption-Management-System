import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'


// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditTaskRequest() {
    
    const [request_id, setReqId] = useState()
    const [user_id, setUserId] = useState()
    const [pet_type, setPettype] = useState()
    const [location, setLocation] = useState()
    const [rescue_task_priority, setRescueTaskpriority] = useState()
    const [rescue_task_status, setRescueTaskStatus] = useState()



    const navigate = useNavigate()
    const {id} = useParams()
    useEffect((e) => {
        axios.get(`http://localhost:3000/petManager/rescueTask/viewRescueTask/${id}`)
        .then((res) => {
            setReqId(res.data.request_id)
            setUserId(res.data.user_id)
            setPettype(res.data.pet_type)
            setLocation(res.data.location)
            setRescueTaskpriority(res.data.rescue_task_priority)
            setRescueTaskStatus(res.data.rescue_task_status)


            console.log(res);
        }).catch(err => console.log(err))
    },[])


    const Edit = (e) => {
        const data = {
            request_id,user_id,pet_type,location,rescue_task_priority,rescue_task_status
        };
        console.log('result')
        axios.put(`http://localhost:3000/petManager/rescueTask/editRescueTask/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/transportManager/scheduleProfile/createSchedule')
        })
        .catch(err => console.log(err))
    }

    const Submit = (e) => {
        const data = {
            request_id,user_id,pet_type,location,rescue_task_priority,rescue_task_status
        };
        console.log('result')
        axios.put(`http://localhost:3000/petManager/rescueTask/editRescueTask/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/transportManager/TaskRequest')
        })
        .catch(err => console.log(err))
    }



        return (

        
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Requested Task</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
           
           
        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="request_id" className="block text-sm font-medium leading-6 text-gray-900">
                            request_id
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="request_id"
                                    id="request_id"
                                    value={request_id}
                                    // onChange={(e) => setReqId(e.target.value)}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="user_id" className="block text-sm font-medium leading-6 text-gray-900">
                                user_id
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="user_id"
                                        id="user_id"
                                        value={user_id}
                                        // onChange={(e) => setUserId(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet_type" className="block text-sm font-medium leading-6 text-gray-900">
                                pet_type
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pet_type"
                                        id="pet_type"
                                        value={pet_type}
                                        // onChange={(e) => setPettype(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                location
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="location"
                                        id="location"
                                        value={location}
                                        // onChange={(e) => setLocation(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="rescue_task_priority" className="block text-sm font-medium leading-6 text-gray-900">
                                rescue_task_priority
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="rescue_task_priority"
                                        id="rescue_task_priority"
                                        value={rescue_task_priority}
                                        // onChange={(e) => setRescueTaskpriority(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="rescue_task_status" className="block text-sm font-medium leading-6 text-gray-900">
                                rescue_task_status
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="rescue_task_status"
                                            name="rescue_task_status"
                                            value={rescue_task_status}
                                            onChange={(e) => setRescueTaskStatus(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option>{rescue_task_status}</option>
                                           
                                            <option>In Waiting List</option>
                                            <option>In Progress</option>
                                            <option>Completed</option>
                                            <option>Failed</option>
                                          
                                        </select>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link to={`/transportManager/taskRequest`} className="text-sm font-semibold leading-6 text-gray-900">Cancel</Link>
                {/* <button
                    onClick={Submit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button> */}

                {rescue_task_status === "In Waiting List" && (
                <button
                  onClick={Submit}
                 className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Submit
                 </button>
                )}
                {rescue_task_status === "In Progress" && (
                <button
                  onClick={Submit}
                 className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Submit
                 </button>
                )}
                

                {rescue_task_status === "Pending" && (
                <button
                  onClick={Edit}
                 className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Submit
                 </button>
                )}

        </div>
</div>


)}