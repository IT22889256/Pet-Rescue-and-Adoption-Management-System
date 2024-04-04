import React from 'react'
import DashboardStatsGrid from '../../components/InventoryManager/DashboardStatsGrid'
import RescueChart from '../../components/InventoryManager/RescueRequestChart'
import RecentRequests from '../../components/InventoryManager/RecentRequest'
import RescueRequstsChart from '../../components/InventoryManager/RescueRequestPieChart'
import CreatedTasks from '../../components/InventoryManager/CreateTasks'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<RescueChart />
				<RescueRequstsChart />
			</div>
			{/* <div className="flex flex-row gap-4 w-full">
				<RecentRequests />
				<CreatedTasks />
			</div> */}
		</div>
	)
}
