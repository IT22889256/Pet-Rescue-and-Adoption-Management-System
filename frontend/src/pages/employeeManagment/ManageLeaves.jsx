import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ManageLeaves() {
    const [leaves, setLeaves] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

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

    const accepted = (leaveId) => {
        const data = {
            status: 'accepted'
        };
        axios.put(`http://localhost:3000/EmployeeManager/leave/${leaveId}`, data)
            .then(result => {
                alert('Leave request accepted');
                navigate(`/petManager/rescueTask/createRescueTask/${leaveId}`);
            })
            .catch(err => console.log(err));
    };

    const rejected = (leaveId) => {
        const data = {
            status: 'rejected'
        };
        axios.put(`http://localhost:3000/EmployeeManager/leave/${leaveId}`, data)
            .then(result => {
                alert('Leave request rejected');
                navigate(`/petManager/rescueRequest`);
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-gray-700 font-medium">Leave requests</strong>
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
                    <tbody>
                        {leaves.map((leave) => (
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
                                    {leave.status === 'pending' && (
                                        <>
                                            <button onClick={() => accepted(leave._id)} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400 text-center text-justify ml-1">Accept</button>
                                            <button onClick={() => rejected(leave._id)} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">Reject</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
