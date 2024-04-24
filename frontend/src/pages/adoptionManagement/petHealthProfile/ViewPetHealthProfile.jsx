import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ViewPetHealthProfile() {
	
	const [Pet, setPet] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/petManager/petProfile/viewPet/${id}`)
		.then((res) => {
			setPet(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
	<div className="bg-white shadow overflow-hidden sm:rounded-lg">
		<div className="px-4 py-5 sm:px-6">
			<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Pet Profile</h3>
		</div>
		<div className="mt-3 flex text-xs justify-center">
		<img className='object-cover h-60 w-60 m-5 rounded-full' src={Pet.imgUrl} alt='profile_Image'/>
		</div>
		<div className="border-t border-gray-200">
			<dl>
			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-medium">Pet ID</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet._id}</dd>
				</div>
				
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Name</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.pet_name}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Type</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.pet_type}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Health Status</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.health_status}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Gender</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.pet_gender}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Age</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.pet_age}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Pet Appearance</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.pet_appearance}</dd>
				</div>
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg font-medium text-black-500">Found Location</dt>
					<dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{Pet.location}</dd>
				</div>
				{/* <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 justify-center">
				<Link to={`/petManager/petProfile/EditPet/${Pet._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-lg text-gray-400 text-center ml-1">Edit</Link>
						
				<Link to={`/petManager/petProfile/RemovePet/${Pet._id}`} className="bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-lg text-gray-400  text-center ml-1">Remove</Link>
							
				</div>
				 */}
			</dl>
		</div>
	</div>
</div>
	)
}

