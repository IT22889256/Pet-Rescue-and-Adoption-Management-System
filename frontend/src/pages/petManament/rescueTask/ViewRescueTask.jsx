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
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
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
		</div>
		
</>
	)
}

