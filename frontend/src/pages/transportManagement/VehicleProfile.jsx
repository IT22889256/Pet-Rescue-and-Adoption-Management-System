import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function VehicleProfile() {
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/api/vehicles').then(res => {
			console.log(res);
			setVehicles(res.data)
		})
	},[])
	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Vehicle Profiles</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/transportManager/vehicleProfile/createVehicle' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create vehicle Profile</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							
							<th>Vehicle_Serial_No</th>
							<th>Vehicle_Model</th>
							<th>Plate_Number</th>
							<th>vehicle_status</th>
							<th>Year_Manufactured</th>
							<th>Engine_Number</th>
							<th>Chassis_Number</th>
							<th>Vehicle_Type</th>
							<th>Vehicle_Status</th>
						</tr>
					</thead>
					{<tbody>
						{vehicles.map((vehicle) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={vehicle._id}>
								{/* <td>
								{vehicle._id}
								</td >  */}
								<td>
									{vehicle.Vehicle_Serial_No}
								</td >
								<td>
									{vehicle.Vehicle_Model}
								</td >
								<td>
									{vehicle.Plate_Number}
								</td>
								<td>
									{vehicle.Year_Manufactured}
								</td >
								<td>
									{vehicle.Engine_Number}
								</td >
								<td>
									{vehicle.Chassis_Number}
								</td >
								<td>
									{vehicle.Vehicle_Type}
								</td>
								<td>
									{vehicle.vehicle_status}
								</td>
								<td>
									<Link to={`/transportManager/vehicleProfile/viewVehicle/${vehicle._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									<Link to={`/transportManager/vehicleProfile/EditVehicle/${vehicle._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
									<Link to={`/transportManager/vehicleProfile/RemoveVehicle/${vehicle._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
									{/* {vehicle.health_status==='Good' &&(
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