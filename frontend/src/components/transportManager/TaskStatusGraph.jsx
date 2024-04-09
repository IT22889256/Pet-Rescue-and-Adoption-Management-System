import React from 'react'
import { ResponsiveContainer} from 'recharts'


export default function TaskStatusGraph() {
	return (
		<div className="w-[57rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=661388b2-f4e7-48ef-8f85-00e15397ba7c&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
