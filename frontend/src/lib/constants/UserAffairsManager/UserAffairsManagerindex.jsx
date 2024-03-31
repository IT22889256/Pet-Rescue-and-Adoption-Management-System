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
		path: '/UserAffairsManager',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Issues & Concerns',
		label: 'Issues & Concerns',
		path: '/UserAffairsManager/issuesandconcerns',
		icon: <IoPeople />
	},
	{
		key: 'Rescue Tasks',
		label: 'Rescue Tasks',
		path: '/UserAffairsManager/rescueTask',
		icon: <FaTasks />
	},
	{
		key: 'Feedback',
		label: 'Feedback',
		path: '/UserAffairsManager/Feedback',
		icon: <MdOutlinePets />
	},
	{
		key: 'Gallery',
		label: 'Gallery',
		path: '/UserAffairsManager/Gallery',
		icon: <MdOutlinePets />
	},


]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/UserAffairsManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
