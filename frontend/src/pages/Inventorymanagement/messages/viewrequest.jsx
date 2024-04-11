
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function viewmessage() {
	
	const [message, setmessage] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/inventorymanager/message/viewmessage/${id}`)
		.then((res) => {
			setmessage(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	const Accept = (e) => {
		
		const data = {
			"message_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/inventoryManager/message/viewmessage/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/petManager/rescueTask/createRescueTask/${id}`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"rescue_request_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/petManager/rescueRequest/viewRescueRequest/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/petManager/rescueRequest`)
        })
        .catch(err => console.log(err))
	}

return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Rescue request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Request ID</th>
							<th>User ID</th>
							<th>Pet Type</th>
							<th>Health Status</th>
							<th>Location</th>
							<th>Date</th>
							<th>Rescue Request Status</th>

								{rescueRequest.rescue_request_status==='Pending' &&(
								<th>Action</th>

								)}
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{rescueRequest._id}
								</td >
								<td>
									{rescueRequest.user_id}
								</td >
								<td>
									{rescueRequest.pet_type}
								</td >
								<td>
									{rescueRequest.health_status}
								</td >
								<td>
									{rescueRequest.location}
								</td >
								<td>
									{rescueRequest.date}
								</td >
									{rescueRequest.rescue_request_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
									{rescueRequest.rescue_request_status=== "Accept" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
									{rescueRequest.rescue_request_status=== "Reject" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
								
								<td>
								{rescueRequest.rescue_request_status==='Pending' &&(
								<>
									<Link onClick={Accept} to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link  onClick={Reject} to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
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

