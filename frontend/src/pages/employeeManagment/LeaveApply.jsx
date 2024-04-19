import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function ApplyLeave() {

   const { eid } = useParams()
   console.log(eid)
    //const [eid, setEid] = useState('');
    const [reason, setReason] = useState('');
    const [note, setNote] = useState('');
    const [startDate, setStartDate] = useState('');
    const [days, setDays] = useState('');


    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            eid,
            reason,
            note,
            startDate,
            days,
        };

        console.log('result')
        axios.post('http://localhost:3000/EmployeeManager/leave/requestLeave/',data)
        .then(result => {
            console.log(result)
            alert('Leave Requested Successfully')
        })
        .catch(err => console.log(err))
    }
        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Employee Leave Request Form</div>
			<div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='employeeManager/applyLeave/${salary._id}' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >View my Leave</Link></div>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                            
                               
                                <div className="sm:col-span-3">
                                    <label htmlFor="eid" className="block text-sm font-medium leading-6 text-gray-900">
                                        Employee ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="eid"
                                            id="eid"
                                            value={eid}
                                            readOnly
                                          // onChange={(e) => setEid(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                                </div>
                                                <div className="sm:col-span-3">
                <label htmlFor="reason" className="block text-sm font-medium leading-6 text-gray-900">
                Reason
                </label>
                <div className="mt-2">
                    <select
                        name="reason"
                        id="reason"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option></option>
                        <option>medical</option>
                        <option>casual</option>
                        <option>emergency</option>
                    
                    </select>
                </div>
            </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="bonus" className="block text-sm font-medium leading-6 text-gray-900">
                                        Note
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="note"
                                                id="note"
                                                value={note}
                                                onChange={(e) => setNote(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="startDate" className="block text-sm font-medium leading-6 text-gray-900">
                                        Start Date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                name="startDate"
                                                id="startDate"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="days" className="block text-sm font-medium leading-6 text-gray-900">
                                        Days <span className="text-sm font-small leading-6 text-gray-400">*employees have 4 medical, 3 casual, 2 emergency leaves</span>
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="days"
                                                id="days"
                                                value={days}
                                                onChange={(e) => setDays(e.target.value)}
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

