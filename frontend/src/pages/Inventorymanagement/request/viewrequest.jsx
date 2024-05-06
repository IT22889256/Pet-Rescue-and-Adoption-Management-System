import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Viewsrequest() {
	
	const [request,setrequest] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/InventoryManager/request/viewrequest/${id}`)
		.then((res) => {
			setrequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>

						{/* const [request_id, setrequestid] = useState()
const [request_no, setrequestno] = useState()
const [request_to, setrequestto] = useState()
const [request_date,setrequestdate] = useState() */}
							<th>Request Id</th>
							<th>Request to</th>
							<th>Request date</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
						<td>
									{request.requestId}
								</td >
								<td>
									{request.request_to}
								</td >
								<td>
									{request.request_date}
								</td >
								
								<td>
								<Link to={`/InventoryManager/request/updaterequest/${request._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
								<Link to={`/InventoryManager/request/deleterequest/${request._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Delete</Link>
								</td >
								
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

