import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Appoinment() {
	const [appoinments, setAppoinments] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/adoptionManager/AppoinmentSchedule').then(res => {
			console.log(res);
			setAppoinments(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Appoinment Schedules</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/adoptionManager/AppoinmentSchedule/CreateAppoinment' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Schedule</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Appoinment ID</th>
							<th>Date</th>
							{/* <th>Time</th> */}
							{/* <th>Doctor</th> */}
							<th>Appoinment Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{appoinments.map((appoinment) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={appoinment.appoinment_id}>
								<td>
									{appoinment.appoinment_id}
								</td >
								<td>
									{new Date(appoinment.createdAt).toLocaleDateString()}
								</td>
								{/* <td>
									{appoinment.appoinment_time}
								</td>
                                <td>
									{appoinment.appoinment_doctor}
								</td> */}
								<td>
								{appoinment.appoinment_status=== "Completed" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{appoinment.appoinment_status}</div>
									</td>)}
									{appoinment.appoinment_status=== "In Progress" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{appoinment.appoinment_status}</div>
									</td>)}
									{appoinment.appoinment_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{appoinment.appoinment_status}</div>
									</td>)}
								</td>
                                <td>
									<Link to={`/adoptionManager/AppoinmentSchedule/ViewAppoinment/${appoinment._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
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


/*
<th>typeOfPet</th>
<th>petName</th>
<th>message</th>
<th>status</th>*/