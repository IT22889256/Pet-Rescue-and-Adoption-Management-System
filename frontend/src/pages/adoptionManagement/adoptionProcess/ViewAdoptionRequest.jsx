import React, {useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function ViewAdoptionPRequest() {

	const navigate = useNavigate()
	const Accept = (e) => {
		
		const data = {
			"adopter_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/adoptionProcess/editAdoptionProcess/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate('/adoptionManager/adoptionProcess')
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"adopter_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/adoptionProcess/editAdoptionProcess/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate('/adoptionManager/adoptionProcess')
        })
        .catch(err => console.log(err))
	}
	
	const [adopter, setRequest] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/adoptionManager/adoptionProfile/viewRequest/${id}`)
		.then((res) => {
			setRequest(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])

return (
	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
		<div className="bg-white shadow overflow-hidden sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Adoption Process</h3>
			</div>
			<div className="border-t border-gray-200">
				<dl>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg text-black-500 font-medium">Adoption ID</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adoption_id}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">NIC</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_nic}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Name</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_name}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Phone Number</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_phone}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Email</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_email}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Pet Name</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_petname}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Pet Type</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_pettype}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Message</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{adopter.adopter_message}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
						<>
							<Link onClick={Accept} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adopter._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
							<Link onClick={Reject} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adopter._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Reject</Link>
						</>				
							{adopter.adopter_status=== "Accept" && (
								<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
									<div>{adopter.issuesandconcerns_status}</div>
								</td>)}
								{adopter.adopter_status=== "Reject" && (
								<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
									<div>{adopter.adopter_status}</div>
								</td>)}
					</div>
				</dl>
			</div>
		</div>
	</div>
	)
}

// <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
		// 	<strong className="text-gray-700 font-medium">Adoption Req</strong>
		// 	<div className="border-x border-gray-200 rounded-sm mt-3">
		// 		<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
		// 			<thead className="bg-[#c1c3c558]" >
		// 				<tr>
		// 					<th>Adoption ID</th>
		// 					<th>NIC</th>
		// 					<th>Name</th>
		// 					<th>Phone Number</th>
		// 					<th>Email</th>
		// 					<th>Pet Name</th>
		// 					<th>Pet Type</th>
		// 					<th>Message</th>
		// 					<th>Action</th>
		// 				</tr>
		// 			</thead>
		// 				<tbody>
		// 				<tr className='border-b-2 border-[#c1c3c558] text-center'>
		// 						<td>
		// 							{adopter.adoption_id}
		// 						</td >
		// 						<td>
		// 							{adopter.adopter_nic}
		// 						</td >
		// 						<td>
		// 							{adopter.adopter_name}
		// 						</td >
		// 						<td>
		// 							{adopter.adopter_phone}
		// 						</td >
		// 						<td>
		// 							{adopter.adopter_email}
		// 						</td >
		// 						<td>
		// 							{adopter.adopter_pettype}
		// 						</td >
		// 						<td>
		// 							{adopter.adopter_petname}
		// 						</td>
		// 						<td>
		// 							{adopter.adopter_message}
		// 						</td>
		// 						<td>
		// 							<Link onClick={Accept} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adopter._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
		// 							<Link onClick={Reject} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adopter._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Reject</Link>
		// 						</td>

		// 						{adopter.adopter_status=== "Accept" && (
		// 							<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
		// 								<div>{adopter.issuesandconcerns_status}</div>
		// 							</td>)}
		// 							{adopter.adopter_status=== "Reject" && (
		// 							<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
		// 								<div>{adopter.adopter_status}</div>
		// 							</td>)}
		// 					</tr>
						
		// 			</tbody>
					
		// 		</table>
		// 	</div>
		// </div>

