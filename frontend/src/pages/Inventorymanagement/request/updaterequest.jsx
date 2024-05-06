import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function Updaterequest() {
    
    
    


const [request_id, setrequestid] = useState()
const [request_no, setrequestno] = useState()
const [request_to, setrequestto] = useState()
const [request_date,setRequestDate] = useState()


    const [dateError, setDateError] = useState("");

    const handleDateChange = (e) => {
        const value = e.target.value;
        setRequestDate(value);

        // Regular expression to match date in format YYYY-MM-DD
        const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

        if (!dateRegex.test(value)) {
            setDateError("Please enter a valid date in the format YYYY-MM-DD");
        } else {
            setDateError("");
        }
    };



    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()
    useEffect((e) => {
        
        axios.get(`http://localhost:3000/InventoryManager/request/viewrequest/${id}`)
        .then((res) => {
            setrequestid(res.data.request_id)
            setrequestno(res.data.request_no)
            setrequestto(res.data.request_to)
            setRequestDate(res.data.request_date)
          


            console.log(res);
           
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            request_id,request_no,request_to,request_date
        };
    
        console.log('result')
        axios.put(`http://localhost:3000/InventoryManager/request/updaterequest/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/InventoryManager/request')
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
                                    name="request_id"
                                    id="request_id"
                                    value={request_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                           
                            <div className="sm:col-span-3">
                                <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Supplier address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="request_to"
                                        id="request_to"
                                        value={request_to}
                                        onChange={(e) => setrequestto(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
            <label htmlFor="request_date" className="block text-sm font-medium leading-6 text-gray-900">
                Request Date
            </label>
            <div className="mt-2">
                <input
                    type="text"
                    name="request_date"
                    id="request_date"
                    value={request_date}
                    onChange={handleDateChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {dateError && <p className="text-red-500 text-sm">{dateError}</p>}
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

