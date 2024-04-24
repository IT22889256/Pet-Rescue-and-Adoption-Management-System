
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

import axios from 'axios'

export default function ViewFundRequest() {
	
	const [fundrequests, setFundrequests] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/donationManager/fundrequests/viewrequests/${id}`)
		.then((res) => {
			setFundrequests(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	const Accept = (e) => {
		
		const data = {
			"status":"accepted"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/donationManager/fundrequests/updaterequests/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/DonationManager/fundrequests/viewfundrequests/${id}`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"status":"rejected"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/donationManager/fundrequests/updaterequests/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/DonationManager/fundrequests/viewfundrequests`)
        })
        .catch(err => console.log(err))
	}

return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Fund request</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						<th>Request ID</th>
							<th>Management </th>
							<th>Amount</th>
							<th>Date</th>
							<th>Status</th>
							

								{fundrequests.status==='pending' &&(
								<th>Action</th>

								)}
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
						<td>
									{fundrequests._id}
								</td >
								<td>
									{fundrequests.request_from}
								</td>
								<td>
									{fundrequests.amount}
								</td>
								<td>
									{fundrequests.request_date}
								</td>
							
									{fundrequests.status=== "pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
										<div>{fundrequests.status}</div>
									</td>)}
									{fundrequests.status=== "accepted" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{fundrequests.status}</div>
									</td>)}
									{fundrequests.status=== "rejected" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{fundrequests.status}</div>
									</td>)}
								
								<td>
								{fundrequests.status==='pending' &&(
								<>
									<Link onClick={Accept} to={`/DonationManager/fundrequests/viewfundrequests/${fundrequests._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link  onClick={Reject} to={`/DonationManager/fundrequests/viewfundrequests/${fundrequests._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
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

