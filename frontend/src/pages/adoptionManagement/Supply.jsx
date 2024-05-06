import React, {useRef,  useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {useReactToPrint} from 'react-to-print'
import axios from 'axios'

export default function PetSupply() {
	const [supplies, setSupplies] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/adoptionManager/supplyRequest').then(res => {
			console.log(res);
			setSupplies(res.data)
		})
	},[])

	//Report generate
	const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"Rescue Requests Report",
		onafterprint: ()=>("Rescue Requests Report Successfully Download")
	})

	//search
	const [searchQuery, setSearchQuery] = useState("");
	console.log(searchQuery);

	return (
		<div className="relative">
		<input
		onChange={(e) => setSearchQuery(e.target.value)}
		type="text"
		name='search'
		placeholder="Search..."
		className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
		/>

		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Request for Supplies</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">Generate Supply Report</button><Link to='/adoptionManager/supplyRequest/CreateSupplyRequest' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Create Supply Request</Link></div>
			<div ref={ComponetRef} className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Supply ID</th>
                            <th>Item Type</th>
							<th>Pet Type</th>
							{/* <th>Brand</th> */}
							{/*<th>Message</th>*/}
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{supplies.filter((supply) => {
							return searchQuery === '' 
							? supply 
							: supply.supply_id.includes(searchQuery)
						}).map((supply) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={supply.supply_id}>
								<td>
									{supply.supply_id}
								</td >
								<td>
									{supply.supply_item}
								</td>
								<td>
									{supply.supply_pettype}
								</td>
								{/* <td>
									{supply.supply_brand}
								</td> */}
								{/*<td>
									{supply.supply_message}
								</td>*/}
								<td>
									<Link to={`/adoptionManager/supplyRequest/viewSupplyRequest/${supply._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									{/* <Link to={`/adoptionManager/supplyRequest/editSupplyRequest/${supply._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
									<Link to={`/adoptionManager/supplyRequest/deleteSupplyRequest/${supply._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Delete</Link> */}
								</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
		</div>
	)
}
