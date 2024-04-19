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
            axios.put(`http://localhost:3000/EmployeeManager/employees/DeleteEmployee/${id}`)
                .then(() => {
					alert('deleted')
                    navigate('/EmployeeManager/ManageEmployees'); 
                })
                .catch((error) => {
                    console.log(error);
                });
        }

		const conformDelete = () => {
		<div
		className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
			<div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 relative">
			  <div className="my-8 text-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-16 fill-red-500 inline" viewBox="0 0 24 24">
				  <path
					d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
					data-original="#000000" />
				  <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
					data-original="#000000" />
				</svg>
				<h4 className="text-xl font-semibold mt-6">Are you sure you want to delete it?</h4>
				<p className="text-sm text-gray-500 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
				  arcu,
				  at fermentum dui. Maecenas</p>
			  </div>
			  <div className="flex flex-col space-y-2">
			   
				<button
			 className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded'
		   onClick={handleDelete}
			 >
			   Yes, Delete it
			</button>
				  {/* <Link to={`/petManager/petProfile/viewPet/${Pet._id}`} className="px-6 py-2.5 rounded-md text-black text-sm font-semibold border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200 text-center">Cancel</Link> */}
				
			  </div>
			</div>
		  </div>
		}

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
                        <Link to={`/employeeManager/employees/removeEmployee/${employee._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>	
                    </div>
                </div>
            </div>
			
        </div>
    );
}

