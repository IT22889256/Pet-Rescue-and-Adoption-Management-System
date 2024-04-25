import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function RescueTask() {
	const [rescueTasks, setTasks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/rescueTask').then(res => {
			console.log(res);
			setTasks(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Task</strong>
			{/* <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/petManager/rescueTask/createRescueTask' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create A Task</Link></div> */}
			<div className="border-x border-gray-200 rounded-sm mt-3">

			<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Task ID</th>
							{/* <th>Request ID</th>
							<th>User ID</th> */}
							<th>Task Priority</th>
							<th>Date</th>
							<th>Task Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						
						{rescueTasks.map((rescueTask) => (
							rescueTask.rescue_task_status === 'Pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={rescueTask._id}>
								<td>
								{rescueTask.rescue_task_id}
								</td >

								
								{rescueTask.rescue_task_priority === "Low" && (
								<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
									<div>{rescueTask.rescue_task_priority}</div>
								</td>)}
								{rescueTask.rescue_task_priority === "High" && (
								<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
									<div >{rescueTask.rescue_task_priority}</div>
								</td>)}
								<td>{rescueTask.date}</td>
								{rescueTask.rescue_task_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{rescueTask.rescue_task_status}</div>
									</td>)}
								<td>
									<Link to={`/petManager/rescueTask/viewRescueTask/${rescueTask._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>

								</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>

		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
<strong className="text-gray-700 font-medium">Tasks History</strong>
<div className="border-x border-gray-200 rounded-sm mt-3">

	<table className="bg-[#f3f3f3] w-full text-gray-700 h-20 ">
		<thead className="bg-[#c1c3c558]">
			<tr>
				<th>Task ID</th>
				{/* <th>Request ID</th>
				<th>User ID</th> */}
				<th>Task Priority</th>
				<th>Date</th>
				<th>Task Status</th>


				<th>Action</th>
			</tr>
		</thead>
		
		{<tbody>
			{rescueTasks.map((rescueTask) => (
					rescueTask.rescue_task_status !== 'Pending' &&(
						<tr className='border-b-2 border-[#c1c3c558] text-center' key={rescueTask._id}>
					<td>
						{rescueTask.rescue_task_id}
					</td >
					{rescueTask.rescue_task_priority === "Low" && (
						<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
							<div>{rescueTask.rescue_task_priority}</div>
						</td>)}
						{rescueTask.rescue_task_priority === "High" && (
						<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
							<div >{rescueTask.rescue_task_priority}</div>
						</td>)}

						<td>
						{rescueTask.date}
						</td>

						{rescueTask.rescue_task_status === "Completed" && (
						<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
							<div>{rescueTask.rescue_task_status}</div>
						</td>)}
						{rescueTask.rescue_task_status === "Failed" && (
						<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
							<div >{rescueTask.rescue_task_status}</div>
						</td>)}
						{rescueTask.rescue_task_status === "In Progress" && (
						<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
							<div>{rescueTask.rescue_task_status}</div>
						</td>)}
					<td>
						<Link to={`/petManager/rescueTask/viewRescueTask/${rescueTask._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
					</td>
				</tr>
					)
			))}
		</tbody> }
		
	</table>
</div>
</div>
</>
	)
}