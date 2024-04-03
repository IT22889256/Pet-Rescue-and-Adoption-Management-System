import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewFeedback() {
	
	const [feedback, setFeedback] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/userAffairsManager/feedback/getFeedback/${id}`)
		.then((res) => {
			setFeedback(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Pet Profiles</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						<th>Feedback ID</th>
							<th>User Id</th>
							<th>Email</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
						<td>
									{feedback._id}
								</td >
								<td>
									{feedback.user_id}
								</td>
								 <td>
									{feedback.email}
								</td>
								<td>
									{feedback.reason}
								</td>
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

