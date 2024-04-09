import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function AllPetHealth() {

	const [petsHealth, setpetsHealth] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/doctor/petHealth').then(res => {
			console.log(res);
			setpetsHealth(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pets</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/doctor/petHealth/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Adopted Pet Report</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>Pet ID</th>
							<th>Pet Name</th>
							<th>Type</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{petsHealth.map((petHealth) => (
							
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={petHealth._id}>
								<td>
									{petHealth._id}
								</td >
								<td>
									{petHealth.pet_name}
								</td>
								<td>
									{petHealth.pet_type}
								</td>
								<td>
									{petHealth.health_status}
								</td>
									{petHealth.health_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{petHealth.health_status}</div>
									</td>)}
								<td>
									<Link to={`/doctor/petHealth/ViewPetHealth/${petHealth._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						)}
					</tbody> }
					
				</table>
			</div>
		</div>
		{/* <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Healthy Pets</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>Pet ID</th>
							<th>Pet Name</th>
							<th>Type</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{petsHealth.map((petHealth) => (
								petHealth.health_status !== 'Pending' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={petHealth._id}>
								<td>
									{petHealth._id}
								</td >
								<td>
									{petHealth.pet_name}
								</td>
								<td>
									{petHealth.pet_type}
								</td>

									{petHealth.health_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{petHealth.health_status}</div>
									</td>)}
									{petHealth.health_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{petHealth.health_status}</div>
									</td>)}
								<td>
									<Link to={`/doctor/petHealth/viewPet/${petHealth._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>
								)
						))}
					</tbody> }
					
				</table>
			</div>
		</div> */}
		</>
	)
}