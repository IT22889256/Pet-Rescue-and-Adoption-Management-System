import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/petManager',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Rescue Requests',
		label: 'Rescue Requests',
		path: '/petManager/rescueRequest',
		icon: <IoPeople />
	},
	{
		key: 'Rescue Tasks',
		label: 'Rescue Tasks',
		path: '/petManager/RescueTask',
		icon: <FaTasks />
	},
	{
		key: 'Pets',
		label: 'Pets',
		path: '/petManager/petProfile',
		icon: <MdOutlinePets />
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
