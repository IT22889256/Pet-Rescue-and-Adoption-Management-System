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
		icon: <MdOutlinePets />
	},
	{
		key: 'supllier',
		label: 'supplier',
		path: "/InventoryManager/supplier" ,
		icon: <MdOutlinePets />
	},
	{
		key: 'Requests',
		label: 'Requests',
		path: "/InventoryManager/request" ,
		icon: <MdOutlinePets />
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
		icon: <MdOutlinePets />
	},

	{
		key: 'itemcount',
		label: 'itemcount',
		path: "/InventoryManager/itemcount" ,
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
