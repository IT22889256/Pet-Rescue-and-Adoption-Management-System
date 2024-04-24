import React from 'react'
import { ResponsiveContainer } from 'recharts'

export default function SupplyRequestChart() {
	const url ="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=6626008f-55fd-4ebd-86d5-a3ccadb40b9f&maxDataAge=60&theme=light&autoRefresh=true"
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Supply Requests</strong>
			<div className="mt-3 w-full flex-1 flex text-xs">
				<ResponsiveContainer>
					
					<iframe src={url}></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}