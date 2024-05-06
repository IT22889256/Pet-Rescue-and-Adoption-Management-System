import React from 'react'
import DashboardStatsGrid from '../../components/transportManager/DashboardStatsGrid'
// import RescueChart from '../../components/petManager/RescueRequestChart'
import RecentRequests from '../../components/transportManager/RecentRequest'
import VehiclePieChart from '../../components/transportManager/VehiclePieChart'
import TaskStatusGraph from '../../components/transportManager/TaskStatusGraph'



export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			
			
			<div className="flex flex-row gap-4 w-full">
				{/* <RescueChart /> */}
				<VehiclePieChart />
				<TaskStatusGraph />
				
				
			</div>
			
			
		</div>
		
	)
}
