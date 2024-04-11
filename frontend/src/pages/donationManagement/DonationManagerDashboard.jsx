import React from 'react'
import DashboardStatsGrid from '../../components/DonationManager/DashboardStatsGrid'
 import RescueChart from '../../components/DonationManager/RescueRequestChart'
import RecentRequests from '../../components/DonationManager/RecentRequest'
import RescueRequstsChart from '../../components/DonationManager/RescueRequestPieChart'
import CreatedTasks from '../../components/DonationManager/CreateTasks'

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
