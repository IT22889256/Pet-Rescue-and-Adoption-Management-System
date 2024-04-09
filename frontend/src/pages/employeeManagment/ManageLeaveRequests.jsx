import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { getTaskStatus } from '../../lib/helpers/petManager/rescueTaskStatus'
// import PopUp from './PopUp'


export default function ManageLeaveRequests() {

	const [leaves, setLeaves] = useState([]);
    const navigate = useNavigate();

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/leave/getLeaves').then(res => {
			console.log(res);
			setLeaves(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Leave Requests</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/petManager/rescueTask/createPetTask' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Task</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48 ">
					<thead className="bg-[#c1c3c558] ">
						<tr>
							<th>leave ID</th>
							<th>Employee ID</th>
							<th>Reason</th>
							<th>start Date</th>
							<th>Days</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{leaves.map((request) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={leaves.leaveID}>
								<td>
									{leaves.eid}
								</td>
								<td>
									{leaves.reason}
								</td>
								
								<td>{format(new Date(leaves.startDate), 'dd MMM yyyy')}</td>
								<td>{leaves.days}</td>
								<td>{getTaskStatus(leaves.status)}</td>
								{/* <td>
									<div className="text-xs text-gray-400 pl-1.5 mb-1 "><Link to='/rescueRequest' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link></div>
								</td> */}
                                <td>
									<Link to='/petManager/rescueTask/viewRescueTask' className=" bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">View</Link>
									<Link to='/petManager/rescueTask/editRescueTask' className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">Edit</Link>
									<Link to='/petManager/rescueTask/deleteRescueTask' className="bg-blue-500 text-white py-2 px-2 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify m-2 ">Remove</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
