import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

import axios from 'axios'


export default function ViewLeave() {

	const [leaves, setLeaves] = useState({})
	const {id} = useParams()
    const navigate = useNavigate();


	useEffect(() => {
		axios.get(`http://localhost:3000/EmployeeManager/leave/getLeave/${id}`)
		.then((res) => {
			console.log(res.data)
			setLeaves(res.data)

		}).catch((err) => {
			console.log(err);
		})
	},[id]);

	const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this leave request?');
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/EmployeeManager/leave/deleteLeave/${id}`)
                .then(() => {
                    alert('leave request deleted');
                    navigate('/EmployeeManager/LeaveManagement');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };



	const accepted = (leaveId) => {

        const data = {
			status: 'accepted'

        };
        
        console.log('result')
        axios.put(`http://localhost:3000/EmployeeManager/leave/acceptLeave/${leaveId}`,data)
        .then(result => {
            alert('Leave Accepted')
            console.log(result)
            //navigate('/EmployeeManager/LeaveManagement')
        })
        .catch(err => console.log(err))
    }


	const rejected = (leaveId) => {

        const data = {
			status: 'rejected'

        };
        
        console.log('result')
        axios.put(`http://localhost:3000/EmployeeManager/leave/rejectLeave/${leaveId}`,data)
        .then(result => {
            alert('Leave Rejected')
            console.log(result)
            navigate('/EmployeeManager/LeaveManagement')
        })
        .catch(err => console.log(err))
    }

//function for accept leave
	const handleAccept = (leaveId) => {
        accepted(leaveId); // Call the accepted function with leaveId
    };

//function for reject leave
	const handleReject = (leaveId) => {
		rejected(leaveId); // Call the rejected function with leaveId
	};



return (
	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
	<div className="bg-white shadow overflow-hidden sm:rounded-lg">
		<div className="px-4 py-5 sm:px-6">
			<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Leave Request Details</h3>
		</div>
		<div className="border-t border-gray-200">
			<dl>
			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-bold">Employee ID</dt>
					<dd className="mt-1 text-base text-gray-900 sm:col-span-2">{leaves.eid}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Leave ID</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.leaveID}</dd>
				</div>
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Type</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.reason}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Start date</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{formatDate(leaves.startDate)}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">How many days</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.days}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Status</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.status}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Reason</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{leaves.note}</dd>
				</div>

			

				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <button onClick={() => handleAccept(leaves._id)} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400 text-center text-justify ml-1">Accept</button>
                <button onClick={() =>handleReject(leaves._id)} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">Reject</button>
				<button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xs">Remove</button>

				</div>
				</div>
			</dl>
		</div>
	</div>
</div>

)
}




