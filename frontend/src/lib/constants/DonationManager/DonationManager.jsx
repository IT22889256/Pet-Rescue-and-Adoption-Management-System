import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5'
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaShieldDog } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
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
		icon: <FaMoneyCheckAlt />
	},
	{
		key: ' Reccuring Donations',
		label: '  Reccuring Donations',
		path: '/DonationManager/reccuringdonations',
		icon: <FcMoneyTransfer />
	},

	{
		key:'Specific Needs Donations',
		label:'Specific Needs Donations',
	  path:'/DonationManager/SpecificNeedsDonations',
		icon:<FcMoneyTransfer />
		},
		{
			key:'Sponsor a Pet Donations',
			label:'Sponsor a Pet Donations',
			path:'/DonationManager/sponsordonations',
			icon:<FcMoneyTransfer />
			},


	{
		key: 'Sponsorship Pets',
		label: 'Sponsorship Pets',
		path: '/DonationManager/SponsorshipPets',
		icon: <FaShieldDog />
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
