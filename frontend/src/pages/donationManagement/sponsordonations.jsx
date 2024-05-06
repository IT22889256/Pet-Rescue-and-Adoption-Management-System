import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getTaskStatus } from '../../lib/helpers/petManager/rescueTaskStatus'
import axios from 'axios'


export default function Donations() {
	const formatDate = (dateString) => {
		// Convert MongoDB date string to JavaScript Date object
		const date = new Date(dateString);
		// Format the date into a readable format
		return format(date, 'dd MMM yyyy hh:mm a');
};

		const [SponsorDonations, setSponsorDonations] = useState([]);
	
		useEffect(() => {
			axios.get('http://localhost:3000/donationManager/sponsordonation/display').then(res => {
				console.log(res);
				setSponsorDonations(res.data)
			})
		},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">donations</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/DonationManager/sponsordonations/createsponsordonations' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Sponsor donation</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
					<thead className="bg-[#c1c3c558] ">
						<tr>
							{/* <th>Donaiton ID</th> */}
				      <th>User ID</th>
								<th> Pet ID</th>
								<th>Amount</th>
              <th>Date</th>
							
						</tr>
					</thead>
					<tbody>
						{SponsorDonations.map((SponsorDonations) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={SponsorDonations.id}>
								{/* <td>
									{SponsorDonations.spid}
								</td> */}
								
								<td>
									{SponsorDonations.user_id}
								</td>
								
								
								<td>
									{SponsorDonations.pet_id}
								</td>
								<td>{SponsorDonations.amount}</td>
                <td>{formatDate(SponsorDonations.createdAt)}</td>
								
                                <td>
									{/* <Link to={`/DonationManager/reccuringdonations/viewreccuringdonations/${SponsorDonations._id}` }className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">View</Link> */}
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
