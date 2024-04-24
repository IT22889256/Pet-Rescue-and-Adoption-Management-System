import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewPet() {
	
	const [items, setitem] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/inventoryManager/items/viewitem/${id}`)
		.then((res) => {
			setitem(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
	
    // item_name:{
	// 	type:String,
	// 	// required:true,
  
	//   },
  
	//   item_category: {
	// 	type: String,
	// 	// required: true,
	   
	// },
  
	
	// item_quantity: {
	// 	type: String,
		
	//   },
  
	//   item_price:{
	// 	type:String,
	//   },
	
	// //   item_image:{
	// //     type: String
		
	// item_EXPdate:{
	// 	type:String,
	//   },
	
	//   item_MFOdate:{
	// 	type:String
	//   }
	
  
return (
	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
	<div className="bg-white shadow overflow-hidden sm:rounded-lg">
		<div className="px-4 py-5 sm:px-6">
			<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Items</h3>
		</div>
		<div className="mt-3 flex text-xs justify-center">
		<img className='object-cover h-60 w-60 m-5 rounded-full' src={items.item_image} alt='profile_Image'/>
		</div>
		<div className="border-t border-gray-200">
			<dl>
			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-medium">Item ID</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items._id}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Item Name</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.item_name}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Item Category</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.item_category}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Item Quantity</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.item_quantity}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Item price</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.item_price}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500"> MFO Date</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.item_mfodate}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">EXP date</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{items.item_expdate}</dd>
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
				<Link to={`/InventoryManager/Items/edititem/${items._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1">Edit</Link>
						
				<Link to={`/InventoryManager/Items/removeitem/${items._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-lg text-gray-400  text-center ml-1">Remove</Link>
							
				</div>
				
			</dl>
		</div>
	</div>
</div>
	)
}

