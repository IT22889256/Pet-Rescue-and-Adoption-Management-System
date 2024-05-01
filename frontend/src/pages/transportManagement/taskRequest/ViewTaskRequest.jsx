
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewTaskRequest() {
	
	const [taskRequest, setTaskRequest] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/rescueTask/viewRescueTask/${id}`)
		.then((res) => {
			setTaskRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])

	
	const [task_request_status, setTaskRequestStatus] = useState()
	useEffect((e) => {
        axios.get(`http://localhost:3000/petManager/rescueTask/viewRescueTask/${id}`)
        .then((res) => {
            console.log(res);
        }).catch(err => console.log(err))
    },[])


return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Task request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						<td className='text-center'>Task ID</td>
							<th>Request ID</th>
							<th>User ID</th>
							<th>Task Priority</th>
							
							<th>Task Request Status</th>

								{taskRequest.rescue_task_status==='Pending' &&(
								<th>Action</th>

								)}

								{taskRequest.rescue_task_status==='In Waiting List' &&(
								<th>Action</th>

								)}

								{taskRequest.rescue_task_status==='In Progress' &&(
								<th>Action</th>

								)}

						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{taskRequest._id}
								</td >
								<td>
									{taskRequest.request_id}
								</td >
								<td>
									{taskRequest.user_id}
								</td >
								<td>
									{taskRequest.rescue_task_priority}
								</td >
								{/* { <td>
									{taskRequest.rescue_task_status}
								</td > } */}
								
									{taskRequest.rescue_task_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
										<div>{taskRequest.rescue_task_status}</div>
									</td>)}
									{taskRequest.rescue_task_status=== "In Progress" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{taskRequest.rescue_task_status}</div>
									</td>)}
									{taskRequest.rescue_task_status=== "In Waiting List" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{taskRequest.rescue_task_status}</div>
									</td>)}
									{taskRequest.rescue_task_status=== "Failed" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{taskRequest.rescue_task_status}</div>
									</td>)}
								
								<td>
								{taskRequest.rescue_task_status==='Pending' &&(
								<>
									{/* <Link onClick={Accept} to={`/petManager/rescueRequest/viewRescueRequest/${taskRequest._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept */}
									{/* </Link> */}
									{/* <Link  onClick={Reject} to={`/petManager/rescueRequest/viewRescueRequest/${taskRequest._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link> */}
									<Link   to={`/transportManager/taskRequest/editTaskRequest/${taskRequest._id}`} className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								</>

								)}

								{taskRequest.rescue_task_status==='In Progress' &&(
								<>
									{/* <Link onClick={Accept} to={`/petManager/rescueRequest/viewRescueRequest/${taskRequest._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept */}
									{/* </Link> */}
									{/* <Link  onClick={Reject} to={`/petManager/rescueRequest/viewRescueRequest/${taskRequest._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link> */}
									<Link   to={`/transportManager/taskRequest/editTaskRequest/${taskRequest._id}`} className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								</>

								)}


								{taskRequest.rescue_task_status==='In Waiting List' &&(
								<>
									{/* <Link onClick={Accept} to={`/petManager/rescueRequest/viewRescueRequest/${taskRequest._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept */}
									{/* </Link> */}
									{/* <Link  onClick={Reject} to={`/petManager/rescueRequest/viewRescueRequest/${taskRequest._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link> */}
									<Link   to={`/transportManager/taskRequest/editTaskRequest/${taskRequest._id}`} className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								</>

								)}
								</td> 
								
							</tr>
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

