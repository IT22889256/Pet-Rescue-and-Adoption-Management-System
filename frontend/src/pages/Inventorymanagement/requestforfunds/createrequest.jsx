import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function Createrequest() {

    // request_no: {
    //     type: String,
    //     // required: true,
       
    // },
    // request_to: {
    //     type: String,
        
    //   },
  
    //   request_date:{
    //     type:String,
    //   }
    
    

    const [request_id, setrequestid] = useState()
    const [request_no, setrequestno] = useState()
    const [request_to, setrequestto] = useState()
    const [request_date,setrequestdate] = useState()
   


   
    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            
            request_id,request_no,request_to,request_date
         
        };
        console.log('result')
        axios.post('http://localhost:3000/inventoryManager/request/createrequest',data)
        .then(result => {
            console.log(result)
            navigate('/InventoryManager/request')
        })
        .catch(err => console.log(err))
    }

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create supplier</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    request id
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_id"
                                            id="request_id"
                                            value={request_id}
                                            onChange={(e) => setrequestid(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    request no
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_no"
                                            id="request_no"
                                            value={request_no}
                                            onChange={(e) =>setrequestno (e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                  Request to
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_to"
                                            id="request_to"
                                            value={request_to}
                                            onChange={(e) =>setsupplieraddress (e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    supplier email                                   </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="supplier_email"
                                            id="supplier_email"
                                            value={supplier_email}
                                            onChange={(e) => setsupplieremail(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    supplier age                                 </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="supplier_age"
                                            id="supplier_age"
                                            value={supplier_age}
                                            onChange={(e) => setsupplierage(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    supplier phonenumber                                </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="supplier_phonenumber"
                                            id="supplier_phonenumber"
                                            value={supplier_phonenumber}
                                            onChange={(e) => setsupplierphonenumber(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    supplier image                                </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="supplier_image"
                                            id="supplier_image"
                                            value={supplier_image}
                                            onChange={(e) => setsupplierimage(e.target.value)}
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
        </div>
    )
}

