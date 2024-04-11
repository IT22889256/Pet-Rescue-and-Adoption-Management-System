import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header'
import AdoptionSidebar from './AdoptionSidebar'

export default function AdoptionLayout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
			<AdoptionSidebar />
			<div className="flex flex-col flex-1">
				<Header />
				<div className="flex-1 p-4 min-h-0 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}