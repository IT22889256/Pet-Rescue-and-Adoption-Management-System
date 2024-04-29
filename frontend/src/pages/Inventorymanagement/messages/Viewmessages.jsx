import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'


export default function ViewSupplyRequest() {
	
	const [supply, setRequest] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/InventoryManager/messages/viewmessages/${id}`)
		.then((res) => {
			setRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
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
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

