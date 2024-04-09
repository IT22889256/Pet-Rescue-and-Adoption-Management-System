import React, { useEffect, useState } from 'react';
import {useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function ViewVehicle() {
    const [vehicle, setVehicle] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/vehicles/${id}`)
            .then((res) => {
                setVehicle(res.data);
            }).catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Vehicle Profile</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle ID</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle._id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Serial Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Vehicle_Serial_No}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Model</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Vehicle_Model}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Plate Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Plate_Number}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Year Manufactured</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Year_Manufactured}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Engine Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Engine_Number}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Chassis Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Chassis_Number}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.Vehicle_Type}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Status</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{vehicle.vehicle_status}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Actions</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                            <Link to={`/transportManager/vehicleProfile/EditVehicle/${vehicle._id}`} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 text-xs text-gray-400 ml-1">Edit</Link>
                            <Link to={`/transportManager/vehicleProfile/RemoveVehicle/${vehicle._id}`} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 text-xs text-gray-400 ml-1">Remove</Link>
                        </dd></div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
