import React, { useEffect, useState } from 'react';
import {useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewSchedule() {
    const [schedule, setSchedule] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/schedules/${id}`)
            .then((res) => {
                setSchedule(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Schedule Profile</h3>
                </div>

                

                <div className="border-t border-gray-200">
                    
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Transport Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.Transport_Type}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Number_of_Pets</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.Number_of_Pets}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.Location}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Driver</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.Driver}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vet_nary_Doctor</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.Vet_nary_Doctor}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Staff_Member</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.Staff_Member}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">schedule_status</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{schedule.schedule_status}</dd>
                        </div>
						
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Actions</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <Link to={`/transportManager/scheduleProfile/EditSchedule/${schedule._id}`} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 text-xs text-gray-400 ml-1">Edit</Link>
                            <Link to={`/transportManager/scheduleProfile/RemoveSchedule/${schedule._id}`} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 text-xs text-gray-400 ml-1">Remove</Link>
                        </dd></div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
