import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
// import { format } from 'date-fns'
import { Link } from 'react-router-dom'
// import { getTaskStatus } from '../../lib/helpers/petManager/rescueTaskStatus'
// import PopUp from './PopUp'
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

function CreatedTasks() {
	const [rescueTasks, setTasks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/rescueTask').then(res => {
			console.log(res);
			setTasks(res.data)
		})
	},[])
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Pending Tasks</strong>
			<div className="mt-4 flex flex-col gap-3">
				{rescueTasks.map((rescueTask) => (
					rescueTask.rescue_task_status === 'Pending' &&(
					<Link
						key={rescueTask._id}
						to={`/petManager/rescueTask/viewRescueTask/${rescueTask._id}`}
						className="flex items-start hover:no-underline border-b-2 border-[[#c1c3c558]]"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={rescueTask.product_thumbnail}
								alt={rescueTask.request_id}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{rescueTask._id}</p>
							<span
								className={classNames(
									'text-xs font-medium'
								)}
							>
								{rescueTask.rescue_task_status=== "Pending" && (
									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center p-1">
										<div>{rescueTask.rescue_task_status}</div>
									</td>)}
							</span>
						</div>
					</Link>
				)))}
			</div>
		</div>
	)
}

export default CreatedTasks
