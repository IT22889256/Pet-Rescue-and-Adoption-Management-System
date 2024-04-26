import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
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
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Adoption Req</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Adoption ID</th>
							<th>NIC</th>
							<th>Name</th>
							<th>Phone Number</th>
							<th>Email</th>
							<th>Pet Name</th>
							<th>Pet Type</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{adopter._id}
								</td >
								<td>
									{adopter.adopter_nic}
								</td >
								<td>
									{adopter.adopter_name}
								</td >
								<td>
									{adopter.adopter_phone}
								</td >
								<td>
									{adopter.adopter_email}
								</td >
								<td>
									{adopter.adopter_pettype}
								</td >
								<td>
									{adopter.adopter_petname}
								</td>
								<td>
									{adopter.adopter_message}
								</td>
								<td>
									<Link onClick={Accept} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adopter._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link onClick={Reject} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adopter._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Reject</Link>
								</td>

								{adopter.adopter_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{adopter.issuesandconcerns_status}</div>
									</td>)}
									{adopter.adopter_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{adopter.adopter_status}</div>
									</td>)}
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

