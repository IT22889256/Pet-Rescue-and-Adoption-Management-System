import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getTaskStatus } from '../../lib/helpers/petManager/rescueTaskStatus'
import axios from 'axios'



export default function SpecificNeedDonations() {

		const [specificNeedDonations, setSpecificNeedDonations] = useState([]);
		const formatDate = (dateString) => {
			// Convert MongoDB date string to JavaScript Date object
			const date = new Date(dateString);
			// Format the date into a readable format
			return format(date, 'dd MMM yyyy hh:mm a');
	};
	
		useEffect(() => {
			axios.get('http://localhost:3000/donationManager/specificneedsdonations/display').then(res => {
				console.log(res);
				setSpecificNeedDonations(res.data)
			})
		},[])

		const [searchQuery, setSearchQuery] = useState("");
	console.log(searchQuery);

	return (

		<div className="relative">
        <input
		onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
		  name='search'
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium"> Specific Needs donations</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/DonationManager/specificneeddonations/createspecificneeddonations' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Specific Need Donation</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
					<thead className="bg-[#c1c3c558] ">
						<tr>
							<th>Donaiton ID</th>
							{/* <th>Request ID</th> */}
							<th>User ID</th>
						
							{/* <th>Prority</th> */}
							<th> Specific need Categeory</th>
							<th>Amount</th>
							<th>Date</th>
						</tr>
					</thead>
					<tbody>
					{specificNeedDonations.filter((SpecificNeedsDonations) => {
							return searchQuery === '' 
							? SpecificNeedsDonations 
							: SpecificNeedsDonations.specificneed_category.includes(searchQuery)
						}).map((SpecificNeedsDonations) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={SpecificNeedsDonations.id}>
								<td>
									{SpecificNeedsDonations.snid}
								</td>
								{/* <td>
									{request.request_id}
								</td> */}
								<td>
									{SpecificNeedsDonations.user_id}
								</td>
								<td>
									{SpecificNeedsDonations.specificneed_category}
								</td>
							
								
								<td>
									{SpecificNeedsDonations.amount}
								</td>
								<td>{formatDate(SpecificNeedsDonations.createdAt)}</td>
								{/* <td>
									<div className="text-xs text-gray-400 pl-1.5 mb-1 "><Link to='/rescueRequest' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link></div>
								</td> */}
                                <td>
									
									{/* <Link to='/petManager/rescueTask/editRescueTask' className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">Edit</Link>
									<Link to='/petManager/rescueTask/deleteRescueTask' className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">Remove</Link> */}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
		</div>
	)
}
