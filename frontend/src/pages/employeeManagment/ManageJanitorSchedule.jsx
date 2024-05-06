import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'

export default function JanitorScheduleProfile() {
	const [schedules, setSchedules] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/janitorSchedule/').then(res => {
			console.log(res);
			setSchedules(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Janitor Task Schedules</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/employeeManager/CreateJanitorSchedule' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Schedule</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Task ID</th>
							<th>Task Name</th>
							<th>Group Leader</th>
                            <th>Date</th>
							<th>Schedule Status</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{schedules.map((schedule) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={schedule._id}>
								<td>
									{schedule.JanitorTaskScheduleId}
								</td >
								<td>
									{schedule.TaskName}
								</td >
								<td>
									{schedule.Staff_Member1}
								</td>
								<td>
									{new Date(schedule.createdAt).toLocaleDateString()}
								</td>
								
								<td>
								{schedule.status=== "Completed" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{schedule.status}</div>
									</td>)}
									{schedule.status=== "Ignore" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
										<div>{schedule.status}</div>
									</td>)}
									{schedule.status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{schedule.status}</div>
									</td>)}
									{/* {schedule.schedule_status !== "Completed" && (<div>{schedule.schedule_status}</div>)} */}
								</td>	
								<td>
								
									<Link to={`/employeeManager/ViewJanitorSchedule/${schedule._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
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
