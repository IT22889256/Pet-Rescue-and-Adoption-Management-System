import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function ManageEmployeeAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [selectedEmployeeEids, setSelectedEmployeeEids] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  // Fetch today's attendance data on component mount
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:3000/EmployeeManager/attendance/getTodaysAttendance');
        setAttendance(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
        // Set attendance to an empty array if the request fails
        setAttendance([]);
      }
    };
  
    fetchAttendance();
  }, []);

  

  // Handle checkbox change for selecting/deselecting individual employees
  const handleCheckboxChange = (employeeEid) => {
    const isSelected = selectedEmployeeEids.includes(employeeEid);

    setSelectedEmployeeEids((prevSelected) => {
      if (isSelected) {
        return prevSelected.filter((eid) => eid !== employeeEid); // Deselect
      } else {
        return [...prevSelected, employeeEid]; // Select
      }
    });
  };

  // Handle selecting/deselecting all employees (optional)
  const handleSelectAll = () => {
    const allEmployeeEids = attendance.map((attendance) => attendance.eid);
    setSelectedEmployeeEids(selectAllChecked ? [] : allEmployeeEids);
    setSelectAllChecked(!selectAllChecked); // Toggle checkbox state
  };

  // Implement functionality for saving selected employees (consider backend integration)
  const handleSaveSelectedEmployees = async () => {
    const selectedEmployeeDetails = attendance.filter((attendance) =>
      selectedEmployeeEids.includes(attendance.eid)
    );
  
    if (!Array.isArray(selectedEmployeeDetails)) {
      console.error('Selected employee details is not an array:', selectedEmployeeDetails);
      return;
    }
  
    try {
      // Replace with your actual API call and error handling
      const response = await axios.post(
        'http://localhost:3000/EmployeeManager/attendance/markAttendance',
        selectedEmployeeDetails
      );
  
      console.log('Selected employees saved successfully:', response.data);
      // Display a success message to the user
      setSelectedEmployeeEids([]); // Clear selections after successful save
    } catch (error) {
      console.error('Failed to save selected employees:', error);
      // Display an error message to the user
    }
  };

  return (
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Manage Daily Attendance</strong>
      <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
        <Link
          to="/employeeManager/employees/createEmployee" // Adjust link as needed
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Today's Attendance
        </Link>
        {/* Optionally add a "Mark Attendance" button for future functionality */}
      </div>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>EMP ID</th>
              <th>First Name</th>
              <th>Job Role</th>
              <th>Present</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((attendance) => (
              <tr
                className="border-b-2 border-[#c1c3c558] text-center"
                key={attendance._id}
              >
                <td>{attendance.eid}</td>
                <td>{attendance.firstName}</td>
                <td>{attendance.jobRole}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedEmployeeEids.includes(attendance.eid)}
                    onChange={() => handleCheckboxChange(attendance.eid)}
                  />
                </td>
                <td>
									<Link to={`/employeeManager/attendance/${attendance._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>

									
								</td>
							</tr>
						))}
					</tbody> 

				</table>
			</div>
		
    </div>
	)
		
	
}
