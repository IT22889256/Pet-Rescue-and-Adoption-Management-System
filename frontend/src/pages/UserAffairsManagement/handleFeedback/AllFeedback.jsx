import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function AllFeedback() {

	const [feedback, setallFeedback] = useState([])

	useEffect(() => {
		axios.get('http://localhost:3000/userAffairsManager/feedback').then(res => {
			console.log(res);
			setallFeedback(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Feedback Details</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/UserAffairsManager/Feedback/CreateFeedback' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create Feedback</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
						    <th>Feedback ID</th>
							<th>User ID</th>
							<th>Email</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{feedback.map((feedback) => (
							feedback.status === 'Waiting' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={feedback._id}>
								<td>
									{feedback._id}
								</td >
								<td>
									{feedback.user_id}
								</td>
								<td>
									{feedback.email}
								</td>
								
									{feedback.status === "Waiting" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{feedback.status}</div>
									</td>)}
								<td>
									<Link to={`/UserAffairsManager/handleFeedback/viewFeedback/${feedback._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		{/* history */}
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">History</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
						    <th>Feedback ID</th>
							<th>User ID</th>
							<th>Email</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{feedback.map((feedback) => (
								feedback.status !== 'Waiting' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={feedback._id}>
								<td>
									{feedback._id}
								</td >
								<td>
									{feedback.user_id}
								</td>
								<td>
									{feedback.email}
								</td>
									{feedback.status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{feedback.status}</div>
									</td>)}
									{feedback.status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{feedback.status}</div>
									</td>)}
								<td>
									<Link to={`/UserAffairsManager/handleFeedback/viewFeedback/${feedback._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>
								)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		</>
	)
}