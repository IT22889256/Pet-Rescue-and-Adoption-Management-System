import React, { useEffect, useState } from 'react'
import {useParams,Link } from 'react-router-dom'
// import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
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
		{/* <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Task</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Task ID</th>
							<th>Request ID</th>
							<th>User ID</th>
							<th>Pet Type</th>
							<th>Task Priority</th>
							<th>Health Status</th>
							<th>Task Status</th>
							<th>Location</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{rescueTasks._id}
								</td >
								<td>
									{rescueTasks.request_id}
								</td>
								<td>
									{rescueTasks.user_id}
								</td>
								<td>
									{rescueTasks.pet_type}
								</td>
								<td>{rescueTasks.rescue_task_priority}</td> 
								<td>{rescueTasks.health_status}</td> 
								<td>{rescueTasks.rescue_task_status}</td> 
								<td>{rescueTasks.location}</td> 
								<td>{rescueTasks.date}</td> 
								
								<td>
									<Link to={`/petManager/rescueTask/editRescueTask/${rescueTasks._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
									<Link to={`/petManager/rescueTask/deleteRescueTask/${rescueTasks._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Delete</Link>
								</td>
						</tr>
					</tbody>
					
				</table>
			</div>
		</div> */}

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
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks._id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Request ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.request_id}</dd>
                        </div>
                        {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Task ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.task_id}</dd>
                        </div> */}
                        {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Name</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.pet_name}</dd>
                        </div> */}
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Type</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.pet_type}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Health Status</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.health_status}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Gender</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.pet_gender}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Age</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.pet_age}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Appearance</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueTasks.pet_appearance}</dd>
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
						{rescueTasks.pet_profile_status === false &&(
							<Link to={`/petManager/rescueTask/editRescueTask/${rescueTasks._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1">Create Profile</Link>
						)}	
                        </div>
                    </dl>
                </div>
            </div>
        </div>
		
		
</>
	)
}

