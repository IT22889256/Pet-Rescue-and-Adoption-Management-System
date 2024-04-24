import React from 'react'
import DashboardStatsGrid from '../../components/adoptionManager/DashboardStatsGrid'
import SupplyRequestChart from '../../components/adoptionManager/SupplyRequestChart'
//import RecentRequests from '../../components/adoptionManager/RecentRequest'
//import RescueRequstsChart from '../../components/adoptionManager/AdoptionRequestChart'
//import CreatedTasks from '../../components/adoptionManager/CreateTasks'
import AdoptionRequestPieChart from '../../components/adoptionManager/AdoptionRequestPieChart' 

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<SupplyRequestChart /> 

				<AdoptionRequestPieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/* <AdoptionRequestPieChart /> */}
			</div>
		</div>
	)
}
