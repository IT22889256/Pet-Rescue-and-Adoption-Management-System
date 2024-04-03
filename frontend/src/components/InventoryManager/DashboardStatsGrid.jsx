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
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660bede6-9934-4ad7-8b33-73fda0e5b769&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaTasks className="text-2xl text-white" />
				</div>
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660beffe-8f76-4348-8ce8-4fc657966acd&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			</BoxWrapper>
			<BoxWrapper>
			<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660bf178-972f-4ccb-882b-482e7f85356c&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
				
			</BoxWrapper>
			
		</div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
