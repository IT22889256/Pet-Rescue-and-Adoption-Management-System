import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewAppoinment() {
	
	const [appoinment, setRequest] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/adoptionManager/AppoinmentSchedule/ViewAppoinment/${id}`)
		.then((res) => {
			setRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Appoinment Schedule</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg text-black-500 font-medium">Appoinment ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{appoinment.appoinment_id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Date</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{appoinment.createdAt}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Time</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{appoinment.appoinment_time}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Doctor</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{appoinment.appoinment_doctor}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Appoinment Status</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{appoinment.appoinment_status}</dd>
                        </div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
							<Link to={`/adoptionManager/AppoinmentSchedule/EditAppoinment/${appoinment._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
							<Link to={`/adoptionManager/AppoinmentSchedule/DeleteAppoinment/${appoinment._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Delete</Link>
						</div>

						</dl>
                </div>
            </div>
        </div>
	)
}


// <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
		// 	<strong className="text-gray-700 font-medium">Appoinment Schedule</strong>
		// 	<div className="border-x border-gray-200 rounded-sm mt-3">
		// 		<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
		// 			<thead className="bg-[#c1c3c558]" >
		// 				<tr>
		// 					<th>Appoinment ID</th>
		// 					<th>Date</th>
		// 					<th>Time</th>
		// 					<th>Doctor</th>
		// 					<th>Appoinment Status</th>
		// 					<th>Action</th>
		// 				</tr>
		// 			</thead>
		// 				<tbody>
		// 				<tr className='border-b-2 border-[#c1c3c558] text-center'>
		// 						<td>
		// 							{appoinment._id}
		// 						</td >
		// 						<td>
		// 							{appoinment.createdAt}
		// 						</td >
		// 						<td>
		// 							{appoinment.appoinment_time}
		// 						</td >
		// 						<td>
		// 							{appoinment.appoinment_doctor}
		// 						</td >
		// 						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
		// 							<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
		// 								<div>{appoinment.appoinment_status}</div>
		// 							</td>
        //                 		</div>