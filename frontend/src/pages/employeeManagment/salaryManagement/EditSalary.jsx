import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditSalary() {
    
    const [eid, setEid] = useState('');
    const [otHours, setOtHours] = useState('');
    const [bonus, setBonus] = useState('');


    const navigate = useNavigate()
    const {id} = useParams()
    useEffect((e) => {
        axios.get(`http://localhost:3000/EmployeeManager/salary/${id}`)
        .then((res) => {

            setEid(res.data.eid);
            setOtHours(res.data.otHours);
            setBonus(res.data.bonus);
           

            console.log(res);
        }).catch(err => console.log(err))
    },[])


    const Edit = (e) => {

        const data = {
            eid,
            otHours,
            bonus,
        };
        
        console.log('result')
        axios.put(`http://localhost:3000/EmployeeManager/salary/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/EmployeeManager/SalaryManagement')
        })
        .catch(err => console.log(err))
    }
        return (

        
            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Employee Salary</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
          <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
            Profile picture
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <img className="h-20 w-20 text-gray-300" alt='image' />
          </div>
        </div>



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
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                        <label htmlFor="otHours" className="block text-sm font-medium leading-6 text-gray-900">
                                        OT Hours
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="otHours"
                                                id="otHours"
                                                value={otHours}
                                                onChange={(e) => setOtHours(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="bonus" className="block text-sm font-medium leading-6 text-gray-900">
                                            Bonus
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                name="bonus"
                                                id="bonus"
                                                value={bonus}
                                                onChange={(e) => setBonus(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                          </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                <Link type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </Link>
                
                <button
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
        </div>
</div>


)}