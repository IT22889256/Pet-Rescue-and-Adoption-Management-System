import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

export default function ManageLeaves() {
    const [leaves, setLeaves] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();


    //date format fixing
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/EmployeeManager/leave/getLeaves/`)
            .then((res) => {
                setLeaves(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);






	const handleDelete = (leaveId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this leave request?');
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/EmployeeManager/leave/deleteLeave/${leaveId}`)
                .then(() => {
                    alert('leave request deleted');
                    //navigate('/EmployeeManager/LeaveManagement');
					window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };




    return (<>
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Leave requests</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='#' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Generate Report</Link></div>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
                    <thead className="bg-[#c1c3c558]">
                        <tr>
                            <th>Leave ID</th>
                            <th>Employee ID</th>
                            <th>Reason</th>
                            <th>Days</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                   { <tbody>
                        {leaves.map((leave) => (
							leave.status === 'pending' &&(
                            <tr className="border-b-2 border-[#c1c3c558] text-center" key={leave._id}>
                                <td>{leave.leaveID}</td>
                                <td>{leave.eid}</td>
                                <td>{leave.reason}</td>
                                <td>{leave.days}</td>
                                <td>{formatDate(leave.startDate)}</td>
                                <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
                                    {leave.status}
                                </td>
                                <td>
                                    
                                        <>
                                            
                                        	<Link to={`/employeeManager/leave/${leave._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center ml-1">View</Link>
                                           

                                        </>
                                    
                                </td>
                            </tr>)
                        ))}
                    </tbody>}
                </table>
            </div>
        </div>

		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">History</strong>
            <div className="border-x border-gray-200 rounded-sm mt-3">
                <table className="bg-[#f3f3f3] w-full text-gray-700">
                    <thead className="bg-[#c1c3c558]">
                        <tr>
                            <th>Leave ID</th>
                            <th>Employee ID</th>
                            <th>Reason</th>
                            <th>Days</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.map((leave) => (
                            leave.status !== 'pending' && (
                                <tr className="border-b-2 border-[#c1c3c558] text-center" key={leave._id}>
                                    <td>{leave.leaveID}</td>
                                    <td>{leave.eid}</td>
                                    <td>{leave.reason}</td>
                                    <td>{leave.days}</td>
                                    {leave.status === 'accepted' && (
                                        <td className="overflow-auto py-1 capitalize rounded-md text-s text-white bg-[#15803d] text-center">
										<div>{leave.status}</div>
									</td>
                                    )}
                                    {leave.status === 'rejected' && (
                                        <td className="overflow-auto py-1 capitalize rounded-md text-s text-white bg-[#801515] text-center">
                                            <div>{leave.status}</div>
                                        </td>
                                    )}
                                    <td>
									<Link to={`/employeeManager/leave/${leave._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center ml-1">View</Link>
									<button onClick={() =>handleDelete(leave._id)} className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-700 text-xs text-gray-400 text-center ml-1">Remove</button>
                                    

                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
					</table>
			</div>
		</div>
		</>
	)
}
