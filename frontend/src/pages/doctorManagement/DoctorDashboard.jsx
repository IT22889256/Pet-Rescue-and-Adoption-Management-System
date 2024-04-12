import React from 'react'
import DashboardStatsGrid from '../../components/adoptionManager/DashboardStatsGrid'
import RescueChart from '../../components/adoptionManager/RescueRequestPieChart'
import RecentRequests from '../../components/petManager/RecentRequest'
import RescueRequstsChart from '../../components/adoptionManager/RescueRequestPieChart'
import CreatedTasks from '../../components/petManager/CreateTasks'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<RescueChart />
				<RescueRequstsChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentRequests />
				<CreatedTasks />
			</div>
		</div>
	)
}
