import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function AdoptionProcess() {
	const [adoptionProcess, setAdoptionProcess] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/adoptionManager/adoptionProcess').then(res => {
			console.log(res);
			setAdoptionProcess(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Adoption Process Details</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/UserAffairsManager/handleFeedback/createFeedback'className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Rescue Request</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3 ">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
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
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{adoptionProcess.map((adoptionProcess) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center h-10' key={adoptionProcess._id}>
								<td>
									{adoptionProcess._id}
								</td >
								<td>
									{adoptionProcess.adopter_nic}
								</td>
								<td>
									{adoptionProcess.adopter_name}
								</td>
								<td>
									{adoptionProcess.adopter_phone}
								</td>
								<td>
									{adoptionProcess.adopter_pettype}
								</td>
								<td>
									{adoptionProcess.adopter_petname}
								</td>
								<td>
									{adoptionProcess.adopter_message}
								</td>
								<td>
									{adoptionProcess.adoption_process_status}
								</td>
								<td>
									<Link to={'/adoptionManager/adoptionProcess/ViewAdoptionProcess/${adoptionProcess._id}'} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
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
// 	</>

// ))}
