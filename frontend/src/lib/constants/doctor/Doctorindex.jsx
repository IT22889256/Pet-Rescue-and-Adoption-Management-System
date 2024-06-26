import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5'
import { FaUserDoctor } from "react-icons/fa6";
export const DASHBOARD_SIDEBAR_LINKS = [
	// {
	// 	key: 'dashboard',
	// 	label: 'Dashboard',
	// 	path: '/adoptionManager',
	// 	icon: <HiOutlineViewGrid />
	// },
	// {
	// 	key: 'Pet Profile',
	// 	label: 'Pet Profile',
	// 	path: '/adoptionManager/petProfile',
	// 	icon: <IoPeople />
	// },
	{
		key: 'My Task',
		label: 'My Task',
		path: '/doctor/ViewAppoinmentTask',
		icon: <FaUserDoctor />
	},
	{
		key: 'Pet HealthCare',
		label: 'Pet HealthCare',
		path: '/doctor',
		icon: <FaUserDoctor />
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
