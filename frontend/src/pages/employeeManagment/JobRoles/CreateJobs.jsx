import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateJob() {

    
    const [jobRole, setJobRole] = useState()
    const [otRates, setOtRates] = useState()
    const [basicSalary, setBasicSalary] = useState()
   
    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            jobRole,otRates,basicSalary
        };
        console.log('result')
        axios.post('http://localhost:3000/EmployeeManager/jobRole',data)
        .then(result => {
            console.log(result)
            navigate('/EmployeeManager/JobRoles')
        })
        .catch(err => console.log(err))
    }
        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Job Role</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                <div className="sm:col-span-3">
                                    <label htmlFor="jobRole" className="block text-sm font-medium leading-6 text-gray-900">
                                    jobRole Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="jobRole"
                                            id="jobRole"
                                            value={jobRole}
                                            onChange={(e) => setJobRole(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                                </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="otRates" className="block text-sm font-medium leading-6 text-gray-900">
                                        OT Rates
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="otRates"
                                                id="otRates"
                                                value={otRates}
                                                onChange={(e) => setOtRates(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="basicSalary" className="block text-sm font-medium leading-6 text-gray-900">
                                        Basic Salary
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="basicSalary"
                                                id="basicSalary"
                                                value={basicSalary}
                                                onChange={(e) => setBasicSalary(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   

                             
                             
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button>
                        <button
                            onClick={Submit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                </div>
        </div>
    )
}

