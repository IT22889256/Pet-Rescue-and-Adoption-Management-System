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
	key: 'Adoption Process',
	label: 'Adoption Process',
	path: '/adoptionManager/adoptionProcess',
	icon: <MdOutlinePets />
	},
	// {
	// 	key: 'Adoption',
	// 	label: 'Adoption',
	// 	path: '/adoptionManager/Adoption',
	// 	icon: <MdOutlinePets />
	// },
	{
		key: 'Pet Supply',
		label: 'Pet Supply',
		path: '/adoptionManager/PetSupply',
		icon: <FaTasks />
	},
	{
		key: 'Pet Health Profile',
		label: 'Pet Health Profile',
		path: '/adoptionManager/petHealthProfile',
		icon: <IoPeople />
	},
	{
		key: 'Appoinment Schedule',
		label: 'Appoinment Schedule',
		path: '/adoptionManager/AppoinmentSchedule',
		icon: <FaTasks />
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
