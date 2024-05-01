import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewSponsorPet() {
	
	const [sponserPet, setSponserPet] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/donationManager/sponseredPet/${id}`)
		.then((res) => {
			setSponserPet(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Sponsor Pet Profiles</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Pet Name</th>
							<th>Pet Description</th>
							<th>Pet Type</th>
							{/* <th>Pet Name</th> */}
							{/* <th>Type</th> */}
							
							<th>Image</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{sponserPet.pet_name}
								</td >
								<td>
									{sponserPet.pet_description}
								</td >
								<td>
									{sponserPet.pet_type}
								</td >
								<div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={sponserPet.pet_image} alt='profile_Image'/>
				</div>
								<td>
									{sponserPet.health_status}
								</td >
								{/* <td>
									{sponserPet.pet_type}
								</td > */}
								{/* <td>
									{sponserPet.health_status}
								</td > */}
								<td>
								<Link to={`/DonationManager/SponsorshipPets/editSponsorPet/${sponserPet._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
								<Link to={`/DonationManager/SponsorshipPets/removeSponsorPet/${sponserPet._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
						
								</td>
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

