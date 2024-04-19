
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewRescueRequest() {
	
	const [rescueRequest, setRescueRequest] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/rescueRequest/viewRescueRequest/${id}`)
		.then((res) => {
			setRescueRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])

	
	const [rescue_request_status, setRescueRequestStatus] = useState()
	useEffect((e) => {
        axios.get(`http://localhost:3000/petManager/rescueRequest/viewRescueRequest/${id}`)
        .then((res) => {
            console.log(res);
        }).catch(err => console.log(err))
    },[])

	const Accept = (e) => {
		
		const data = {
			"rescue_request_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/petManager/rescueRequest/viewRescueRequest/${id}`,data)
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
		// <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
		// 	<strong className="text-gray-700 font-medium">Rescue request</strong>
		// 	<div className="border-x border-gray-200 rounded-sm mt-3">
		// 		<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
		// 			<thead className="bg-[#c1c3c558]" >
		// 				<tr>
		// 					<th>Request ID</th>
		// 					<th>User ID</th>
		// 					<th>Pet Type</th>
		// 					<th>Health Status</th>
		// 					<th>Location</th>
		// 					<th>Date</th>
		// 					<th>Rescue Request Status</th>

		// 						{rescueRequest.rescue_request_status==='Pending' &&(
		// 						<th>Action</th>

		// 						)}
		// 				</tr>
		// 			</thead>
		// 				<tbody>
		// 				<tr className='border-b-2 border-[#c1c3c558] text-center'>
		// 						<td>
		// 							{rescueRequest._id}
		// 						</td >
		// 						<td>
		// 							{rescueRequest.user_id}
		// 						</td >
		// 						<td>
		// 							{rescueRequest.pet_type}
		// 						</td >
		// 						<td>
		// 							{rescueRequest.health_status}
		// 						</td >
		// 						<td>
		// 							{rescueRequest.location}
		// 						</td >
		// 						<td>
		// 							{rescueRequest.createdAt}
		// 						</td >
		// 							{rescueRequest.rescue_request_status=== "Pending" && (
		// 							<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
		// 								<div>{rescueRequest.rescue_request_status}</div>
		// 							</td>)}
		// 							{rescueRequest.rescue_request_status=== "Accept" && (
		// 							<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
		// 								<div>{rescueRequest.rescue_request_status}</div>
		// 							</td>)}
		// 							{rescueRequest.rescue_request_status=== "Reject" && (
		// 							<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
		// 								<div>{rescueRequest.rescue_request_status}</div>
		// 							</td>)}
								
		// 						<td>
		// 						{rescueRequest.rescue_request_status==='Pending' &&(
		// 						<>
		// 							<Link onClick={Accept} to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept
		// 							</Link>
		// 							<Link  onClick={Reject} to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
		// 						</>

		// 						)}
		// 						</td> 
								
		// 					</tr>
		// 			</tbody>
					
		// 		</table>
		// 	</div>
		// </div>

		<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Pet Profile</h3>
                </div>
				<div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={rescueRequest.imgUrl} alt='profile_Image'/>
				</div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg text-black-500 font-medium">Request ID</dt>
                            <dd className="mt-1 text-base text-gray-900 sm:col-span-2">{rescueRequest.rescue_req_id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">User ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueRequest.user_id}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Type</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueRequest.pet_type}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Health Status</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueRequest.health_status}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Location</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueRequest.location}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Date</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{rescueRequest.createdAt}</dd>
                        </div>
						{rescueRequest.rescue_request_status=== "Pending" && (
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Rescue Request Status</dt>
                            <dd className="mt-1 text-lg sm:col-span-2 capitalize rounded-md text-[#f8fafc] bg-[#cfbf28] text-center">{rescueRequest.rescue_request_status}</dd>
                        </div>
						)}
						{rescueRequest.rescue_request_status=== "Accept" && (
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Rescue Request Status</dt>
                            <dd className="mt-1 text-lg sm:col-span-2 capitalize rounded-md text-[#f8fafc] bg-[#15803d] text-center">{rescueRequest.rescue_request_status}</dd>
                        </div>
						)}
						{rescueRequest.rescue_request_status=== "Reject" && (
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Rescue Request Status</dt>
                            <dd className="mt-1 text-lg sm:col-span-2 capitalize rounded-md text-[#f8fafc] bg-[#801515] text-center">{rescueRequest.rescue_request_status}</dd>
                        </div>
						)}
						{rescueRequest.rescue_request_status==='Pending' &&(
							<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
								<dt className="text-lg font-medium text-black-500">Action</dt>
								<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">
									<Link onClick={Accept} to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link  onClick={Reject} to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
								</dd>
							</div>	
						)}
                    </dl>
                </div>
            </div>
        </div>
		
	)
}

