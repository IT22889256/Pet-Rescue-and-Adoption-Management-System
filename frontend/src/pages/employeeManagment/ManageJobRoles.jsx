import React, { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
import axios from 'axios'

export default function ManageJobRoles() {
	const [jobRoles, setJobRoles] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/jobRole').then(res => {
			console.log(res);
			setJobRoles(res.data)
		})
	},[])

	const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"Job role Report",
		onafterprint: ()=>("Job role Report Successfully Download")
	})

	const [searchQuery, setSearchQuery] = useState("");
	console.log(searchQuery);
	

	return (<>
	<div className="relative">
        <input
		onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
		  name='search'
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />

		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Manage Job Roles</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button></div> 

			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/employeeManager/JobRoles/CreateJobs' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create JobRole</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Job Id</th>
							<th>job Role</th>
							<th>OT Rates</th>
							<th>Basic Salary</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{jobRoles.filter((jobrole) => {
							return searchQuery.toUpperCase() === '' 
							? jobrole 
							: jobrole.eid.toUpperCase().includes(searchQuery)
						}).map((jobrole) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={jobRoles._id}>
								<td>
									{jobrole.jobId}
								</td >
								<td>
									{jobrole.jobRole}
								</td>
								<td>
									{jobrole.otRates}
								</td>
								<td>
									{jobrole.basicSalary}
								</td>

								<td>
									<Link to={`/employeeManager/jobRoles/viewJobs/${jobrole._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
{/*
									<Link to={`/employeeManager/employees/editEmployee/${employee._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>

									<Link to={`/employeeManager/employees/removeEmployee/${employee._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link> */}
								</td>
							</tr>
						))}
					</tbody> }

				</table>
			</div>
		</div>
</div>
	</>)
}
