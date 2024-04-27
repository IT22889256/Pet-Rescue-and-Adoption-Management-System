import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";


export default function DashboardStatsGrid() {
	return (
		<div>
			<div className="text-2xl p-1">Overview</div>
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<MdErrorOutline className="text-2xl text-white" />
				</div>
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660a8243-8342-4ebd-8e12-d8f85624d6ef&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<RiGalleryLine className="text-2xl text-white" />
				</div>
				
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660be53f-7403-41bf-863b-ac7f3a7b17b6&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
			
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<VscFeedback className="text-2xl text-white" />
				</div>
				
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660be873-8ef8-4195-826c-4af945b4a227&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				
			</BoxWrapper>
		</div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
