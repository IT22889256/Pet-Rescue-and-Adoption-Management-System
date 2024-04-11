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
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf353-d4f5-435a-8e0e-92a7182a786a&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaTasks className="text-2xl text-white" />
				</div>
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf5c0-7403-44d7-8620-ac7f3a1028c6&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<MdOutlinePets className="text-2xl text-white" />
				</div>
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf6d9-015c-4c18-8fc7-205d5ff09d3c&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>
			
		</div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
