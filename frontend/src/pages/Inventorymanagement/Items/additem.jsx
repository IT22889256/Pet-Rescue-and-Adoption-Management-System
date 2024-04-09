import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreatePet() {

    const [item_name, setItemName] = useState()
    const [item_category, setItemcategory] = useState()
    const [item_quantity, setquantity] = useState()
    const [item_price,setprice] = useState()
    const [item_image,setimage] = useState()
    const [item_date,setdate] = useState()



   
    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            
       
            item_name,item_category,item_quantity,item_price,item_image,item_date
        };
        console.log('result')
        axios.post('http://localhost:3000/InventoryManager/items/createItem',data)
        .then(result => {
            console.log(result)
            navigate('/InventoryManager/Items')
        })
        .catch(err => console.log(err))
    }

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Items</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_name"
                                            id="item_name"
                                            value={item_name}
                                            onChange={(e) => setItemName(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item category
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_category"
                                            id="item_category"
                                            value={item_category}
                                            onChange={(e) =>setItemcategory (e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item quantity                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_quantity"
                                            id="item_quantity"
                                            value={item_quantity}
                                            onChange={(e) => setquantity(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item price                                   </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_price"
                                            id="item_price"
                                            value={item_price}
                                            onChange={(e) => setprice(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item image                                   </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_image"
                                            id="item_image"
                                            value={item_image}
                                            onChange={(e) => setimage(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div> 
                                    </div>
                                    <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item date                                  </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="item_date"
                                            id="item_date"
                                            value={item_date}
                                            onChange={(e) => setdate(e.target.value)}
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

