import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewPet() {
	
	const [Pet, setPet] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/petProfile/viewPet/${id}`)
		.then((res) => {
			setPet(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (<>
	{/* <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
	<strong className="text-gray-700 font-medium">Pet Profile</strong>
	<div className="border-x border-gray-200 rounded-sm mt-3">
		<table className="bg-[#f3f3f3] w-full text-gray-700">
			<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Pet ID</th>
							<th>Request ID</th>
							<th>Task ID</th>
							<th>Pet Name</th>
							<th>Type</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{pet._id}
								</td >
								<td>
									{pet.request_id}
								</td >
								<td>
									{pet.task_id}
								</td >
								<td>
									{pet.pet_name}
								</td >
								<td>
									{pet.pet_type}
								</td >	
									{pet.health_status=== "Good" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center wrap">
										<div>{pet.health_status}</div>
									</td>)}
									{pet.health_status=== "Treating" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfc31c] text-center">
										<div>{pet.health_status}</div>
									</td>)}
									{pet.health_status=== "Need Treament" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{pet.health_status}</div>
									</td>)}
							
								<td>
								<Link to={`/petManager/petProfile/EditPet/${pet._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
								<Link to={`/petManager/petProfile/RemovePet/${pet._id}`} className="  bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1  ">Remove</Link>
								</td>
							</tr>
					</tbody>
				</table>
			</div>
		</div> */}
		{/* <div className="flex bg-white p-6 shadow-[0_2px_15px_-6px_rgba(0,0,0,0.2)] max-w rounded-2xl font-[sans-serif] overflow-hidden mx-auto mt-4">
    	<div className="mt-4 table-row-group">
        <img src='https://i.ibb.co/713YjHp/pexels-emrah-ayvali-1981111.jpg' className="w-full h-w-full rounded-sm" />
			<div className='table w-full'>
			<div className='inline-grid grid-cols-2 mt-4 table-row'>
						<p className="text-xl text-[#333] font-extrabold table-cell text-left ">Pet ID</p>
						<p className="text-xl text-[#806c6c] font-extrabold table-cell text-left">{pet._id}</p>
					</div><br />
					<div className='inline-grid grid-cols-2 mt-4 table-row'>
						<p className="text-xl text-[#333] font-extrabold table-cell  text-left ">Request ID</p>
						<p className="text-xl text-[#806c6c] font-extrabold table-cell text-right">{pet.request_id}</p>
					</div><br />
					<div className='inline-grid grid-cols-2 mt-4 table-row'>
						<p className="text-xl text-[#333] font-extrabold table-cell  text-left ">Pet Name</p>
						<p className="text-xl text-[#806c6c] font-extrabold table-cell text-right">{pet.pet_name}</p>
					</div><br />
					<div className='inline-grid grid-cols-2 mt-4 table-row'>
						<p className="text-xl text-[#333] font-extrabold table-cell  text-left ">Pet Name</p>
						<p className="text-xl text-[#806c6c] font-extrabold table-cell text-right">{pet.pet_name}</p>
					</div><br />
					<div className='inline-grid grid-cols-2 mt-4 table-row'>
						<p className="text-xl text-[#333] font-extrabold table-cell  text-left">Pet Type</p>
						<p className="text-xl text-[#806c6c] font-extrabold table-cell text-right">{pet.pet_type}</p>
					</div>
			</div>
	</div>
    </div> */}

{/* <div>
    <div className="inline-flex gap-1 table-auto w-full">
        <div>
        <div className="inline-flex h-[22rem] bg-white p-4 rounded-sm border border-gray-200 w-full">
            <div className="mt-3 flex-1 text-xs">
                <img className='"object-cover h-60 w-50 m-5' src="https://i.ibb.co/713YjHp/pexels-emrah-ayvali-1981111.jpg" alt='profile_Image'/>
            </div>
            <div className='flex-col'>
                <div className='flex-row mr-5 m-1'>
					<div className="sm:col-span-1">
						<label htmlFor="request-id" className="block text-xl text-[#333]  text-sm font-medium leading-6 text-gray-900">
							Pet ID
						</label>
						<div className="text-xl text-[#806c6c] mt-2">
						<p>{pet._id}</p>
                    </div>
                    </div>
					<div className='flex-row mr-5 m-1'>
						<div className="sm:col-span-1">
							<label htmlFor="request-id" className="block text-xl text-[#333]  text-sm font-medium leading-6 text-gray-900">
								Pet Name
							</label>
							<div className="text-xl text-[#806c6c] mt-2">
								<p>{pet.request_id}</p>
							</div>
						</div>	
					</div>
					<div className='flex-row mr-5 m-1'>
						<div className="sm:col-span-1">
							<label htmlFor="request-id" className="block text-xl text-[#333]  text-sm font-medium leading-6 text-gray-900">
								Pet Name
							</label>
							<div className="text-xl text-[#806c6c] mt-2">
								<p>{pet.pet_name}</p>
							</div>
						</div>	
					</div>
					
                </div>                
            </div>
			
        </div>
        </div>
    </div>
	</div> */}
<div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Vehicle Profile</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Pet ID</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet._id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Request IDr</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.request_id}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Task ID</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.Vehicle_Model}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Pet Name</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.Plate_Number}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Year Manufactured</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.Year_Manufactured}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Engine Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.Engine_Number}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Chassis Number</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.Chassis_Number}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Type</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.Vehicle_Type}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Vehicle Status</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{Pet.vehicle_status}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
		</>
	)
}

