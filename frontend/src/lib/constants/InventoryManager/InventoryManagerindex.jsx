import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { SiTemporal } from "react-icons/si";
import { PiCarProfileBold } from "react-icons/pi";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5'
export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/InventoryManager',
		icon: <HiOutlineViewGrid />
	},
	// {
	// 	key: 'Rescue Requests',
	// 	label: 'Rescue Requests',
	// 	path: '/InventoryManager/rescueRequest',
	// 	icon: <IoPeople />
	// },
	// {
	// 	key: 'Rescue Tasks',
	// 	label: 'Rescue Tasks',
	// 	path: '/InventoryManager/rescueTask',
	// 	icon: <FaTasks />
	// },
	{
		key: 'Items',
		label: 'Items',
		path: "/InventoryManager/Items" ,
		icon: <SiTemporal />
	},
	{
		key: 'supllier',
		label: 'supplier',
		path: "/InventoryManager/supplier" ,
		icon: <PiCarProfileBold /> 
	},
	{
		key: 'Requests',
		label: 'Requests',
		path: "/InventoryManager/request" ,
		icon: <FaCodePullRequest /> 
	},

	{
		key: 'order',
		label: 'order',
		path: "/InventoryManager/order" ,
		icon: <MdOutlinePets />
	},

	{
		key: 'messages',
		label: 'messages',
		path: "/InventoryManager/messages" ,
		icon: <FaMessage />
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
