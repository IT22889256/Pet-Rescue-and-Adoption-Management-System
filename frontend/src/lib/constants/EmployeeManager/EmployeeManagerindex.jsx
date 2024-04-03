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
		path: '/EmployeeManager',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Leave Request',
		label: 'Leave Requests',
		path: '/EmployeeManager/LeaveRequest',
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
		path: '/EmployeeManager/CreateTasks',
		icon: <MdOutlinePets />
	},

	{
		key: 'Salary Management',
		label: 'Salary Management',
		path: '/EmployeeManager/SalaryManagement',
		icon: <MdOutlinePets />
	},

	{
		key: 'Attendance Mark',
		label: 'Attendance Mark',
		path: '/EmployeeManager/AttendanceMark',
		icon: <MdOutlinePets />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'support',
		label: 'Help & Support',
		path: '/EmployeeManager/heplAndSupport',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
