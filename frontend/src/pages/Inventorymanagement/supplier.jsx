import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Supplier () {
	const [Supps, setSupplier] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/inventoryManager/supplier').then(res => {
			console.log(res);
			setSupplier(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">supplier</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to="/InventoryManager/supplier/addsupplier" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add supplier</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>supplier id</th>
							<th> name</th>
							<th> address</th>
							<th> email</th>
							<th> age</th>
							<th> phonenumber</th>
						
							
							

							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{Supps.map((supplier) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={supplier._id}>
								<td>
									{supplier._id}
								</td >
								<td>
									{supplier.supplier_name}
								</td>
								<td>
									{supplier.supplier_address}
								</td>
								<td>
									{supplier.supplier_email}
								</td>
								<td>
									{supplier.supplier_age}
								</td>
								<td>
									{supplier.supplier_phonenumber}
								</td>
							
								<td>
									<Link to={`/InventoryManager/supplier/veiwsupplier/${supplier._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
									
									{/* const [supplier_id, setsupplierid] = useState()
const [supplier_name, setsuppliername] = useState()
const [supplier_address, setsupplieraddress] = useState()
const [supplier_email,setsupplieremail] = useState()
const [supplier_age,setsupplierage] = useState()
const [supplier_phonenumber,setsupplierphonenumber] = useState() */}

								</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
