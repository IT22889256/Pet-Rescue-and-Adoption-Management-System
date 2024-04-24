import React, { useEffect, useState }from 'react'

import { ResponsiveContainer} from 'recharts'



const url = "https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66085a4b-dc56-49ca-819c-149493e57946&maxDataAge=3600&theme=light&autoRefresh=true"

export default function RescueRequestPieChart() {
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">

			<strong className="text-gray-700 font-medium">Rescue Tasks Status</strong>

			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<iframe src={url} />
				</ResponsiveContainer>
			</div>
		</div>
	)
}
