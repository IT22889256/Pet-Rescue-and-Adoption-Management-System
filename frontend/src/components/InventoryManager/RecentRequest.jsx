import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getRequestStatus } from '../../lib/helpers/petManager/rescueRequestStatus'


export default function RecentRequests() {
	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Items</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3 p-2 ">
				
			</div>
		</div>
	)
}
