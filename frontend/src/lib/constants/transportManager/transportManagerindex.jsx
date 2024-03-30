import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
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
		label: 'Requested Task',
		path: '/transportManager/rescueRequest',
		icon: <IoPeople />
	},
	{
		key: 'Rescue Tasks',
		label: 'Transportation Schedule',
		path: '/transportManager/rescueTask',
		icon: <FaTasks />
	},
	{
		key: 'Pets',
		label: 'Vehicles',
		path: '/transportManager/scheduleProfile',
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
