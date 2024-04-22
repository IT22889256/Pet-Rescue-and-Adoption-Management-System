import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
 

export default function ViewAttendance() {
    const [employee, setEmployee] = useState({});
	const [attendance, setAttendance] = useState({});
	 const [leavecount, setLeavecount] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/EmployeeManager/employees/${id}`)
            .then((res) => {
                setEmployee(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
		
			axios.get(`http://localhost:3000/EmployeeManager/attendance/getOneAttendance/${id}`)
            .then((res) => {
                setAttendance(res.data);
				
            })
            .catch((err) => {
                console.log(err);
            });

			axios.get(`http://localhost:3000/EmployeeManager/attendance/getEmployeeAttendanceDays/${id}`)
			.then((res) => {
				setLeavecount(res.data);
			})
			.catch((err) => {
				console.log(err);
			});



    }, [id]);

	

	const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Month is zero-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Attendance Profile</h3>
                </div>
                <div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={employee?.employeeimgUrl} alt='profile_Image'/>
				</div>
				
                <div className="border-t border-gray-200">
                    <dl>
					<div className="px-4 py-5 sm:px-6">
                    <h4 className="text-lg font-medium leading-6 text-gray-600 text-left font-bold">Employee Details</h4>
                </div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500 ">Employee ID</dt>
					<dd className="mt-1 text-base text-gray-900 sm:col-span-2">{employee?.eid}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">NIC</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee?.nic}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">FirstName</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee?.firstName}</dd>
				</div>
				
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Job Role</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee?.jobRole}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Email</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee?.email}</dd>
				</div>

				<div className="px-4 py-5 sm:px-6">
                    <h4 className="text-lg font-medium leading-6 text-gray-600 text-left">Remain Leaves</h4>
                </div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Medical</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{attendance?.medical}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">casual</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{attendance?.casual}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Emergency</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{attendance?.emergency}</dd>
				</div>
				
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Attended days</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leavecount}</dd>
				</div>

					</dl>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						
                        <Link to={`/EmployeeManager/AttendanceMark`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">go back</Link>
                        
                    </div>
                </div>
            </div>
			
        </div>
    );
}

