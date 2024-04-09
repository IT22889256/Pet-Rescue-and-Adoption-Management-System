import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getTaskStatus } from '../../lib/helpers/petManager/rescueTaskStatus'
import axios from 'axios'
// import PopUp from './PopUp'
// const recentRescueTasksData = [
// 	{
// 		task_id: '1',
// 		request_id: '23143',
// 		user_id: '456',
// 		task_date: '2022-05-17T03:24:00',
// 		current_status: 'Completed',
// 		task_prority: '1'
// 	},
// 	{
// 		task_id: '1',
// 		request_id: '23143',
// 		user_id: '456',
// 		task_date: '2022-05-17T03:24:00',
// 		current_status: 'Abandoned',
// 		task_prority: '2'
// 	},
// 	{
// 		task_id: '1',
// 		request_id: '23143',
// 		user_id: '456',
// 		task_date: '2022-05-17T03:24:00',
// 		current_status: 'Pending',
// 		task_prority: '3'
// 	},
// ]

export default function Donations() {

		const [Donations, setDonations] = useState([]);
	
		useEffect(() => {
			axios.get('http://localhost:3000/donationManager/reccuringdonation/display').then(res => {
				console.log(res);
				setDonations(res.data)
			})
		},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium"> Reccuring donations</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/DonationManager/reccuringdonations/createReccuringDonations' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Reccuring Donations</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
					<thead className="bg-[#c1c3c558] ">
						<tr>
							<th>Donaiton ID</th>
							{/* <th>Request ID</th> */}
							<th>User ID</th>
							<th>Date</th>
							{/* <th>Prority</th> */}
							
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{Donations.map((Donation) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={Donation.id}>
								<td>
									{Donation._id}
								</td>
								{/* <td>
									{request.request_id}
								</td> */}
								<td>
									{Donation.user_id}
								</td>
								{/* <td>{format(new Date(Donations.donation_start_date), 'dd MMM yyyy')}</td> */}
								{/* <td>{request.task_prority}</td>  */}
								<td>{Donation.createdAt}</td>
								
								{/* <td>
									<div className="text-xs text-gray-400 pl-1.5 mb-1 "><Link to='/rescueRequest' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link></div>
								</td> */}
                                <td>
									<Link to={`/DonationManager/reccuringdonations/viewreccuringdonations/${Donation._id}` }className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">View</Link>
									{/* <Link to='/petManager/rescueTask/editRescueTask' className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">Edit</Link>
									<Link to='/petManager/rescueTask/deleteRescueTask' className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">Remove</Link> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
