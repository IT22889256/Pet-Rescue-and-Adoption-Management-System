import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useReactToPrint} from 'react-to-print'
import axios from 'axios'


export default function ViewSalary() {

	const [salary, setSalaries] = useState({})
	const {id} = useParams()
    const navigate = useNavigate();


	useEffect(() => {
		axios.get(`http://localhost:3000/EmployeeManager/salary/${id}`)
		.then((res) => {
			console.log(res.data)
			setSalaries(res.data)

		}).catch((err) => {
			console.log(err);
		})
	},[id]);

	const handleDelete = () => {
        const confirmDelete = window.confirm('Are you sure you want to delete this salary?');
        if (confirmDelete) {
            axios.delete(`http://localhost:3000/EmployeeManager/salary/${id}`)
                .then(() => {
                    alert('Salary deleted');
                    navigate('/EmployeeManager/SalaryManagement');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

	const ComponetRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => ComponetRef.current,
		DocumentTItle:"individual employee Report",
		onafterprint: ()=>("individual Employee Report Successfully Download")
	})


return (<>
	<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Generate Report</button></div> 
	<div  ref={ComponetRef} className="border-x border-gray-200 rounded-sm mt-3">
	<div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">

	<div className="bg-white shadow overflow-hidden sm:rounded-lg">
		<div className="px-4 py-5 sm:px-6">
			<h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Salary Details</h3>
		</div>
		<div className="border-t border-gray-200">
			<dl>
			<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-lg text-black-500 font-bold">Employee ID</dt>
					<dd className="mt-1 text-base text-gray-900 sm:col-span-2">{salary.eid}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Job Role</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.jobRole}</dd>
				</div>
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Basic Salary</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.basicSalary}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">OT Hours</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.otHours}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">OT Rates</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.otRates}</dd>
				</div>
				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Total OT</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.totalOT}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Bonus</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.bonus}</dd>
				</div>

				<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<dt className="text-sm font-medium text-gray-500">Total Salary</dt>
					<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{salary.totalSalary}</dd>
				</div>


				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
					<Link to={`/employeeManager/salary/EditSalary/${salary._id}`} className="bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Update</Link>
					
					<button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 text-xs">Remove</button>

				</div>
				</div>
			</dl>
		</div>
	</div>
	</div>
</div>
</>
)
}




