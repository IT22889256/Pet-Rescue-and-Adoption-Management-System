import {
	HiOutlineViewGrid,
	HiOutlineQuestionMarkCircle
} from 'react-icons/hi'
import { MdOutlinePets } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import {IoPeople} from 'react-icons/io5';
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PiFolderNotchOpenFill } from "react-icons/pi";
import { BsFillSendArrowDownFill } from "react-icons/bs";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/EmployeeManager',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Leave Request',
		label: 'Leaves',
		path: '/EmployeeManager/LeaveManagement',
		icon: <IoPeople />
	},
	{
		key: 'Manage Employees',
		label: 'Manage Employees',
		path: '/EmployeeManager/ManageEmployees',
		icon: <FaTasks />
	},
	{
		key: 'Create Tasks',
		label: 'Create Tasks',
		path: '/EmployeeManager/ManageJanitorSchedule',
		icon: <AiFillSchedule />
	},

	{
		key: 'Salary Management',
		label: 'Salary Management',
		path: '/EmployeeManager/SalaryManagement',
		icon: <FaMoneyCheckAlt />
	},

	{
		key: 'Attendance Mark',
		label: 'Attendance Mark',
		path: '/EmployeeManager/AttendanceMark',
		icon: <MdCoPresent />
	},

	{
		key: 'delete Employees',
		label: 'delete Employees',
		path: '/EmployeeManager/DeleteEmployees',
		icon: <RiDeleteBin5Fill />
	},

	{
		key: 'Job Roles',
		label: 'Job Roles',
		path: '/EmployeeManager/JobRoles',
		icon: <PiFolderNotchOpenFill />
	},

	{
		key: 'Create Leave',
		label: 'Create Leave',
		path: '/EmployeeManager/CreateLeave',
		icon: <BsFillSendArrowDownFill />
	}

]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/EmployeeManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
