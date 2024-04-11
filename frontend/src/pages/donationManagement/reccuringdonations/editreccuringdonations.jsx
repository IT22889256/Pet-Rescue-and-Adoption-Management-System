import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditReccuringDonations() {
    
  const [user_id,setUserId] = useState()
  const [amount,setAmount] = useState()
  const [donation_status,setDonationStatus] = useState()
  const [donation_frequency,setDonationFrequency] = useState()
  const [donation_start_date,setDonationStartDate] = useState()
  const [donation_end_date,setDonationEndDate] = useState()
  const [payment_status,setPaymentStatus] = useState()
  const [transaction_id,setTransactionId] = useState()
    const navigate = useNavigate()
    
    const {id} = useParams()
    useEffect((e) => {
       
        axios.get(`http://localhost:3000/donationManager/reccuringdonation/display/${id}`)
        .then((res) => {
            // setReqId(res.data.request_id)
            setUserId(res.data.user_id)
            setAmount(res.data.amount)
           
            setDonationFrequency(res.data.donation_frequency)
            setDonationStartDate(res.data.donation_start_date)
            setDonationEndDate(res.data.donation_end_date)
           

        

            console.log(res);
           
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
       user_id,amount,donation_frequency,donation_start_date,donation_end_date
        };
        
        console.log('result')
        axios.put(`http://localhost:3000/donationManager/reccuringdonation/update/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate(`/DonationManager/reccuringdonations/viewreccuringdonations/${id}`)
        })
        .catch(err => console.log(err))
    }
        return (

        
            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Reccuring Donation</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                    <div className="col-span-full">
         
          <div className="mt-2 flex items-center gap-x-3">
          
          </div>
        </div>



                        <div className="sm:col-span-3">
                            <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                               Donation ID
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="request_id"
                                    id="request-id"
                                    value={id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    User ID
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="task_id"
                                        id="task-id"
                                        value={user_id}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Amount
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pet_name"
                                        id="pet-name"
                                        value={amount}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            { <div className="sm:col-span-3">
                                <label htmlFor="pet-gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Donation Start Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="pet_gender"
                                        id="pet-gender"
                                        value={donation_start_date}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> }
                            { <div className="sm:col-span-3">
                                <label htmlFor="pet-gender" className="block text-sm font-medium leading-6 text-gray-900">
                                    Donation end Date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="date"
                                        name="pet_gender"
                                        id="pet-gender"
                                        value={donation_end_date}
                                        onChange={(e) => setDonationStatus(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> }
                         
                      

                            
                            
                
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