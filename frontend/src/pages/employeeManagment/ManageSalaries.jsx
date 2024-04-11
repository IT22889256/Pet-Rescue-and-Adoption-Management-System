import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
// import { getPetHealth } from '../../lib/helpers/petManager/petHealthStatus'
import axios from 'axios'

export default function ManageSalaries() {
	const [salaries, setSalaries] = useState([]);
    const navigate = useNavigate();

	useEffect(() => {
		axios.get('http://localhost:3000/EmployeeManager/salary').then(res => {
			console.log(res);
			setSalaries(res.data)
		})
	},[])

	const RequestRefund = () => {
        const confirmSend = window.confirm('Are you sure you want to request refund?');
        if (confirmSend) {
            axios.post(`http://localhost:3000/EmployeeManager/salary/reqFund/`)
                .then(() => {
                    alert('Refund Request sent!');
                    navigate('/EmployeeManager/SalaryManagement');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

	return (
		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Manage Salaries</strong>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"> <button onClick={RequestRefund} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Request Funds</button></div>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="bg-[#f3f3f3] w-full text-gray-700 h-48">
					<thead className="bg-[#c1c3c558]" >
						<tr>
							<th>EMP ID</th>
							<th>First Name</th>
							<th>Job Role</th>
							<th>Total Salary</th>
							<th>Action</th>
						</tr>
					</thead>
					{<tbody>
						{salaries.map((salary) => (
							<tr className='border-b-2 border-[#c1c3c558] text-center' key={salary._id}>
								<td>
									{salary.eid}
								</td >
								<td>
									{salary.firstName}
								</td>
								<td>
									{salary.jobRole}
								</td>
								<td>
									{salary.totalSalary}
								</td>
								<td>
									<Link to={`/employeeManager/salary/${salary._id}`} className=" bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400  text-center text-justify ml-1 ">View</Link>
								</td>
							</tr>
						))}
					</tbody> }

				</table>
			</div>
		</div>
	)
}
// {pets.map((pets)=>(
// 	<>
// 		<tr key={pets.id}>
// 			<td>{pets.request_id}</td>
// 			<td>{pets.task_id}</td>
// 			<td>{pets.pet_name}</td>
// 			<td>{pets.pet_type}</td>
// 			<td>{pets.health_status}</td>
// 		</tr>
// 	</>

// ))}