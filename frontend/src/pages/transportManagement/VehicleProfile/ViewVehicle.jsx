import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
//import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewVehicle() {
	
	const [vehicle, setVehicle] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/api/vehicles/${id}`)
		.then((res) => {
			setVehicle(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Vehicle Profiles</strong>
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
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{vehicle._id}
								</td >
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
							</tr>
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

