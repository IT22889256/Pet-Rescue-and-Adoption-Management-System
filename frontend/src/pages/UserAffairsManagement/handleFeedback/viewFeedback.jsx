
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
//simport { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewFeedback1() {
	
	const navigate = useNavigate()
	const Accept = (e) => {
		
		const data = {
			"status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/userAffairsManager/feedback/updateFeedback/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/UserAffairsManager/handleFeedback`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/userAffairsManager/feedback/updateFeedback/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/UserAffairsManager/handleFeedback`)
        })
        .catch(err => console.log(err))
	}


	const [feedback, setfeedback] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/userAffairsManager/feedback/getFeedback/${id}`)
		.then((res) => {
			setfeedback(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
// return (
// 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// 			<strong className="text-gray-700 font-medium">Feedback</strong>
// 			<div className="border-x border-gray-200 rounded-sm mt-3">
// 				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
// 					<thead className="bg-[#c1c3c558]" >
// 						<tr>
// 							<th>User ID</th>
// 							<th>Feedback ID</th>
// 							<th>Email</th>
// 							<th>Feedback</th>
// 							<th>Action</th>
// 						</tr>
// 					</thead>
// 						<tbody>
// 						<tr className='border-b-2 border-[#c1c3c558] text-center'>
// 								<td>
// 									{feedback.user_id}
// 								</td >
// 								<td>
// 									{feedback._id}
// 								</td >
// 								<td>
// 									{feedback.email}
// 								</td >
// 								<td>
// 									{feedback.reason}
// 								</td >
								   
								
						// 		<td>
						// 		{feedback.status==='Waiting' &&(

						// 		<>
						// 			<Link onClick={Accept} to={`/userAffairsManager/feedback/${feedback._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
						// 			<Link  onClick={Reject} to={`/userAffairsManager/feedback/${feedback._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
						// 		</>
						// 		)}

						//    {feedback.status=== "Accept" && (
						// 			<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
						// 				<div>{feedback.status}</div>
						// 			</td>)}
						// 			{feedback.status=== "Reject" && (
						// 			<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
						// 				<div>{feedback.status}</div>
						// 			</td>)}

// 								</td> 

// 							</tr>
						
// 					</tbody>
					
// 				</table>
// 			</div>
// 		</div>
// 	)
// }

return (<>
<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
		<div className="bg-white shadow overflow-hidden sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Feedback</h3>
			</div>
			<div className="border-t border-gray-200">
				<dl>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg text-black-500 font-medium">User ID</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{feedback.user_id}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Feedback ID</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{feedback._id}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Email</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{feedback.email}</dd>
					</div>
					<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-lg font-medium text-black-500">Feedback</dt>
						<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{feedback.reason}</dd>
					</div>
					<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
					
								{feedback.status==='Waiting' &&(

								<>
									<Link onClick={Accept} to={`/userAffairsManager/feedback/${feedback._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link  onClick={Reject} to={`/userAffairsManager/feedback/${feedback._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
								</>
								)}

						   {feedback.status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{feedback.status}</div>
									</td>)}
									{feedback.status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{feedback.status}</div>
									</td>)}

					</div>
				</dl>
			</div>
		</div>
	</div>
	
	
</>
)
}

