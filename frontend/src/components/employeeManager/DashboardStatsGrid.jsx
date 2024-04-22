
import React, { useEffect, useState } from 'react'
import {IoPeople} from 'react-icons/io5'
import { MdOutlinePets  } from "react-icons/md";
import { FaTasks,FaHome  } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
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
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66265ae1-e069-4f5f-8cb0-69c4c5c005ef&maxDataAge=60&theme=light&autoRefresh=true"></iframe></div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaTasks className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					
					<div className="flex items-center">
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=662643ec-e569-4d89-8bd9-3df617244e2b&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
					</div>
					</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<RiMoneyDollarCircleFill  className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					
					<div className="flex items-center">
					<iframe  src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66264c14-8ace-40e5-8215-15b17c590032&maxDataAge=60&theme=light&autoRefresh=true"></iframe>	
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

