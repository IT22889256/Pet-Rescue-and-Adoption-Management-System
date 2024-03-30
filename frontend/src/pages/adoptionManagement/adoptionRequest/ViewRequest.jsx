import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewRequest() {
	
	const [adopter, setRequest] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/adoptionManager/adoptionProfile/viewRequest/${id}`)
		.then((res) => {
			setRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Adoption Profiles</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Adoption ID</th>
							<th>NIC</th>
							<th>Name</th>
							<th>Phone Number</th>
							<th>Email</th>
							<th>Pet Name</th>
							<th>Pet Type</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{adopter._id}
								</td >
								<td>
									{adopter.adopter_nic}
								</td >
								<td>
									{adopter.adopter_name}
								</td >
								<td>
									{adopter.adopter_phone}
								</td >
								<td>
									{adopter.adopter_email}
								</td >
								<td>
									{adopter.adopter_pettype}
								</td >
								<td>
									{adopter.adopter_petname}
								</td>
								<td>
									{adopter.adopter_message}
								</td>
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

