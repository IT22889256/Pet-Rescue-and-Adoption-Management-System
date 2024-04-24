import React, { useEffect, useState }from 'react'
import { ResponsiveContainer} from 'recharts'


const url = "https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66260bb7-e569-4158-8523-3df617310735&maxDataAge=3600&theme=light&autoRefresh=true"

export default function AdoptionRequestPieChart() {
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">

			<strong className="text-gray-700 font-medium">Adoption Request Status</strong>

			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<iframe src={url} />
				</ResponsiveContainer>
			</div>
		</div>
	)
}
