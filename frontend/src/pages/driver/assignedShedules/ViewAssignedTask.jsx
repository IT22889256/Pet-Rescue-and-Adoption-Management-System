
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewAssignedTask() {
	
	const [AssignedTask, setAssignedTask] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/api/schedules/${id}`)
		.then((res) => {
			setAssignedTask(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])

	
	const [schedule_status, setschedulestatus] = useState()
	useEffect((e) => {
        axios.get(`http://localhost:3000/api/schedules/${id}`)
        .then((res) => {
            console.log(res);
        }).catch(err => console.log(err))
    },[])


return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Schedule</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						<td className='text-center'>Transport Type</td>
							<th>Number_of_Pets</th>
							<th>Location</th>
							<th>Driver</th>
							
							<th>Vet nary Doctor</th>
                            <th>Staff Member</th>
							<th>Schedule Status</th>

								{AssignedTask.schedule_status==='Pending' &&(
								<th>Action</th>

								)}

								{AssignedTask.schedule_status==='In Progress' &&(
								<th>Action</th>

								)}

						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{AssignedTask.Transport_Type}
								</td >
								<td>
									{AssignedTask.Number_of_Pets}
								</td >
								<td>
									{AssignedTask.Location}
								</td >
								<td>
									{AssignedTask.Driver}
								</td >
								<td>
                                    {AssignedTask.Vet_nary_Doctor}
                                </td>
                                <td>
                                    {AssignedTask.Staff_Member}
                                </td>
								
									{AssignedTask.schedule_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#8B0000] text-centerml">
										<div>{AssignedTask.schedule_status}</div>
									</td>)}
									{AssignedTask.schedule_status=== "In Progress" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
										<div>{AssignedTask.schedule_status}</div>
									</td>)}
									
								
								<td>
								{AssignedTask.schedule_status==='Pending' &&(
								<>
									<Link   to={`/driver/assignedShedules/EditAssignedTask/${AssignedTask._id}`} className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								</>

								)}

								{AssignedTask.schedule_status==='In Progress' &&(
								<>
									
									<Link   to={`/driver/assignedShedules/EditAssignedTask/${AssignedTask._id}`} className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								</>

								)}


								</td> 
								
							</tr>
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

