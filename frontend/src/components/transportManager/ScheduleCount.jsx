import React from 'react'
import {ResponsiveContainer } from 'recharts'


export default function ScheduleCount() {
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Schedule Count</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
				<iframe  src="https://charts.mongodb.com/charts-test-tjqsf/embed/dashboards?id=bd8574f1-a216-4b40-859b-553ce6fc3bc0&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=true&scalingWidth=fixed&scalingHeight=fixed"></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
