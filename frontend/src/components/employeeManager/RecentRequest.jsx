import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'


export default function RecentRequests() {

	const [rescueRequests, setRescueRequests] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/rescueRequest').then(res => {
			console.log(res);
			setRescueRequests(res.data)
		})
	},[])
	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Request</strong>
			{/* <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/petManager/rescueRequest/createRescueRequest' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Rescue Request</Link></div> */}
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							
							<th>Pet Type</th>
							<th>Heath Status</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{rescueRequests.map((rescueRequest) => (
							rescueRequest.rescue_request_status === 'Pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={rescueRequest._id}>
								<td>
									{rescueRequest.pet_type}
								</td >
								{rescueRequest.health_status=== "Good" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{rescueRequest.health_status}</div>
									</td>)}
									{rescueRequest.health_status=== "Need Treament" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{rescueRequest.health_status}</div>
									</td>)}
								<td>
									{rescueRequest.createdAt}
								</td>
									{rescueRequest.rescue_request_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
								<td>
									<Link to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
