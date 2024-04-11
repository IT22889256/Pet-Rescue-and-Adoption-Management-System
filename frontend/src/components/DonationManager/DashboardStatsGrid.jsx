import React from 'react'
import {IoPeople} from 'react-icons/io5'
import { MdOutlinePets  } from "react-icons/md";
import { FaTasks,FaHome  } from "react-icons/fa";
export default function DashboardStatsGrid() {
	return (
		<div>
			<div className="text-2xl p-1">Overview</div>
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPeople className="text-2xl text-white" />
					
			
			</div>
			<iframe  src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf599-cd05-4408-8365-959223b483ef&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>

			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaTasks className="text-2xl text-white" />
				</div>
			
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf96e-cd05-4880-8df2-9592230d5617&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>

			
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<MdOutlinePets className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Pets</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">13</strong>
						{/* <span className="text-sm text-red-500 pl-2">Adopted - 40</span> */}
					</div>
				</div>
			</BoxWrapper>
			
		</div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
