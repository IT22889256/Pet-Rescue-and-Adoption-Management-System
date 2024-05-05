import React, { useEffect, useRef, useState } from 'react'
import { Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
import axios from 'axios'
import { HiOutlineSearch } from "react-icons/hi";
export default function RescueRequest() {

	const [rescueRequests, setRescueRequests] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/rescueRequest').then(res => {
			console.log(res);
			setRescueRequests(res.data)
		})
	},[])

	// const fetchHandler = async () => {
	// 	return await axios.get('http://localhost:3000/petManager/rescueRequest').then((res) => res.data)
	// }

	const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"Rescue Requests Report",
		onafterprint: ()=>("Rescue Requests Report Successfully Download")
	})

	// const [searchQuery, setSearchQuery] = useState("");
	// const [noReasults, setNoResults] = useState(false);

	// const handleSearch = () => {
	// 	fetchHandler().then((data) => {
	// 		const filterRescueRequests = data.rescueRequests.filter((rescueRequest) => 
	// 		Object.values(rescueRequest).some((field) =>
	// 		field.toString().toLowerCase().includes(searchQuery.toLowerCase())
	// 		))
	// 		setRescueRequests(filterRescueRequests)
	// 		setNoResults(filterRescueRequests.lenght === 0)
	// 	},[])
	// }

	const [searchQuery, setSearchQuery] = useState("");
	console.log(searchQuery);
	

	return (<>
	<div className="relative">
        <input
		onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
		  name='search'
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
        />
		<div>
			<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Request</strong>
			 <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button></div> 
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							<th>Rescue Request ID</th>
							<th>Pet Type</th>
							<th>Heath Status</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{rescueRequests.map((rescueRequest) => (
							rescueRequest.rescue_request_status === 'Pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={rescueRequest._id}>
								<td>{rescueRequest.rescue_req_id}</td>
								<td>
									{rescueRequest.pet_type}
								</td >
								{rescueRequest.health_status=== "Good" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{rescueRequest.health_status}</div>
									</td>)}
									{rescueRequest.health_status=== "Need Treament" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{rescueRequest.health_status}</div>
									</td>)}
								<td>
									{rescueRequest.createdAt.split(' ')[0]}
								</td>
									{rescueRequest.rescue_request_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
								<td>
									<Link to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Rescue History</strong>
			<div ref={ComponetRef}  className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
						<tr>
							
							<th>Rescue Request ID</th>
							<th>Pet Type</th>
							<th>Heath Status</th>
							<th>Date</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{rescueRequests.filter((rescueRequest) => {
							return searchQuery === '' 
							? rescueRequest 
							: (rescueRequest.pet_type).includes(searchQuery) || rescueRequest.rescue_req_id.includes(searchQuery)|| rescueRequest.rescue_request_status.includes(searchQuery)
						}).map((rescueRequest) => (
								rescueRequest.rescue_request_status !== 'Pending' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={rescueRequest._id}>
							
								<td>{rescueRequest.rescue_req_id}</td>
								<td>
									{rescueRequest.pet_type}
								</td>
								{rescueRequest.health_status=== "Good" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{rescueRequest.health_status}</div>
									</td>)}
									{rescueRequest.health_status=== "Need Treament" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{rescueRequest.health_status}</div>
									</td>)}
								<td>
									{rescueRequest.createdAt}
								</td>
									{rescueRequest.rescue_request_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
									{rescueRequest.rescue_request_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
									{rescueRequest.rescue_request_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{rescueRequest.rescue_request_status}</div>
									</td>)}
								<td>
									<Link to={`/petManager/rescueRequest/viewRescueRequest/${rescueRequest._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>
								)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		</div>
      </div>
		
		</>
	)
}