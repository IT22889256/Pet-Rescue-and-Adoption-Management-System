import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewPet() {
	
	const [items, setitem] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/inventoryManager/items/viewitem/${id}`)
		.then((res) => {
			setitem(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Item</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Items name</th>
							<th>Item category</th>
							<th>Item quantity</th>
							<th>Item price</th>
							<th>Item image</th>
							<th>Item date</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{items.item_name}
								</td >
								<td>
									{items.item_category}
								</td >
								<td>
									{items.item_quantity}
								</td >
								<td>
									{items.item_price}
								</td >
								<td>
									{items.item_image}
								</td >
								<td>
									{items.item_date}
								</td >
								<td>
								<Link to={`/InventoryManager/Items/edititem/${items._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
								<Link to={`/InventoryManager/Items/removeitem/${items._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
								</td >
								
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

