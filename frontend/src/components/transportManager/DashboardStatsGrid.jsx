import React from 'react'
import {IoPeople} from 'react-icons/io5'
import { MdOutlinePets  } from "react-icons/md";
import { FaTasks,FaHome  } from "react-icons/fa";
import { PiVanFill } from "react-icons/pi";
export default function DashboardStatsGrid() {

	return (
		<div>
			<div className="text-2xl p-1">Overview</div>
		<div className="flex gap-4">
		<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					
					<div className="flex items-center">
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=6612b447-afc8-4109-8929-4cee94b8a065&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-orange-600">
					<FaTasks className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<div className='flex items-center'>
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=6612cf0f-529b-4c85-8c3f-4901f5f733ef&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
						</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<PiVanFill className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<div className='flex items-center'>
					<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=6612d0fc-bbf4-4bf1-8143-ad0e99642daf&maxDataAge=60&theme=light&autoRefresh=true"></iframe>
						</div>
				</div>
			</BoxWrapper>
			
		</div>
		</div>
		
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
