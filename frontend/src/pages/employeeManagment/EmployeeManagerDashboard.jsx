import React from 'react'
import DashboardStatsGrid from '../../components/employeeManager/DashboardStatsGrid'
import RescueChart from '../../components/employeeManager/RescueRequestChart'
import RecentRequests from '../../components/employeeManager/RescueRequestPieChart'
import RescueRequstsChart from '../../components/employeeManager/RescueRequestPieChart'
import CreatedTasks from '../../components/employeeManager/CreateTasks'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<RescueChart />
				<RescueRequstsChart />
			</div>
			
		</div>
	)
}
