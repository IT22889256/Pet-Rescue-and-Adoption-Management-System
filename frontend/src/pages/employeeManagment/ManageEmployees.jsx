import React, { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
import axios from 'axios'

export default function ManageEmployees() {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/employees').then(res => {
			console.log(res);
			setEmployees(res.data)
		})
	},[])

	const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"Deleted Employee Report",
		onafterprint: ()=>("Employee Report Successfully Download")
	})

	// const [searchQuery, setSearchQuery] = useState("");
	// const [noReasults, setNoResults] = useState(false);

	// const handleSearch = () => {
	// 	fetchHandler().then((data) => {
	// 		const filterRescueRequests = data.rescueRequests.filter((rescueRequest) => 
	// 		Object.values(rescueRequest).some((field) =>
	// 		field.toString().toLowerCase().includes(searchQuery.toLowerCase())
	// 		))
	// 		setRescueRequests(filterRescueRequests)
	// 		setNoResults(filterRescueRequests.lenght === 0)
	// 	},[])
	// }

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
			<strong className="text-gray-700 font-medium">Manage Employees</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button></div> 

			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/employeeManager/employees/createEmployee' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Profile</Link></div>
			<div  ref={ComponetRef} className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>EMP ID</th>
							<th>First Name</th>
							<th>Job role</th>
							<th>phone Number</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						
						{employees.filter((employee) => {
							return searchQuery.toUpperCase() === '' 
							? employee 
							: employee.eid.toUpperCase().includes(searchQuery)
						}).map((employee) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={employee._id}>
								<td>
									{employee.eid}
								</td >
								<td>
									{employee.firstName}
								</td>
								<td>
									{employee.jobRole}
								</td>
								<td>
									{employee.phoneNumber}
								</td>

								<td>
									<Link to={`/employeeManager/employees/viewEmployee/${employee._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>

									
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
