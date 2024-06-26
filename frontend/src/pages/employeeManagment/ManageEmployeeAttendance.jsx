import React, { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
import axios from 'axios'

export default function ManageEmployeeAttendance() {
	const [employees, setEmployees] = useState([]);
	const [selectedEmployeeEids, setSelectedEmployeeEids] = useState([]);
	const [selectAllChecked, setSelectAllChecked] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/employees').then(res => {
		  setEmployees(res.data);
		});
	  }, []);
	

	  const ComponetRef = useRef();
	  const handlePrint = useReactToPrint({
		  content: () => ComponetRef.current,
		  DocumentTItle:" Employee Report",
		  onafterprint: ()=>("Employee Report Successfully Download")
	  })

	  	const [searchQuery, setSearchQuery] = useState("");
		console.log(searchQuery);
	
	  const handleCheckboxChange = (employeeEid) => {
		const isSelected = selectedEmployeeEids.includes(employeeEid);
	
		if (isSelected) {
		  setSelectedEmployeeEids(prevSelected => prevSelected.filter(eid => eid !== employeeEid));
		} else {
		  setSelectedEmployeeEids(prevSelected => [...prevSelected, employeeEid]);
		}
	  };
	
	  const handleSelectAll = () => {
		if (selectAllChecked) {
		  setSelectedEmployeeEids([]);
		} else {
		  const allEmployeeEids = employees.map(employee => employee.eid);
		  setSelectedEmployeeEids(allEmployeeEids);
		  
		}
	
		setSelectAllChecked(prevState => !prevState);
	  };
	
	  const handleSaveSelectedEmployees = async () => {
		const selectedEmployeeDetails = employees.filter(employee => selectedEmployeeEids.includes(employee.eid));
	
		try {
		  const response = await axios.post('http://localhost:3000/EmployeeManager/attendance/markAttendance', selectedEmployeeDetails);
		  alert('Selected employees saved successfully!');
		} catch (error) {
		  console.error('Failed to save selected employees:', error);
		  alert('Failed to save selected employees. Please try again.');
		}
	  };

	return (<>
	< div className="relative">
        <input
		onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
		  name='search'
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
		
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button></div> 
			<div  ref={ComponetRef} className="border-x border-gray-200 rounded-sm mt-3">
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Manage Daily Attendace</strong>

			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/employeeManager/attendance/viewTodayAttendance/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >view today attendance</Link>
			
			{/* Select All Button */}
			<button onClick={handleSelectAll} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {selectAllChecked ? 'Deselect All' : 'Select All'}
        </button>

		<button
        onClick={handleSaveSelectedEmployees}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
        Mark Selected Employees
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
						{employees.filter((employee) => {
    const query = searchQuery.toLowerCase(); // Convert searchQuery to lowercase
    const eid = employee.eid.toLowerCase(); // Convert employee ID to lowercase
    const firstName = employee.firstName.toLowerCase(); // Convert firstName to lowercase
    const jobRole = employee.jobRole.toLowerCase(); // Convert jobRole to lowercase
    
    return query === '' ||
        eid.includes(query) ||
        firstName.includes(query) ||
        jobRole.includes(query);
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
								
								<input
                    type="checkbox"
                    checked={selectedEmployeeEids.includes(employee.eid)}
                    onChange={() => handleCheckboxChange(employee.eid)}
                  />
								</td>

								<td>
									<Link to={`/employeeManager/attendance/${employee._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>

									
								</td>
							</tr>
						))}
					</tbody> }

				</table>
			
			</div>
			</div>
		</div>
		</div>
    
	
	</>)
		
	
}
