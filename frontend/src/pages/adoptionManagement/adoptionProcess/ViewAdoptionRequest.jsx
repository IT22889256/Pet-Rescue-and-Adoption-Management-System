
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewAdoptionRequest() {
	
	const [adoptionProcess, setAdoptionProcess] = useState({})
	const {id} = useParams()
	const navigate = useNavigate()
	useEffect(() => {
		axios.get(`http://localhost:3000/adoptionManager/adoptionProcess/ViewAdoptionRequest/${id}`)
		.then((res) => {
			setAdoptionProcess(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	const Accept = (e) => {
		
		const data = {
			"adoption_process_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/adoptionProcess/ViewProcessRequest/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/adoptionManager/adoptionProcess`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"adoption_process_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/adoptionProcess/viewAdoptionRequest/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/adoptionManager/adoptionProcess`)
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
						<th>Adoption ID</th>
							<th>NIC</th>
							<th>Name</th>
							<th>Phone Number</th>
							<th>Email</th>
							<th>Pet Name</th>
							<th>Pet Type</th>
							<th>Message</th>
							<th>Status</th>

							{adoptionProcess.adoption_process_status==='Pending' &&(
								<th>Action</th>

							)}
						</tr>
					</thead>
					<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{adoptionProcess._id}
								</td >
								<td>
									{adoptionProcess.adopter_nic}
								</td>
								<td>
									{adoptionProcess.adopter_name}
								</td>
								<td>
									{adoptionProcess.adopter_phone}
								</td>
								<td>
									{adoptionProcess.adopter_pettype}
								</td>
								<td>
									{adoptionProcess.adopter_petname}
								</td>
								<td>
									{adoptionProcess.adopter_message}
								</td>
									{adoptionProcess.adoption_process_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
										<div>{adoptionProcess.adoption_process_status}</div>
									</td>)}
									{adoptionProcess.adoption_process_status=== "Accept" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{adoptionProcess.adoption_process_status}</div>
									</td>)}
									{adoptionProcess.adoption_process_status=== "Reject" && (
									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{adoptionProcess.adoption_process_status}</div>
									</td>)}
								
								<td>
								{adoptionProcess.adoption_process_status==='Pending' &&(
								<>
									<Link onClick={Accept} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adoptionProcess._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link onClick={Reject} to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adoptionProcess._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
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

