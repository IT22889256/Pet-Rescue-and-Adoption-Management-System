import React from 'react'
import DashboardStatsGrid from '../../components/UserAffairsManager/DashboardStatsGrid'
import FeedbackChart from '../../components/UserAffairsManager/FeedbackChart'
import IssuesAndConcernsPieChart from '../../components/UserAffairsManager/IssuesAndConcernsPieChart'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			<div className="flex flex-row gap-4 w-full">
				<FeedbackChart />
				<IssuesAndConcernsPieChart />
			</div>
		</div>
	)
}
