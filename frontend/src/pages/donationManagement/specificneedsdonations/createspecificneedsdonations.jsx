import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateSpecificNeedDonations() {

    // const [pet_id, setPetId] = useState()
    // const [sponsorship_id, setSponsorshipId] = useState()
    // const [pet_name, setPetName] = useState()
    // const [pet_type, setPettype] = useState()
    // const [pet_description, setPetDescription] = useState()
    // const [added_date, setAddedDate] = useState()
    // const [sponsorship_status, setSponsorshipStatus] = useState()
    // const [pet_image, setPetImage] = useState()
    // const [health_status, setHealStatus] = useState()
    // const navigate = useNavigate()

   const [user_id, setUserId] = useState()
   const[specificneed_category,setSpecificNeedCategory] = useState()
  
   const [amount, setAmount] = useState()
   
    
    
    const navigate = useNavigate()

   

    const Submit = (e) => {

        const data = {
           user_id,specificneed_category,amount
        };
        console.log('result')
        axios.post('http://localhost:3000/donationManager/specificneedsdonations/add',data)
        .then(result => {
            console.log(result)
            navigate('/donationManager/specificneedsdonations')
        })
        .catch(err => console.log(err))
    }

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Specific Needs donations</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                     User ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_id"
                                            id="request-id"
                                            value={user_id}
                                            onChange={(e) => setUserId(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                                </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
                                           Amount
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="task_id"
                                                id="task-id"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="sm:col-span-3">
                                        <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                          donation date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pet_name"
                                                id="pet-name"
                                                value={donation_date}
                                                onChange={(e) => setPetId(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div> */}
                                 
                                    { <div className="sm:col-span-3">
                                        <label htmlFor="health-status" className="block text-sm font-medium leading-6 text-gray-900">
                                           Specific Need Categeory
                                        </label>
                                            <div className="mt-2">
                                                <select
                                                    id="health-status"
                                                    name="health_status"
                                                    value={specificneed_category}
                                                    onChange={(e) => setSpecificNeedCategory(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    ><option></option>
                                                    <option className='bg-[#d94ae0]'>Pet Food</option>
                                                    <option className='bg-[#c277c6]'>Vet Care Items</option>
                                                  
                                                    <option className='bg-[#ca8a04]'>Pet Toys</option>
                                                </select>
                                        </div>
                                    </div> } 
                                   
                                     
                                    

                                    {/* { <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet Image
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file_upload"  type="file" className="sr-only" 
                                                    value={pet_image}
                                                    onChange={(e) => setPetImage(e.target.value)}
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                    </div>
                                    </div> } */}
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

