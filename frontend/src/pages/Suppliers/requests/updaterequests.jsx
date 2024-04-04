import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function Updaterequests() {
    
    

const [requests_id, setrequestid] = useState()
const [requests_from, setrequestsfrom] = useState()
const [requests_description, setrequestsdescription] = useState()
const [requests_date,setrequestsdate] = useState()



    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()
    useEffect((e) => {
        
        axios.get(`http://localhost:3000/suppliers/requests/viewrequests/${id}`)
        .then((res) => {
            setrequestid(res.data.requests_id)
            setrequestsfrom(res.data.requests_from)
            setrequestsdescription(res.data.requests_description)
            setrequestsdate(res.data.requests_date)
          
            // setPetAge(res.data.pet_age)
            // setPetappearance(res.data.pet_appearance)
            // setLocation(res.data.location)
            // setPetImage(res.data.pet_image)

            console.log(res);
           
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            requests_id,requests_from,requests_description,requests_date
        };
    
        console.log('result')
        axios.put(`http://localhost:3000/suppliers/requests/updaterequests/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/Suppliers/requests')
        })
        .catch(err => console.log(err))
    }
        return (

            
            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Pet Profile</div>
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
                            <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                            request Id
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="requests_id"
                                    id="request_id"
                                    value={requests_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
                                request from
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="requests_from"
                                        id="requests_from"
                                        value={requests_from}
                                        onChange={(e) => setrequestsfrom(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                      {/* setrequestsid(res.data.request_id)
            setrequestsfrom(res.data.requests_from)
            setrequestsdescription(res.data.requests_description)
            setrequestsdate(res.data.request_date) */}

                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    requests description
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="requests_description"
                                        id="requests_description"
                                        value={requests_description}
                                        onChange={(e) => setrequestsdescription(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="pet-appearance" className="block text-sm font-medium leading-6 text-gray-900">
                                    request date
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="requests_date"
                                        id="requests_date"
                                        value={requests_date}
                                        onChange={(e) => setrequestsdate(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                           
                           
                           
                            {/* <div className="sm:col-span-3">
                                <label htmlFor="pet-type" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet type
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="pet-type"
                                            name="pet_type"
                                            value={pet_type}
                                            
                                            onChange={(e) => setPettype(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option>Cat</option>
                                            <option>Dog</option>
                                        </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="health-status" className="block text-sm font-medium leading-6 text-gray-900">
                                    Health Status
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="health-status"
                                            name="health_status"
                                            value={health_status}
                                            onChange={(e) => setHealStatus(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option className='bg-[#15803d]'>Good</option>
                                            <option className='bg-[#be123c]'>Need Treament</option>
                                            <option className='bg-[#ca8a04]'>Treating</option>
                                        </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                    Location
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="location"
                                        id="locations"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div> */}
                            {/* { <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            supplier image
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
                                            value={supplier_image}
                                            onChange={(e) => setsupplierimage(e.target.value)}
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
</div>


)}

