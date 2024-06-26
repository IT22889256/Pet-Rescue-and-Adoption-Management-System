import React, { useRef, useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function PetHealthProfile() {
	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/petProfile').then(res => {
			console.log(res);
			setPets(res.data)
		})
	},[])

	//Report generate
	const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"Rescue Requests Report",
		onafterprint: ()=>("Rescue Requests Report Successfully Download")
	})
	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pet Health Profiles</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pet Health Report</button></div>
			<div ref={ComponetRef} className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Pet ID</th>
							<th>Pet Name</th>
							<th>Pet Type</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{pets.map((pet) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={pet.pet_id}>
								<td>
									{pet.pet_id}
								</td>
								<td>
									{pet.pet_name}
								</td >
								<td>
									{pet.pet_type}
								</td>
									{pet.health_status=== "Good" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{pet.health_status}</div>
									</td>)}
									{pet.health_status=== "Treating" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfc31c] text-center">
										<div>{pet.health_status}</div>
									</td>)}
									{pet.health_status=== "Need Treament" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{pet.health_status}</div>
									</td>)}
									
								<td>
									<Link to={`/adoptionManager/PetHealthProfile/viewPet/${pet._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									
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