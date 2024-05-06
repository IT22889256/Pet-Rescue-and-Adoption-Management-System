import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewPetHealth() {

	{/*const navigate = useNavigate()
	const Accept = (e) => {
		
		const data = {
			"health_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/doctor/petHealth/editPet/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate('/doctor/petHealth')
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"health_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/doctor/petHealth/editPet/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate('/doctor/petHealth')
        })
        .catch(err => console.log(err))
	}*/}

	
	const [petHealth, setpetHealth] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/doctor/petHealth/viewPet/${id}`)
		.then((res) => {
			setpetHealth(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
<div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
		<div className="bg-white shadow overflow-hidden sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Pet Health</h3>
			</div>
			<div className="border-t border-gray-200">
				<dl>
					{/* <div className="mt-3 flex text-xs justify-center">
 						<img className='object-cover h-60 w-60 m-5 rounded-full' src={petHealth.pet_image} alt='profile_Image'/>
					</div> */}
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Pet ID</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{petHealth._id}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Pet Name</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{petHealth.pet_name}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Pet Type</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{petHealth.pet_type}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500">Health Status</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{petHealth.health_status}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<Link to={`/doctor/petHealth/EditPetHealth/${petHealth._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>	
					</div>
				</dl>
			</div>
		</div>
	</div>
		// <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
		// 	<strong className="text-gray-700 font-medium">Pet Health</strong>
		// 	<div className="border-x border-gray-200 rounded-sm mt-3">
		// 		<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
		// 			<thead className="bg-[#c1c3c558]" >
		// 				<tr>
		// 					<th>Pet ID</th>
		// 					<th>Pet Name</th>
		// 					<th>Type</th>
		// 					<th>Health Status</th>
		// 					<th>Action</th>
		// 				</tr>
		// 			</thead>
		// 				<tbody>
		// 				<tr className='border-b-2 border-[#c1c3c558] text-center'>
		// 						<td>
		// 							{petHealth._id}
		// 						</td >
		// 						<td>
		// 							{petHealth.pet_name}
		// 						</td >
		// 						<td>
		// 							{petHealth.pet_type}
		// 						</td >
		// 						<td>
		// 							{petHealth.health_status}
		// 						</td >
		// 						<td>
		// 							{/*}
		// 							<Link onClick={Accept} to={`/doctor/petHealth/ViewPetHealth/${petHealth._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
		// 							<Link onClick={Reject} to={`/doctor/petHealth/ViewPetHealth/${petHealth._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Reject</Link>
		// 							*/}
		// 							<Link to={`/doctor/petHealth/EditPetHealth/${petHealth._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>

		// 						</td>
		// 					</tr>
						
		// 			</tbody>
					
		// 		</table>
		// 	</div>
		// </div>
	)
}

