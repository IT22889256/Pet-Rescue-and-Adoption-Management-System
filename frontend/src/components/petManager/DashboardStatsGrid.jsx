
import React, { useEffect, useState } from 'react'
import {IoPeople} from 'react-icons/io5'
import { MdOutlinePets  } from "react-icons/md";
import { FaTasks,FaHome  } from "react-icons/fa";
import axios from 'axios'



export default function DashboardStatsGrid() {


	const [pets, setPets] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/petProfile').then(res => {
			console.log(res);
			setPets(res.data.count)
		})
	},[])


	return (
		<div>
			<div className="text-2xl p-1">Overview</div>
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					
					<div className="flex items-center">
						<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660975c4-4d23-46c2-8b1d-cc24564b7a4a&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaTasks className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					
					<div className="flex items-center">
						
						<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66097daf-aeba-4fba-8718-bf93760ed5c5&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<MdOutlinePets className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					
					<div className="flex items-center">
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66097f8a-dc56-4b3d-8544-1494930a9d58&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
						
					</div>
				</div>
			</BoxWrapper>
			{/* <BoxWrapper>

				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<FaHome className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Adopted</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">2</strong>
					</div>
				</div>
			</BoxWrapper> */}
      </div>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">
      {children}
    </div>
  );
}

