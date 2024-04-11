import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewReccuringDonations() {
	
	const [Donations, setDonations] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/donationManager/reccuringdonation/display/${id}`)
		.then((res) => {
			setDonations(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Reccuring Donations</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Donation ID</th>
							<th>User ID</th>
							<th>Amount</th>
						
							<th>Donation Frequency</th>
              	{ <th>Start Date</th> }
							{<th>End Date</th> }
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{Donations._id}
								</td >
								<td>
									{Donations.user_id}
								</td >
								<td>
									{Donations.amount}
								</td >
                
								<td>
									{Donations.donation_frequency}
								</td >

                <td>{Donations.start_date}</td>
                <td>{Donations.end_date}</td>
								{/* <td>
									{sponserPet.pet_type}
								</td > */}
								{/* <td>
									{sponserPet.health_status}
								</td > */}
								<td>
								<Link to={`/DonationManager/reccuringdonations/editreccuringdonations/${Donations._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
								<Link to={`/DonationManager/reccuringdonations/deletereccuringdonations/${Donations._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Unsubscribe</Link>
						
								</td>
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

