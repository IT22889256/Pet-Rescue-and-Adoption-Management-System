import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { FaTasks } from "react-icons/fa";
import { MdEmojiTransportation } from 'react-icons/md'
import { GrSchedulePlay } from "react-icons/gr";



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/transportManager',
		icon: <HiOutlineViewGrid />
	},

	{
		key: 'Task',
		label: 'Requested Task',
		path: '/transportManager/taskRequest',
		icon: <FaTasks />
	},

	{
		key: 'Task',
		label: 'Transportation Schedule',
		path: '/transportManager/scheduleProfile',
		icon: <GrSchedulePlay />
	},

	{
		key: 'vehicles',
		label: 'Vehicles',
		path: '/transportManager/vehicleProfile',
		icon: <MdEmojiTransportation />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/petManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
