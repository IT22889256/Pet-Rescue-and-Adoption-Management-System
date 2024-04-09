
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

import axios from 'axios'

export default function Viewrequest() {
	
	const [requests, setrequests] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/suppliers/order/vieworder/${id}`)
		.then((res) => {
			setrequests(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	const Accept = (e) => {
		
		const data = {
			"requests_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/suppliers/editorder/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/Suppliers/order`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"requests_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/suppliers/editorder/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/Suppliers/order`)
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
							
						<th>Requests Id</th>
							<th>Requests from</th>
							<th>Requests Description</th>
							<th>Requests Date</th>
							<th>Action</th>
							<th> Request Status</th>

								{requests.order_status==='Pending' &&(
								<th>Action</th>

								)}
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{requests._id}
								</td >
								<td>
								{requests.requests_id}
								</td >
								<td>
									{requests.requests_from}
								</td >
								<td>
									{requests.requests_description}
								</td >
								<td>
									{requests.requests_date}
								</td >
									{requests.order_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
										<div>{requests.order_status}</div>
									</td>)}
									{requests.order_status=== "Accept" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{requests.order_status}</div>
									</td>)}
									{requests.order_status=== "Reject" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{requests.order_status}</div>
									</td>)}
								
								<td>
								{requests.order_status==='Pending' &&(
								<>
									<Link onClick={Accept} to={`/suppliers/requests/viewrequests/${requests._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link  onClick={Reject} to={`/suppliers/requests/viewrequests/${requests._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
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

