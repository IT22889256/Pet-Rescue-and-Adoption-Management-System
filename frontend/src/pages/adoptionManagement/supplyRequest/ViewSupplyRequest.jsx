import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'


export default function ViewSupplyRequest() {
	
	const [supply, setRequest] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/adoptionManager/supplyRequest/viewSupplyRequest/${id}`)
		.then((res) => {
			setRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		/*<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Supply Request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Request ID</th>
							<th>Item Type</th>
							<th>Pet Type</th>
							<th>Brand</th>
							<th>Message</th>
							<th>Item Image</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{supply._id}
								</td >
								<td>
									{supply.supply_item}
								</td >
								<td>
									{supply.supply_pettype}
								</td >
								<td>
									{supply.supply_brand}
								</td >
								<td>
									{supply.supply_message}
								</td >
								<td>
									{supply.supply_image}
								</td >
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>*/

		<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Supply Request</h3>
                </div>
				<div className="mt-3 flex text-xs justify-center">
                <img className='object-cover h-60 w-60 m-5 rounded-full' src={supply.supply_image} alt='supply_image'/>
				</div>
                <div className="border-t border-gray-200">
                    <dl>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg text-black-500 font-medium">Request ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supply.supply_id}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Item Type</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supply.supply_item}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Pet Type</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supply.supply_pettype}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Brand</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supply.supply_brand}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Quantity</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supply.supply_quantity}</dd>
                        </div>
						<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Message</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supply.supply_message}</dd>
                        </div>
						<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
							<Link to={`/adoptionManager/supplyRequest/editSupplyRequest/${supply._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1 ">Edit</Link>	
							<Link to={`/adoptionManager/supplyRequest/deleteSupplyRequest/${supply._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-lg text-gray-400  text-center ml-1 ">Delete</Link>
						</div>

						</dl>
                </div>
            </div>
        </div>
	)
}

