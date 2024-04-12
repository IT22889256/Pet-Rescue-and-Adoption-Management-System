import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ViewGallery() {
	
	const [gallery, setGallery] = useState({})
	const {id} = useParams()

	useEffect(() => {
		axios.get(`http://localhost:3000/userAffairsManager/gallery/getImage/${id}`)
		.then((res) => {
			setGallery(res.data)
			
		}).catch((err) => {
			console.log(err);
		})
	},[])
return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Gallery</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>Image ID</th>
							<th>Pet Name</th>
							<th>Image</th>
						</tr>
					</thead>
						<tbody>
						<tr className='border-b-2 border-[#c1c3c558] text-center'>
								<td>
									{gallery._id}
								</td >
								<td>
									{gallery.pet_name}
								</td >
								<td>
									{gallery.pet_image}
								</td >
							</tr>
						
					</tbody>
					
				</table>
			</div>
		</div>
	)
}

