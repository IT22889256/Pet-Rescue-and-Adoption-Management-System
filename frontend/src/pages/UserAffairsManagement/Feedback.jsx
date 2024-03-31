import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function PetProfile() {
	const [feedbacks, setfeedbacks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/userAffairsManager/feedback').then(res => {
			console.log(res);
			setfeedbacks(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Feedback Details</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/UserAffairsManager/Feedback/CreateFeedback' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Profile</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						    {/* <th>User ID</th> */}
							<th>Feedback ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{feedbacks.map((feedback) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={feedback._id}>
								<td>
									{feedback._id}
								</td >
								<td>
									{feedback.name}
								</td>
								 <td>
									{feedback.email}
								</td>
								{/* <td>
									{pet.pet_age}
								</td>
								<td>
									{pet.pet_appearance}
								</td>
								<td>{pet.health_status}</td>  */}
								<td>
									<Link to={`/petManager/petProfile/viewPet/${feedback._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									<Link to={`/petManager/petProfile/EditPet/${feedback._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
									<Link to={`/petManager/petProfile/RemovePet/${feedback._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
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