import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { RiGalleryLine } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";



export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/UserAffairsManager',
		icon: <HiOutlineViewGrid />
	},
	
	{
		key: 'Issues/Concerns',
		label: 'Issues/Concerns',
		path: '/UserAffairsManager/handleIssuesConcerns',
		icon: <MdErrorOutline />

	},
	{
		key: 'Feedback',
		label: 'Feedback',
		path: '/UserAffairsManager/handleFeedback',
		icon: <VscFeedback />
	},
	{
		key: 'Gallery',
		label: 'Gallery',
		path: '/UserAffairsManager/Gallery',
		icon: <RiGalleryLine />

	},

	// {
	// 	key: 'FCrud',
	// 	label: 'FCrud',
	// 	path: '/UserAffairsManager/Feedback',
	// 	icon: <RiGalleryLine />

	// },

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/UserAffairsManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
