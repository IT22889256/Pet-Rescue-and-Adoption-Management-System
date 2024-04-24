import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

export default function ScheduleProfile() {
	const [schedules, setSchedules] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/api/schedules').then(res => {
			console.log(res);
			setSchedules(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Transportation Schedules</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/transportManager/scheduleProfile/createSchedule' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Schedule</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Transport_Type</th>
							<th>Number of Pets</th>
							<th>Location</th>
							<th>Driver</th>
							<th>Vet nary Doctor</th>
							<th>Staff Member</th>
							<th>schedule status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{schedules.map((schedule) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={schedule._id}>
								<td>
									{schedule.Transport_Type}
								</td >
								<td>
									{schedule.Number_of_Pets}
								</td>
								<td>
									{schedule.Location}
								</td>
								<td>
									{schedule.Driver}
								</td>
								<td>
									{schedule.Vet_nary_Doctor}
								</td>
								<td>{schedule.Staff_Member}</td>
								<td>
								{schedule.schedule_status=== "Completed" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										{schedule.schedule_status}
									</td>)}
									{schedule.schedule_status !== "Completed" && (<div>{schedule.schedule_status}</div>)}
								</td>	
								<td>
								
									<Link to={`/transportManager/scheduleProfile/ViewSchedule/${schedule._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									{/* <Link to={`/transportManager/ScheduleProfile/EditSchedule/${schedule._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link> */}
								
									{/* <Link to={`/transportManager/ScheduleProfile/RemoveSchedule/${schedule._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link> */}
								</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
