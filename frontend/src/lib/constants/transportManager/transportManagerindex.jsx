import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
//import { MdOutlinePets } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5'
import { MdEmojiTransportation } from 'react-icons/md'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/transportManager',
		icon: <HiOutlineViewGrid />
	},

	{
		key: 'Rescue Requests',
		label: 'Requests',
		path: '/transportManager/rescueRequest',
		icon: <IoPeople />
	},
	{
		key: 'Rescue Tasks',
		label: 'Requested Task',
		path: '/transportManager/rescueTask',
		icon: <FaTasks />
	},

	{
		key: 'vehicles',
		label: 'Vehicles',
		path: '/transportManager/vehicleProfile',
		icon: <MdEmojiTransportation />
	},

	{
		key: 'Task Test',
		label: 'Task Test',
		path: '/transportManager/rescueTask',
		icon: <FaTasks />
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
