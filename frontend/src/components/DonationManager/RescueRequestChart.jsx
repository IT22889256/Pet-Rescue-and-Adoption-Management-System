import React from 'react'
import { ResponsiveContainer } from 'recharts'

export default function RescueChart() {
	const url ="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=661e6eb6-272d-4e4d-81a8-ac2a10c8c00a&maxDataAge=60&theme=light&autoRefresh=true"
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Fund Requests</strong>
			<div className="mt-3 w-full flex-1 flex text-xs">
				<ResponsiveContainer>
					
					<iframe src={url}></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}