import React, { useEffect, useState }from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
// import ChartsEmbedSDK, { Chart } from "@mongodb-js/charts-embed-dom";
import axios from 'axios'

// const data = [
// 	{ name: 'Completed', value: 540 },
// 	{ name: 'Progressing ', value: 620 },
// 	{ name: 'Rejected', value: 210 }
// ]

const url = "https://charts.mongodb.com/charts-test-tjqsf/embed/charts?id=66085a4b-dc56-49ca-819c-149493e57946&maxDataAge=3600&theme=light&autoRefresh=true"


// const sdk = new ChartsEmbedSDK({
// 	baseUrl: "https://charts.mongodb.com/charts-test-tjqsf",
//   });

//   const chart = sdk.createChart( {
// 	chartId: "66085a4b-dc56-49ca-819c-149493e57946", // REPLACE with the Chart ID
// 	height: "700px",
// 	// Additional options go here
// 	})

// const RADIAN = Math.PI / 180
// const COLORS = ['#00C49F', '#FFBB28', '#FF8042']

// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
// 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
// 	const x = cx + radius * Math.cos(-midAngle * RADIAN)
// 	const y = cy + radius * Math.sin(-midAngle * RADIAN)

// 	return (
// 		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
// 			{`${(percent * 100).toFixed(0)}%`}
// 		</text>
// 	)
// }

export default function RescueRequstsChart() {

	const [rescueTasks, setTasks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/petManager/rescueTask').then(res => {
			console.log(res);
			setTasks(res.data)
		})
	},[])
	return (
		<div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
			<strong className="text-gray-700 font-medium">Transportation Schedule Status</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					{/* <PieChart width={400} height={300}>
						<Pie
							data={rescueTasks}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							// dataKey="value"
							dataKey={rescueTasks.rescue_task_status}
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>  */}
					{/* {/* {chart.map(cha => <div>{cha.chart}</div>)} */}
					<div>
						<iframe src={url} />
					</div>
				</ResponsiveContainer>
				
			</div>
		</div>
	)
}
