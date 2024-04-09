
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Vieworder() {
	
	const [order, setorder] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/inventoryManager/order/vieworder/${id}`)
		.then((res) => {
			setorder(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	const Accept = (e) => {
		
		const data = {
			"order_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/inventoryManager/order/vieworder/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/inventoryManager/order/createorder/${id}`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"order_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/inventoryManager/order/vieworder/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/inventoryManager/order`)
        })
        .catch(err => console.log(err))
	}

return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Rescue request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						<th>Order ID</th>
							<th>Item ID</th>
							<th>Quantity</th>
							<th>Order date</th>
							<th>Status</th>
							<th>Action</th>
						

								{order.order_status==='Pending' &&(
								<th>Action</th>

								)}
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
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
								</td >
								
							
									{order.order_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
										<div>{order.order_status}</div>
									</td>)}
									{order.order_status=== "Accept" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{order.order_status}</div>
									</td>)}
									{order.order_status=== "Reject" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{order.order_status}</div>
									</td>)}
								
								<td>
								{order.order_status==='Pending' &&(
								<>
									<Link onClick={Accept} to={`/inventoryManager/order/vieworder/${order._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
									<Link  onClick={Reject} to={`/inventoryManager/order/vieworder/${order._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
								</>

								)}
								</td> 
								
							</tr>
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

