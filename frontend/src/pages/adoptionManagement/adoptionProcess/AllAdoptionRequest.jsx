import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function AllAdoptionRequest() {

	const [adoptionProcesses, setAdoptionProcesses] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/adoptionManager').then(res => {
			console.log(res);
			setAdoptionProcesses(res.data)
		})
	},[])

	return (<>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Request</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/adoptionManager/adoptionProcess/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Adopted Pet Report</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
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
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{adoptionProcesses.map((adoptionProcess) => (
							adoptionProcess.adopter_status === 'Pending' &&(
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={adoptionProcess._id}>
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
									{adoptionProcess.adopter_email}
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
									{adoptionProcess.adopter_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
										<div>{adoptionProcess.adopter_status}</div>
									</td>)}
								<td>
									<Link to={`/adoptionManager/adoptionProcess/ViewAdoptionRequest/${adoptionProcess._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>)
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">History</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700">
					<thead className="bg-[#c1c3c558]">
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
							<th>Action</th>
						</tr>
					</thead>
					
					{<tbody>
						{adoptionProcesses.map((adoptionProcess) => (
								adoptionProcess.adopter_status !== 'Pending' &&(
									<tr className='border-b-2 border-[#c1c3c558] text-center' key={adoptionProcess._id}>
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
									{adoptionProcess.adopter_email}
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
									{adoptionProcess.adopter_status=== "Accept" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
										<div>{adoptionProcess.adopter_status}</div>
									</td>)}
									{adoptionProcess.adopter_status=== "Reject" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
										<div>{adoptionProcess.adopter_status}</div>
									</td>)}
								<td>
									<Link to={`/adoptionManager/adoptionRequest/viewRequest/${adoptionProcess._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
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