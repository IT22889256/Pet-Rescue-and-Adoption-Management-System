import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Message() {

	const [message, setmessage] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/inventorymanager/message').then(res => {
			console.log(res);
			setmessage(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">message</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/petManager/rescueRequest/createRescueRequest' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Rescue Request</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>message id</th>
							<th>from</th>
							<th>descrption</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{message.map((message) => (
							message.rescue_request_status === 'Pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={message._id}>
								<td>
									{message._id}
								</td >
								<td>
									{message.from}
								</td>
								<td>
									{message.description}
								</td>
								<td>
									{message.date}
								</td>
									{message.message_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{message.message_status}</div>
									</td>)}
								<td>
									<Link to={`/inventorymanager/message/viewmessage/${message._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">history</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>message ID</th>
							<th>from</th>
							<th>description</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{message.map((message) => (
								message.message_status !== 'Pending' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={message._id}>
								<td>
									{message._id}
								</td >
								<td>
									{message.from}
								</td>
								<td>
									{message.description}
								</td>
								<td>
									{message.date}
								</td>
									{message.message_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{message.message_status}</div>
									</td>)}
									{message.message_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{message.message_status}</div>
									</td>)}
								<td>
									<Link to={`/inventorymanager/message/viewmessage//${message._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
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