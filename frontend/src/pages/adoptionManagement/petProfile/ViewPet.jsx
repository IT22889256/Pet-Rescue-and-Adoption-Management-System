import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewPet() {
	
	const [pet, setPet] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/petProfile/viewPet/${id}`)
		.then((res) => {
			setPet(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pet Profiles</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Pet ID</th>
							<th>Request ID</th>
							<th>Task ID</th>
							<th>Pet Name</th>
							<th>Type</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{pet._id}
								</td >
								<td>
									{pet.request_id}
								</td >
								<td>
									{pet.task_id}
								</td >
								<td>
									{pet.pet_name}
								</td >
								<td>
									{pet.pet_type}
								</td >
								<td>
									{pet.health_status}
								</td >
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

