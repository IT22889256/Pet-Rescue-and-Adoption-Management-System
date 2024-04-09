import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/driver',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Profile',
		label: 'Profile',
		path: '/driver/rescueRequest',
		icon: <IoPeople />
	},
	{
		key: 'Assigned Task',
		label: 'Assigned Task',
		path: '/driver/RescueTask',
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
