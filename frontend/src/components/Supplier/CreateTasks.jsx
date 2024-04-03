import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const Tasks = [
	{
		id: '3432',
		request_id: '134',
		suppliers_thumbnail: 'https://source.unsplash.com/100x100?macbook',
		Progress_Status: "Complted"
	},
	{
		id: '3432',
		request_id: '123',
		suppliers: 'https://source.unsplash.com/100x100?macbook',
		Progress_Status: "Progress"
	},
	{
		id: '3432',
		request_id: '124',
		suppliers: 'https://source.unsplash.com/100x100?macbook',
		Progress_Status: "Rejected"
	},
	
]

function CreatedTasks() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Created Tasks</strong>
			<div className="mt-4 flex flex-col gap-3">
				{Tasks.map((task) => (
					<Link
						key={requests.id}
						to={`/suppliers/${requests.id}`}
						className="flex items-start hover:no-underline border-b-2 border-[[#c1c3c558]]"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={requests.suppliers_thumbnail}
								alt={requests.request_id}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{task.request_id}</p>
							<span
								className={classNames(
									requests.Progress_Status === "Rejected"
										? 'text-red-500'
										: task.Progress_Status === "Progress"
										? 'text-yellow-500'
										: 'text-green-500',
									'text-xs font-medium'
								)}
							>
								{requests.Progress_Status === 0 ? 'Out of Stock' : requests.Progress_Status}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5 py-3"><Link to='/suppliers/requests/viewrequests'class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View</Link></div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Createdrequests
