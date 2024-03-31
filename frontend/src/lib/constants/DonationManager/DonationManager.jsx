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
		path: '/DonationManager',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Fund Requests',
		label: 'Fund Requests',
		path: '/DonationManager/fundrequests',
		icon: <IoPeople />
	},
	// {
	// 	key: 'Rescue Tasks',
	// 	label: 'Rescue Tasks',
	// 	path: '/DonationManager/rescueTask',
	// 	icon: <FaTasks />
	// },
	{
		key: 'Sponsorship Pets',
		label: 'Sponsorship Pets',
		path: '/DonationManager/SponsorshipPets',
		icon: <MdOutlinePets />
	},

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/DonationManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
