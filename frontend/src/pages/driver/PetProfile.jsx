import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function PetProfile() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/petProfile').then(res => {
			console.log(res);
			setPets(res.data)
		})
	},[])
	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pet Profiles</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/petManager/petProfile/createPet' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Profile</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Pet Name</th>
							<th>Pet Type</th>
							<th>Gender</th>
							<th>Age</th>
							<th>Appearance</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{pets.map((pet) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={pet._id}>
								<td>
									{pet.pet_name}
								</td >
								<td>
									{pet.pet_type}
								</td>
								<td>
									{pet.pet_gender}
								</td>
								<td>
									{pet.pet_age}
								</td>
								<td>
									{pet.pet_appearance}
								</td>
								<td>{pet.health_status}</td>
								<td>
									<Link to={`/petManager/petProfile/viewPet/${pet._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									<Link to={`/petManager/petProfile/EditPet/${pet._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
									<Link to={`/petManager/petProfile/RemovePet/${pet._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
									{/* {pet.health_status==='Good' &&(
										<Link to={`/petManager/petProfile/RemovePet/${pet._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Move</Link>
									)} */}
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