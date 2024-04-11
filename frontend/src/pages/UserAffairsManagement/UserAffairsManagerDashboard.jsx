import React from 'react'
import DashboardStatsGrid from '../../components/UserAffairsManager/DashboardStatsGrid'
import IssuesAndConcernsChart from '../../components/UserAffairsManager/IssuesAndConcernsChart'
// import RecentFeedback from '../../components/UserAffairsManager/RecentFeedback'
import IssuesAndConcernsPieChart from '../../components/UserAffairsManager/IssuesAndConcernsPieChart'
import CreatedTasks from '../../components/petManager/CreateTasks'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<IssuesAndConcernsChart />
				<IssuesAndConcernsPieChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				{/* <RecentFeedback /> */}
				<CreatedTasks />
			</div>
		</div>
	)
}
