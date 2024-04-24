import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import { format } from 'date-fns'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function FundRequest() {

	const [fundrequests, setfundrequests] = useState([]);
	const formatDate = (dateString) => {
		// Convert MongoDB date string to JavaScript Date object
		const date = new Date(dateString);
		// Format the date into a readable format
		return format(date, 'dd MMM yyyy ');
};


	useEffect(() => {
		axios.get('http://localhost:3000/donationManager/fundrequests/display').then(res => {
			console.log(res);
			setfundrequests(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Request</strong>

			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>Request ID</th>
							<th>Management </th>
							<th>Amount</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{fundrequests.map((fundrequest) => (
							fundrequest.status === 'pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={fundrequest._id}>
								<td>
									{fundrequest._id}
								</td >
								<td>
									{fundrequest.request_from}
								</td>
								<td>
									{fundrequest.amount}
								</td>
								<td>
									{formatDate(fundrequest.request_date)}
								</td>
							
									{fundrequest.status=== "pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{fundrequest.status}</div>
									</td>)}
								<td>
									<Link to={`/DonationManager/fundrequests/viewfundrequests/${fundrequest._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
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
						<th>Request ID</th>
							<th>Management </th>
							<th>Amount</th>
							<th>Date</th>
							<th>Status</th>
							{/* <th>Action</th> */}
						</tr>
					</thead>
					
					{<tbody>
						{fundrequests.map((fundrequest) => (
								fundrequest.status !== 'pending' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={fundrequest._id}>
								<td>
									{fundrequest._id}
								</td >
								<td>
								{fundrequest.request_from}
								</td>
								<td>
									{fundrequest.amount}
								</td>
								<td>
								{formatDate(fundrequest.request_date)}
								</td>
								<td>
									{/* {fundrequest.status=== "pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{fundrequest.status}</div>
									</td>)} */}
									{fundrequest.status=== "accepted" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{fundrequest.status}</div>
									</td>)}
									{fundrequest.status=== "rejected" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{fundrequest.status}</div>
									</td>)}</td>
									
								{/* <td>
									<Link to={`/DonationManager/fundrequests/viewrequests/${fundrequest._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td> */}
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