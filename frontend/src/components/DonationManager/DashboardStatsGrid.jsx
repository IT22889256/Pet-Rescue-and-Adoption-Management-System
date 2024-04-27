import React from 'react'
import { TbPigMoney } from "react-icons/tb";
import { PiDogFill } from "react-icons/pi";
import { GiReceiveMoney } from "react-icons/gi";

import { FaTasks,FaHome  } from "react-icons/fa";
export default function DashboardStatsGrid() {
	return (
		<div>
			<div className="text-2xl p-1">Overview</div>
			<div className="flex gap-4">
				<BoxWrapper>
					<div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-500">
						<PiDogFill className="text-2xl text-white" />
					</div>
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf599-cd05-4408-8365-959223b483ef&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				</BoxWrapper>

				<BoxWrapper>
					<div className="rounded-full h-12 w-12 flex items-center justify-center bg-indigo-500">
						<GiReceiveMoney  className="text-2xl text-white" />
					</div>
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660cf96e-cd05-4880-8df2-9592230d5617&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				</BoxWrapper>

				<BoxWrapper>
					<div className="rounded-full h-12 w-12 flex items-center justify-center bg-teal-500">
						<TbPigMoney className="text-2xl text-white" />
					</div>
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66194ccb-92d7-4176-89bf-a29140a05ea4&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
				</BoxWrapper>
			</div>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
