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
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pet Health</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Pet ID</th>
							<th>Pet Name</th>
							<th>Type</th>
							<th>Health Status</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{petHealth._id}
								</td >
								<td>
									{petHealth.pet_name}
								</td >
								<td>
									{petHealth.pet_type}
								</td >
								<td>
									{petHealth.health_status}
								</td >
								<td>
									{/*}
									<Link onClick={Accept} to={`/doctor/petHealth/ViewPetHealth/${petHealth._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link onClick={Reject} to={`/doctor/petHealth/ViewPetHealth/${petHealth._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Reject</Link>
									*/}
									<Link to={`/doctor/petHealth/EditPetHealth/${petHealth._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>

								</td>
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

