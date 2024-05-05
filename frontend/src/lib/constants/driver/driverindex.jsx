import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { FaTasks } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
export const DASHBOARD_SIDEBAR_LINKS = [
	
	{
		key: 'Assigned Task',
		label: 'Assigned Task',
		path: '/driver/AssignedSheduleProfile',
		icon: <FaTasks />
	},
	{
		key: 'Map',
		label: 'Map',
		path: '/map',
		icon: <FiMapPin />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/petManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
