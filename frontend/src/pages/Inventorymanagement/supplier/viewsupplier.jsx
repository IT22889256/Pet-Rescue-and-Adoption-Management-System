import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'
import Supplier from '../supplier'

export default function ViewPet() {
	
	const [supplier, setsupplier] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/Inventorymanagement/supplier/viewsupplier/${id}`)
		.then((res) => {
			setsupplier(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	
	// const [supplier_name, setsuppliername] = useState()
    // const [supplier_address, setsupplieraddress] = useState()
    // const [supplier_email, setsupplieremail] = useState()
    // const [supplier_age,setsupplierage] = useState()
    // const [supplier_phonenumber,setsupplierphonenumber] = useState()
    // const [supplier_image,setimage] = useState()

  
return (
	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
	<div className="bg-white shadow overflow-hidden sm:rounded-lg">
		<div className="px-4 py-5 sm:px-6">
			<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Supplier</h3>
		</div>
		<div className="mt-3 flex text-xs justify-center">
		<img className='object-cover h-60 w-60 m-5 rounded-full' src={supplier.supplier_image} alt='profile_Image'/>
		</div>
		<div className="border-t border-gray-200">
			<dl>
			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-medium">Supplier Name</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supplier.supplier_name}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Supplier address</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supplier.supplier_address}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Supplier email</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supplier.supplier_email}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Supplier age</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supplier.supplier_age}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Supplier phonenumber</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{supplier.supplier_phonenumber}</dd>
				</div>
				
				{/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Age</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.pet_age}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Appearance</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.pet_appearance}</dd>
				</div>
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Found Location</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.location}</dd>
				</div> */}
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
				<Link to={`/Inventorymanagement/supplier/editsupplier/${supplier._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1">Edit</Link>
						
				<Link to={`/Inventorymanagement/supplier/removesupplier/${supplier._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-lg text-gray-400  text-center ml-1">Remove</Link>
							
				</div>
				
			</dl>
		</div>
	</div>
</div>
	)
}

