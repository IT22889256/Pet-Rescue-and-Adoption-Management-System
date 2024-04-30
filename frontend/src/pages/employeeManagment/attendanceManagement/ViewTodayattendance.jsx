import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useReactToPrint} from 'react-to-print'


export default function ManageEmployeeAttendance() {
  const [attendance, setAttendance] = useState([]);
  const [selectedEmployeeEids, setSelectedEmployeeEids] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  // Fetch today's attendance data on component mount
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get('http://localhost:3000/EmployeeManager/attendance/getTodaysAttendance');
        setAttendance(response.data.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
        // Set attendance to an empty array if the request fails
        //setAttendance([]);
      }
    };
  
    fetchAttendance();
  }, []);

  

  const ComponetRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => ComponetRef.current,
    DocumentTItle:"daily attendance Report",
    onafterprint: ()=>("daily attendance ReporSuccessfully Download")
  })
  
  
const [searchQuery, setSearchQuery] = useState("");
console.log(searchQuery);


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
      <strong className="text-gray-700 font-medium">Today Attendance</strong>
      <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1">
       {/* Select All Button */}
		
        {/* Optionally add a "Mark Attendance" button for future functionality */}
      </div>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
          <thead className="bg-[#c1c3c558]">
            <tr>
              <th>EMP ID</th>
              <th>First Name</th>
              <th>Job Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {attendance.filter((attendance) => {
							return searchQuery.toUpperCase() === '' 
							? attendance 
							: attendance.eid.toUpperCase().includes(searchQuery)
						}).map((attendance) => (
              <tr
                className="border-b-2 border-[#c1c3c558] text-center"
                key={attendance._id}
              >
                <td>{attendance.eid}</td>
                <td>{attendance.firstName}</td>
                <td>{attendance.jobRole}</td>
               
                <td>
									<Link to={`/employeeManager/attendance/deleteTodayOneAttendance/${attendance._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">delete</Link>

									
								</td>
							</tr>
						))}
					</tbody> 

				</table>
			</div>
		
    </div>
    </div>
     </div>
	</>)
		
	
}
