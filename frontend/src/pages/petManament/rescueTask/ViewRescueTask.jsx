import React, { useEffect, useState } from 'react'
import {useParams,Link } from 'react-router-dom'
import axios from 'axios'

export default function ViewRescueTask() {
	
	const [rescueTasks, setRescueTasks] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/rescueTask/viewRescueTask/${id}`)
		.then((res) => {
			setRescueTasks(res.data)
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (<>
<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Task</h3>
                </div>
				<div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={rescueTasks.imgUrl} alt='profile_Image'/>
				</div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg text-black-500 font-medium">Task ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.rescue_task_id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Request ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.rescue_req_id}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Task Priority</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.rescue_task_priority}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Type</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.pet_type}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Health Status</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.health_status}</dd>
                        </div>
						
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Found Location</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.location}</dd>
                        </div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
						
						{rescueTasks.rescue_task_status === "Pending" && (
							<Link to={`/petManager/rescueTask/editRescueTask/${rescueTasks._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1">Edit</Link>	
						)}
						{rescueTasks.rescue_task_status === "Pending" && (
							<Link to={`/petManager/rescueTask/deleteRescueTask/${rescueTasks._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-lg text-gray-400  text-center ml-1">Remove</Link>
						)}
						{(rescueTasks.rescue_task_status === "Completed" ) && (rescueTasks.pet_profile_status === false) &&(
							<Link to={`/petManager/petProfile/createPet/${rescueTasks._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1">Create Profile</Link>
						)}	
                        </div>
                    </dl>
                </div>
            </div>
        </div>
		
		
</>
	)
}

