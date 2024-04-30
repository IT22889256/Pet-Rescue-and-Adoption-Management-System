import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import JanitoAvailability from '../../JanitorAvailability'



// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateJanitorSchedule() {


    const [TaskName, setTaskName] = useState()
    const [Staff_Member1, setStaffMem1] = useState()
    const [Staff_Member2, setStaffMem2] = useState()
    const [Staff_Member3, setStaffMem3] = useState()
   

    const navigate = useNavigate()

    const [showSuccess, setShowSuccess] = useState(false);

    const Submit = (e) => {

        const data = {
            TaskName,
            Staff_Member1,
            Staff_Member2,
            Staff_Member3,
            
        };
        console.log('result')
        axios.post('http://localhost:3000/EmployeeManager/janitorSchedule/',data)
        .then(() => {
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              navigate('/transportManager/scheduleProfile');
            }, 3000);
          })
          .catch((error) => {
            console.log(error);
          });
      };

        return (

            <div>
            <div className={`fixed inset-0 overflow-y-auto flex items-center justify-center z-50 ${showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Created successful</h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">The Schedule has been successfully Created.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              </div>
              </div>
            </div>
            

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold text-center'>Create Janitor Schedule</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                
                                  


                                   
                                    <div className="sm:col-span-3">
                                        <label htmlFor="TaskName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Task Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="TaskName"
                                                id="TaskName"
                                                value={TaskName}
                                                onChange={(e) => setTaskName(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   

                                    <div className="sm:col-span-3">
                                        <label htmlFor="Staff_Member1" className="block text-sm font-medium leading-6 text-gray-900">
                                        Staff Member 1 <span className="text-sm font-small leading-6 text-gray-400">(Available Staff members Appear Here)</span>
                                        </label>
                                        <div
                                        
                                        id="Staff_Member1"
                                        name="Staff_Member1"
                                        value={Staff_Member1}
                                        
                                        onChange={(e) => setStaffMem1(e.target.value)}>  <JanitoAvailability/>
                                          </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="Staff_Member2" className="block text-sm font-medium leading-6 text-gray-900">
                                        Staff Member 2 <span className="text-sm font-small leading-6 text-gray-400">(Available Staff members Appear Here)</span>
                                        </label>
                                        <div
                                        
                                        id="Staff_Member2"
                                        name="Staff_Member2"
                                        value={Staff_Member2}
                                        
                                        onChange={(e) => setStaffMem2(e.target.value)}>  <JanitoAvailability/>
                                          </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="Staff_Member1" className="block text-sm font-medium leading-6 text-gray-900">
                                        Staff Member 3 <span className="text-sm font-small leading-6 text-gray-400">(Available Staff members Appear Here)</span>
                                        </label>
                                        <div
                                        
                                        id="Staff_Member3"
                                        name="Staff_Member3"
                                        value={Staff_Member3}
                                        
                                        onChange={(e) => setStaffMem3(e.target.value)}>  <JanitoAvailability/>
                                          </div>
                                    </div>

                                    
                                   
                                  
                                    </div>
                                </div>
                            </div>

                            
                            <div className="mt-6 flex items-center justify-end gap-x-6">
                        {/* <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Cancel
                        </button> */}
                        <Link to={`/transportManager/ScheduleProfile`} className="text-sm font-semibold leading-6 text-gray-900">Cancel</Link>
                        <button
                            onClick={Submit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Submit
                        </button>
                </div>
        </div>
        </div>
    )
}

