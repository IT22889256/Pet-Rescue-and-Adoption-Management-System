import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function PetProfile() {
	const [SponsorshipPets, setSponsorshipPets] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/donationManager/sponseredPet').then(res => {
			console.log(res);
			setSponsorshipPets(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pets Profiles of Sponsored </strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/DonationManager/SponsorshipPets/createSponsorPet' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add Sponsor Pet Profile</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							{/* <th>Sponsorship ID</th> */}
							<th>Pet ID</th>
							<th>Pet Name</th>
							<th>Added Date</th>
							{/* <th>Sponsorship Status $</th> */}
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{SponsorshipPets.map((SponsorshipPet) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={SponsorshipPet._id}>
								{/* <td>
									{SponsorshipPet._id}
								</td > */}
								
								<td>
									{SponsorshipPet.pet_id}
								</td>
								<td>
									{SponsorshipPet.pet_name}
								</td>
								
								<td>
									{SponsorshipPet.added_date}
								</td>
								{/* <td>{SponsorshipPet.sponsorship_status}</td> */}
								<td>
									<Link to={`/DonationManager/SponsorshipPets/viewSponsorPet/${SponsorshipPet._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
										</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
// {pets.map((pets)=>(
// 	<>
// 		<tr key={pets.id}>
// 			<td>{pets.request_id}</td>
// 			<td>{pets.task_id}</td>
// 			<td>{pets.pet_name}</td>
// 			<td>{pets.pet_type}</td>
// 			<td>{pets.health_status}</td>
// 		</tr>
// 	</>

// ))}