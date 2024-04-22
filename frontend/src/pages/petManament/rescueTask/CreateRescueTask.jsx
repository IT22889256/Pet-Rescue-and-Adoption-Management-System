import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateRescueTask() {
    
    const d = new Date()
    const day = d.getUTCDate()

    const [rescue_req_id, setReqId] = useState()
    const [user_id, setUserId] = useState()
    const [pet_type, setPettype] = useState()
    const [location, setLocation] = useState()
    const [rescue_task_priority, setRescueTaskpriority] = useState()
    const [rescue_task_status] = useState("Pending")
    const [pet_profile_status] = useState(false)
    const [health_status, setHealStatus] = useState()
    const [date] = useState(day)
    const [imgUrl, setPetImage] = useState()
    const navigate = useNavigate()
    

    const {id} = useParams()
    useEffect((e) => {
        axios.get(`http://localhost:3000/petManager/rescueRequest/viewRescueRequest/${id}`)
        .then((res) => {
            setReqId(res.data.rescue_req_id)
            setUserId(res.data.user_id)
            setPettype(res.data.pet_type)
            setHealStatus(res.data.health_status)
            setRescueTaskpriority(res.data.rescue_task_priority)
            setLocation(res.data.location)
            setPetImage(res.data.imgUrl)
            console.log(res);
        }).catch(err => console.log(err))
    },[])



    const Submit = (e) => {

        const data = {
            rescue_req_id,user_id,pet_type,health_status,rescue_task_status,rescue_task_priority,location,date,imgUrl,pet_profile_status
        };
        console.log('result')
        axios.post('http://localhost:3000/petManager/rescueTask/createRescueTask',data)
        .then(result => {
            console.log(result)
            navigate('/petManager/rescueTask')
        })
        .catch(err => console.log(err))
    }

    const Cancle = (e) => {
		
		const data = {
			"rescue_request_status":"Pending"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/petManager/rescueRequest/viewRescueRequest/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate('/petManager/rescueRequest')
        })
        .catch(err => console.log(err))
	}
        return (
            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create A Task</div>
                        <img className='object-cover h-60 w-60 m-5 rounded-full' src={imgUrl} alt='profile_Image'/>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                            Request ID
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="request_id"
                                                id="request-id"
                                                value={rescue_req_id}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
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
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="pet-type" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Type
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pet_type"
                                                id="pet-type"
                                                value={pet_type}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="sm:col-span-3">
                                        <label htmlFor="task-priority" className="block text-sm font-medium leading-6 text-gray-900">
                                            Task Priority
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="task_priority"
                                                id="task-priority"
                                                value={rescue_task_priority}
                                                onChange={(e) => setRescueTaskpriority(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div> */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="task-priority" className="block text-sm font-medium leading-6 text-gray-900">
                                            Task Priority
                                        </label>
                                        <div className="mt-2">
                                            <input type="radio" value="High" name="task_priority" className='m-1' onChange={(e) => setRescueTaskpriority(e.target.value)}/>
                                            <label htmlFor="task-priority" className="m-1 text-sm font-medium leading-6 text-gray-900">
                                            High
                                            </label>
                                            <input type="radio" value="Low" name="task_priority" className='m-1' onChange={(e) => setRescueTaskpriority(e.target.value)}/>
                                            <label htmlFor="task-priority" className="m-1 text-sm font-medium leading-6 text-gray-900">
                                            Low
                                        </label>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="health-status" className="block text-sm font-medium leading-6 text-gray-900">
                                            Health Status
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="health_status"
                                                id="health-status"
                                                value={health_status}
                                                onChange={(e) => setReqId(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                            Location
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="location"
                                                id="locations"
                                                value={location}
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={Cancle}>
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