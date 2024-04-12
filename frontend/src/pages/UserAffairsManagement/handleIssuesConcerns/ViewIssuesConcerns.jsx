
import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'


export default function ViewIssueAndConcern() {
	
	const navigate = useNavigate()
	const Accept = (e) => {
		
		const data = {
			"issuesandconcerns_status":"Accept"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/userAffairsManager/issueandconcern/updateIssueAndConcern/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/UserAffairsManager/handleIssuesConcerns`)
        })
        .catch(err => console.log(err))
	}

	const Reject = (e) => {
		
		const data = {
			"issuesandconcerns_status":"Reject"
		}
		
		console.log('result')
        axios.put(`http://localhost:3000/userAffairsManager/issueandconcern/updateIssueAndConcern/${id}`,data)
        .then(result => {
			
            alert('updated')
            console.log(result)
            navigate(`/UserAffairsManager/handleIssuesConcerns`)
        })
        .catch(err => console.log(err))
	}


	const [issueandconcern, setIssueAndConcern] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/userAffairsManager/issueandconcern/getIssueAndConcern/${id}`)
		.then((res) => {
			setIssueAndConcern(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Technical Issues And Adoption Related Concerns</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>User ID</th>
							<th>Issue or Concern ID</th>
							<th>Email</th>
							<th>Message</th>
							<th>Action</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{issueandconcern.user_id}
								</td >
								<td>
									{issueandconcern._id}
								</td >
								<td>
									{issueandconcern.email}
								</td >
								<td>
									{issueandconcern.message}
								</td >
								   
								
								<td>
								{issueandconcern.issuesandconcerns_status==='Waiting' &&(

								<>
									<Link onClick={Accept} to={`/userAffairsManager/issueandconcern/${issueandconcern._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Accept</Link>
									<Link  onClick={Reject} to={`/userAffairsManager/issueandconcern/${issueandconcern._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Recject</Link>
								</>
								)}

							{issueandconcern.issuesandconcerns_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{issueandconcern.issuesandconcerns_status}</div>
									</td>)}
									{issueandconcern.issuesandconcerns_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{issueandconcern.issuesandconcerns_status}</div>
									</td>)}

								
								</td> 

							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

