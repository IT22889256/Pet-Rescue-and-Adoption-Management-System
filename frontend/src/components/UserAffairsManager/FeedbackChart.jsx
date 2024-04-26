import React from 'react'
import { ResponsiveContainer } from 'recharts'

export default function FeedbackChart() {
	const url ="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66264f6a-e069-4ab5-8894-69c4c599fdb3&maxDataAge=60&theme=light&autoRefresh=true"
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Feedback Status Count</strong>
			<div className="mt-3 w-full flex-1 flex text-xs">
				<ResponsiveContainer>
					
					<iframe src={url}></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}