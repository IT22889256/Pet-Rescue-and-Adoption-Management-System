import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers//petHealthStatus'
import axios from 'axios'

export default function Order() {

	const [order, setorder] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/inventoryManager/order').then(res => {
			console.log(res);
			setorder(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Request</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/inventoryManager/order/createorder' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Orders</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>Order ID</th>
							<th>Item ID</th>
							<th>Quantity</th>
							<th>Order date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{order.map((order) => (
							order.order_status === 'Pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={order._id}>
								<td>
									{order._id}
								</td >
								<td>
									{order.item_id}
								</td>
								<td>
									{order.order_quantity}
								</td>
								<td>
									{order.date}
								</td>
									{order.order_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{order.order_status}</div>
									</td>)}
								<td>
									<Link to={`/inventoryManager/order/vieworder/${order._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">history</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
						    <th>Order ID</th>
							<th>Item ID</th>
							<th>Quantity</th>
							<th>Order date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{order.map((order) => (
								order.order_status !== 'Pending' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={order._id}>
								<td>
									{order.order_id}
								</td >
								<td>
									{order.item_id}
								</td>
								<td>
									{order.order_quantity}
								</td>
								<td>
									{order.date}
								</td>
									{order.order_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{order.order_status}</div>
									</td>)}
									{order.order_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{order.order_status}</div>
									</td>)}
								<td>
									<Link to={`/inventoryManager/order/vieworder/${order._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>
								)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		</>
	)
}