import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function VehicleProfile() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/vehicles').then(res => {
            console.log(res);
            setVehicles(res.data);
        });
    }, []);

    return (
        <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
            <strong className="text-2xl font-semibold text-gray-800">Vehicle Profiles</strong>
            <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/transportManager/vehicleProfile/createVehicle' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create vehicle Profile</Link></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                {vehicles.map((vehicle) => (
                        <div key={vehicle._id} className="border border-gray-200 rounded-md p-4 bg-blue-100">
                        <div className="mt-3 flex text-xs justify-center">
                        <img className='object-cover h-60 w-60 m-5 rounded-full' src={vehicle.Vehicle_image} alt='profile_Image'/>
				        </div>
                        <p className="text-sm font-medium">Vehicle Serial No: {vehicle.Vehicle_Serial_No}</p>
                        <p className="text-sm font-medium">Vehicle Model: {vehicle.Vehicle_Model}</p>
                        <p className="text-sm font-medium">Plate Number: {vehicle.Plate_Number}</p>
                        <p className="text-sm font-medium">Year Manufactured: {vehicle.Year_Manufactured}</p>
                        <p className="text-sm font-medium">Engine Number: {vehicle.Engine_Number}</p>
                        <p className="text-sm font-medium">Chassis Number: {vehicle.Chassis_Number}</p>
                        <p className="text-sm font-medium">Vehicle Type: {vehicle.Vehicle_Type}</p>
                        <p className="text-sm font-medium">Vehicle Status: {vehicle.vehicle_status}</p>
                        <div className="flex justify-end mt-2">
                            <Link to={`/transportManager/vehicleProfile/viewVehicle/${vehicle._id}`} className="bg-green-500 text-white py-1 px-2 rounded hover:bg-blue-700 text-xs text-gray-400 ml-1">View</Link>
                            {/* <Link to={`/transportManager/vehicleProfile/EditVehicle/${vehicle._id}`} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 text-xs text-gray-400 ml-1">Edit</Link> */}
                            {/* <Link to={`/transportManager/vehicleProfile/RemoveVehicle/${vehicle._id}`} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 text-xs text-gray-400 ml-1">Remove</Link> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
