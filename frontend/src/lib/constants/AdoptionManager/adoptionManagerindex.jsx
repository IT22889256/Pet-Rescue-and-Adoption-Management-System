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
		path: '/adoptionManager',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Pet Profile',
		label: 'Pet Profile',
		path: '/adoptionManager/petProfile',
		icon: <IoPeople />
	},/*
	{
		key: 'AdoptionRequest',
		label: 'Rescue Tasks',
		path: '/adoptionManager/rescueTask',
		icon: <FaTasks />
	},*/
	{
		key: 'Adoption',
		label: 'Adoption',
		path: '/adoptionManager/Adoption',
		icon: <MdOutlinePets />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/adoptionManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
