import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function PetProfile() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/inventoryManager/items').then(res => {
			console.log(res);
			setItems(res.data)
		})
	},[])



	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Items</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to="/InventoryManager/Items/additem" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add Items</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Item Id</th>
							<th>Name</th>
							<th>Category</th>
							<th>Quantity</th>
							<th>price</th>
							<th>Image</th>
							<th>Date</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{items.map((item) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={item._id}>
								<td>
									{item._id}
								</td >
								<td>
									{item.item_name}
								</td>
								<td>
									{item. item_category}
								</td>
								<td>
									{item.item_quantity}
								</td>
								<td>
									{item.item_price}
								</td>
								<td>
									{item.item_image}
								</td>
								<td>
									{item.item_date}
								</td>
								
								<td>
									<Link to={`/InventoryManager/Items/veiwitem/${item._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
									
									
								</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
// {pets.map((pets)=>(
// 	<>
// 		<tr key={pets.id}>
// 			<td>{pets.request_id}</td>
// 			<td>{pets.task_id}</td>
// 			<td>{pets.pet_name}</td>
// 			<td>{pets.pet_type}</td>
// 			<td>{pets.health_status}</td>
// 		</tr>
// 	</>

// ))}