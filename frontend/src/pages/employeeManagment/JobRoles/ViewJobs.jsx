import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ViewJob() {
    const [job, setJob] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/EmployeeManager/jobRole/${id}`)
            .then((res) => {
                setJob(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/EmployeeManager/jobRole/${id}`)
                .then(() => {
                    alert('Job Role deleted');
                    navigate('EmployeeManager/ManageJobRoles');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Job Role Profile</h3>
                </div>
                <div className="mt-3 flex text-xs justify-center">
                    <img className='object-cover h-60 w-60 m-5 rounded-full' src="https://i.ibb.co/713YjHp/pexels-emrah-ayvali-1981111.jpg" alt='profile_Image'/>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-bold">Job Role ID</dt>
					<dd className="mt-1 text-base text-gray-900 sm:col-span-2">{job.jobId}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Job Name</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{job.jobRole}</dd>
				</div>
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">OT Rates</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{job.otRates}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Basic salary</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{job.basicSalary}</dd>
				</div>
			

					</dl>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <Link to={`/employeeManager/JobRoles/EditJobs/${job._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
                        <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xs">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
