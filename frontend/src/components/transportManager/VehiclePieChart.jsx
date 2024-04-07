import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'


export default function RescueRequstsChart() {
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Vehicle Status</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660d476c-8f76-46bf-8a1d-4fc6576d315b&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
