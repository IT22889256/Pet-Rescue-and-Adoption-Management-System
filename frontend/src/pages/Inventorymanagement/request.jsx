import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Request() {
	const [Req, setrequest] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/InventoryManager/request').then(res => {
			console.log(res);
			setrequest(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">request</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to="/InventoryManager/request/createrequest" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >create request</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						{/* </td >
								<td>
									{request.request_no}
								</td >
								<td>
									{request.request_to}
								</td >
								<td>
									{request.request_date}
								</td > */}
							<th>Request id</th>
							<th>Request no</th>
							<th>Request to</th>
							<th>Request date</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{Req.map((request) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={request._id}>
								<td>
									{request.request_id}
								</td >
								<td>
									{request.request_no}
								</td>
								<td>
									{request.request_to}
								</td>
								<td>
									{request.request_date}
								</td>
							
								
								<td>
									<Link to={`/InventoryManager/request/viewrequest/${request._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
									
									{/* const [supplier_id, setsupplierid] = useState()
const [supplier_name, setsuppliername] = useState()
const [supplier_address, setsupplieraddress] = useState()
const [supplier_email,setsupplieremail] = useState()
const [supplier_age,setsupplierage] = useState()
const [supplier_phonenumber,setsupplierphonenumber] = useState() */}

								</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
