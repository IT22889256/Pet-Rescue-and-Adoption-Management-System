import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Viewsupplier() {
	
	const [supplier,setsupplier] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/inventoryManager/supplier/viewsupplier/${id}`)
		.then((res) => {
			setsupplier(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">supplier</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>supplier name</th>
							<th>supplier category</th>
							<th>supplier quantity</th>
							<th>supplier price</th>
							<th>supplier image</th>
							<th>supplier date</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{supplier._id}
								</td >
								<td>
									{supplier.supplier_name}
								</td >
								<td>
									{supplier.supplier_category}
								</td >
								<td>
									{supplier.supplier_quantity}
								</td >
								<td>
									{supplier.supplier_price}
								</td >
								<td>
									{supplier.supplier_image}
								</td >
								<td>
									{supplier.supplier_date}
								</td >
								<td>
								<Link to={`/InventoryManager/supplier/editsupplier/${supplier._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
								<Link to={`/InventoryManager/supplier/removesupplier/${supplier._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
								</td >
								
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

