import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Feb',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Mar',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Apr',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'May',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Jun',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'July',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Aug',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Sep',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Oct',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Nov',
		In_Stock: 4,
		Out_of_stock: 10
	},
	{
		name: 'Dec',
		In_Stock: 4,
		Out_of_stock: 10
	}
]

export default function RescueChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Inventroy Status</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
				<iframe src="https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=660bfc65-2f26-4613-8fa4-d9960d6c44ed&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
