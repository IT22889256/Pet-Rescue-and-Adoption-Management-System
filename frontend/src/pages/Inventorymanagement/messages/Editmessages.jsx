import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditSupplyRequest() {
    
    const [_id, setReqId] = useState()
    const [supply_item, setItem] = useState()
    const [supply_pettype, setPetType] = useState()
    const [supply_brand, setSupplyBrand] = useState()
    const [supply_message, setSupplyMessage] = useState()

    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()
    useEffect((e) => {
        
        axios.get(`http://localhost:3000/InventoryManager/messages/viewmessages/${id}`)
        .then((res) => {
            setReqId(res.data._id)
            setItem(res.data.supply_item)
            setPetType(res.data.supply_pettype)
            setSupplyBrand(res.data.supply_brand)
            setSupplyMessage(res.data.supply_message)

            console.log(res);
            
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            _id,supply_item,supply_pettype,supply_brand,supply_message,
        };
        
        console.log('result')
        axios.put(`http://localhost:3000/InventoryManager/messages/editmessages/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/InventoryManager/messages')
        })
        .catch(err => console.log(err))
    }
        return (

            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Supply Request</div>
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
                                Request ID
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="request_id"
                                    id="request-id"
                                    value={_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="supply-item" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item Type
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="supply-item"
                                            name="supply_item"
                                            value={supply_item}
                                            
                                            onChange={(e) => setItem(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option>Food</option>
                                            <option>Medicine</option>
                                        </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="supply-pettype" className="block text-sm font-medium leading-6 text-gray-900">
                                    Pet Type
                                </label>
                                    <div className="mt-2">
                                        <select
                                            id="supply-pettype"
                                            name="supply_pettype"
                                            value={supply_pettype}
                                            
                                            onChange={(e) => setPetType(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            ><option></option>
                                            <option>Cat</option>
                                            <option>Dog</option>
                                        </select>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="supply-brand" className="block text-sm font-medium leading-6 text-gray-900">
                                    Brand
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="supply_brand"
                                        id="supply-brand"
                                        value={supply_brand}
                                        onChange={(e) => setSupplyBrand(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label htmlFor="supply-message" className="block text-sm font-medium leading-6 text-gray-900">
                                     Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        type="text"
                                        name="supply_message"
                                        id="supply-message"
                                        value={supply_message}
                                        onChange={(e) => setSupplyMessage(e.target.value)}
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