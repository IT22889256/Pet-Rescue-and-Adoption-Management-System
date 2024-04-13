import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function Gallery() {
	const [images, setimages] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/userAffairsManager/gallery').then(res => {
			console.log(res);
			setimages(res.data)
		})
	},[])

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Gallery Details</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/UserAffairsManager/Gallery/CreateGallery' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add Image</Link></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
						    {/* <th>User ID</th> */}
							<th>Image ID</th>
							<th>Image</th>
							<th>Pet Name</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{images.map((image) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={image._id}>
								<td>
									{image._id}
								</td >
								<td>
									{image.pet_image}
								</td>
								 <td>
									{image.pet_name}
								</td>
								{/* <td>
									{pet.pet_age}
								</td>
								<td>
									{pet.pet_appearance}
								</td>
								<td>{pet.health_status}</td>  */}
								<td>
									<Link to={`/UserAffairsManager/Gallery/ViewGallery/${image._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								
									<Link to={`/UserAffairsManager/Gallery/EditGallery/${image._id}`} className=" bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
								
									<Link to={`/UserAffairsManager/Gallery/RemoveGallery/${image._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
								</td>
							</tr>
						))}
					</tbody> }
					
				</table>
			</div>
		</div>
	)
}
// {pets.map((pets)=>(
// 	<>
// 		<tr key={pets.id}>
// 			<td>{pets.request_id}</td>
// 			<td>{pets.task_id}</td>
// 			<td>{pets.pet_name}</td>
// 			<td>{pets.pet_type}</td>
// 			<td>{pets.health_status}</td>
// 		</tr>
// 	</>

// ))}