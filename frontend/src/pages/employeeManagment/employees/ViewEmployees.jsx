import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
 

export default function ViewEmployee() {
    const [employee, setEmployee] = useState({});
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
    }, [id]);

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
        if (confirmDelete) {
            axios.put(`http://localhost:3000/EmployeeManager/employees/DeleteEmployee/${id}`)
                .then(() => {
                    alert('Employee deleted successfully!');
                    navigate('/EmployeeManager/ManageEmployees'); 
                })
                .catch((error) => {
                    console.log(error);
					alert('An error occurred during deletion!');
                });
        }
    };
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
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Employee Profile</h3>
                </div>
                <div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={employee.employeeimgUrl} alt='profile_Image'/>
				</div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-bold">Employee ID</dt>
					<dd className="mt-1 text-base text-gray-900 sm:col-span-2">{employee.eid}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">NIC</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.nic}</dd>
				</div>
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">FirstName</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.firstName}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Middle Name</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.middleName}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Last Name</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.lastName}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Job Role</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.jobRole}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Recruited Date</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formatDate(employee.recruitedDate)}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">birth Day</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formatDate(employee.birthday)}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Address</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.address}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">city</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.city}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Postal Code</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.postalCode}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Phone Number</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.phoneNumber}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Email</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.email}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Marital Status</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{employee.maritalStatus}</dd>
				</div>
					</dl>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<Link to={`/employeeManager/salary/CreateSalary/${employee.eid}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Create salary</Link>
                        <Link to={`/employeeManager/employees/editEmployee/${employee._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
                        <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xs">Remove</button>
                    </div>
                </div>
            </div>
			
        </div>
    );
}
