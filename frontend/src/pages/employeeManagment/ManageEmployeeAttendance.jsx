import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ManageEmployeeAttendance() {
	const [employees, setEmployees] = useState([]);
	const [checkboxes, setCheckboxes] = useState({});  // State to track select all checkbox

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/employees').then(res => {
			const initialCheckboxes = {};	
			res.data.forEach(employee => {
				initialCheckboxes[employee._id] = false; // Initialize all checkboxes as unchecked
			  });
			  setCheckboxes(initialCheckboxes);
			  setEmployees(res.data)
		})
	},[])

	 // Function to handle individual checkbox toggle
	 const handleCheckboxChange = (employeeId) => {
		setCheckboxes({
		  ...checkboxes,
		  [employeeId]: !checkboxes[employeeId], // Toggle the checkbox status
		});
	  };
	
	   // Function to handle select all checkbox toggle
  const handleSelectAll = () => {
    const updatedCheckboxes = {};
    const selectAll = !Object.values(checkboxes).every(checked => checked); // Check if all are currently checked

    Object.keys(checkboxes).forEach(employeeId => {
      updatedCheckboxes[employeeId] = selectAll; // Set all checkboxes to selectAll state
    });

    setCheckboxes(updatedCheckboxes);
  };

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Manage Daily Attendace</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/employeeManager/employees/createEmployee' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Mark Attendance</Link>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/employeeManager/employees/createEmployee' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >View today attendance</Link>
			</div>
			{/* Select All Button */}
			<button onClick={handleSelectAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Select All
        </button>
		</div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>EMP ID</th>
							<th>First Name</th>
							<th>Job role</th>
							<th>Present</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{employees.map((employee) => (
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
								{/* Individual Checkbox */}
								 {/* Individual Checkbox */}
								 <input
                   					 type="checkbox"
                   					 checked={!!checkboxes[employee._id]} // Convert to boolean for checked attribute
                   					 onChange={() => handleCheckboxChange(employee._id)}
                 					 />
								</td>

								<td>
									<Link to={`/employeeManager/attendance/${employee._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
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
	)
}
