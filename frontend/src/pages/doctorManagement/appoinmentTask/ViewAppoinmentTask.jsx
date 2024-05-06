
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function ViewAppoinmentTask() {
	
	const [docTask, setAssignedTask] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/adoptionManager/AppoinmentSchedule`)
		.then((res) => {
			setAssignedTask(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])


return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Schedule</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						{/* <td className='text-center'>Transport Type</td> */}
                            <th>Appoinment ID</th>
							<th>Date</th>
							<th>Appoinment Status</th>	
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{docTask.appoinment_id}
								</td >
								<td>
									{docTask.appoinment_time}
								</td >
								<td>
									{docTask.createdAt}
								</td >
								
									{docTask.appoinment_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#8B0000] text-centerml">
										<div>{docTask.appoinment_status}</div>
									</td>)}
									{docTask.appoinment_status=== "In Progress" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
										<div>{docTask.appoinment_status}</div>
									</td>)}
							</tr>
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

