// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { PhotoIcon} from '@heroicons/react/24/solid'

// // import { PhotoIcon} from '@heroicons/react/24/solid'
// export default function CreatePet() {

//     // const [_id, setorderid] = useState()
//     const [oid, setoid] = useState()
//     const [order_quantity, setorderquantity] = useState()
//     const [date,setdate] = useState()
//     const[order_category,setordercategory]=useState()
//     const [order_status,setstatus] = useState();
   
//     const navigate = useNavigate()

//     const Submit = (e) => {

//         const data = {
            

//             oid,order_quantity,date,order_status,order_category,

//         };
//         console.log('result')
//         axios.post('http://localhost:3000/InventoryManager/order/createorder',data)
//         .then(result => {
//             console.log(result)
//             navigate('/InventoryManager/order')
//         })
//         .catch(err => console.log(err))
//     }

//         return (

//             <div>
//                     <div className="space-y-12">
//                         <div className="border-b border-gray-900/10 pb-12">
//                         <div className='text-xl font-bold '>Create Order</div>
//                             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
//                             {/* <div className="sm:col-span-3">
//                             <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Order Id
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     type="text"
//                                     name="oid"
//                                     id="oid"
//                                     value={oid}
//                                     className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                             </div> */}
//                             {/* <div className="sm:col-span-3">
//                                 <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Order Id
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         type="text"
//                                         name="oid"
//                                         id="oid"
//                                         value={oid}
//                                         onChange={(e) => setitemid(e.target.value)}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                             </div> */}
//                             <div className="sm:col-span-3">
//                                 <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Order quantity
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         type="text"
//                                         name="order_quantity"
//                                         id="order_quantity"
//                                         value={order_quantity}
//                                         onChange={(e) => setorderquantity(e.target.value)}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                             </div>
//                             {/* <div className="sm:col-span-3">
//                                 <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Order category
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         type="text"
//                                         name="order_category"
//                                         id="order_category"
//                                         value={order_category}
//                                         onChange={(e) => setordercategory(e.target.value)}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                             </div> */}
//                             <div className="sm:col-span-3">
//                             <label htmlFor="order_category" className="block text-sm font-medium leading-6 text-gray-900">
//                                             Order Category
//                             </label>
//                             <div className="mt-2">
//                             <div className="flex items-center">
//                              <input
//                                 type="radio"
//                                 id="pet_food"
//                                 name="order_category"
//                                 value="pet_food"
//                                 checked={order_category === "pet_food"}
//                                 onChange={(e) => setordercategory(e.target.value)}
//                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                                />
//                             <label htmlFor="pet_food" className="ml-2 block text-sm leading-5 text-gray-900">
//                                          Pet Food
//                             </label>
//                              </div>
//                               <div className="flex items-center mt-2">
//                                 <input
//                               type="radio"
//                                id="vet_care"
//                                name="order_category"
//                                  value="vet_care"
//                                  checked={order_category === "vet_care"}
//                                  onChange={(e) => setordercategory(e.target.value)}
//                                  className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                           />
//                           <label htmlFor="vet_care" className="ml-2 block text-sm leading-5 text-gray-900">
//                                          Vet Care
//                              </label>
//                             </div>
//                              <div className="flex items-center mt-2">
//                                   <input
//                                         type="radio"
//                                          id="toys"
//                                             name="order_category"
//                                             value="toys"
//                                            checked={order_category === "toys"}
//                                               onChange={(e) => setordercategory(e.target.value)}
//                                              className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
//                                               />
//                                    <label htmlFor="toys" className="ml-2 block text-sm leading-5 text-gray-900">
//                                                     Toys
//                                        </label>
//                                        </div>
//                                         </div>
//                                          </div>


                           
//                             <div className="sm:col-span-3">
//                                 <label htmlFor="pet-age" className="block text-sm font-medium leading-6 text-gray-900">
//                                     Item date
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         type="date"
//                                         name="date"
//                                         id="date"
//                                         value={date}
//                                         onChange={(e) => setdate(e.target.value)}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                                     </div>

//                                      {/* <div className="sm:col-span-3">
//                                 <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
//                                     order status
//                                 </label>
//                                 <div className="mt-2">
//                                     <input
//                                         type="text"
//                                         name="order_status"
//                                         id="order_status"
//                                         value={order_status}
//                                         className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                     />
//                                 </div>
//                             </div> 
//                                      */}
//                                      {/* <div className="sm:col-span-3">
//                                      <label htmlFor="order_status" className="block text-sm font-medium leading-6 text-gray-900">
//                                                   Order Status
//                                                     </label>
//                                       <div className="mt-2">
//                                        <select
//                                            id="order_status"
//                                          name="order_status"
//                                          value={order_status}
//                                          onChange={(e) => setstatus(e.target.value)}
//                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                          >
//                                        <option value="pending">Pending</option>
//                                         <option value="completed">Completed</option>
//                                         </select>
//                                           </div>
//                                                </div> */}
//                             </div>
//                             </div>
//                             </div>
//                             <div className="mt-6 flex items-center justify-end gap-x-6">
//                         <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//                             Cancel
//                         </button>
//                         <button
//                             onClick={Submit}
//                             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Submit
//                         </button>
//                 </div>
//         </div>
//     )
// }

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function CreateOrder() {
//     const [oid, setOid] = useState('');
//     const [orderQuantity, setOrderQuantity] = useState('');
//     const [date, setDate] = useState('');
//     const [orderCategory, setOrderCategory] = useState('');
//     const [orderStatus, setOrderStatus] = useState('pending'); // Default value

//     const navigate = useNavigate();

//     const handleSubmit = () => {
//         const data = {
//             oid,
//             order_quantity: orderQuantity,
//             date,
//             order_category: orderCategory,
//             order_status: orderStatus
//         };

//         axios.post('http://localhost:3000/InventoryManager/order/createorder', data)
//             .then(() => {
//                 alert('Order created successfully!');
//                 navigate('/InventoryManager/order');
//             })
//             .catch((error) => {
//                 console.error('Error creating order:', error);
//             });
//     };

//     return (
//         <div>
//             {/* <div className="text-xl font-bold">Create Order</div> */}
//             <div className="space-y-12">
//                 <div className="border-b border-gray-900/10 pb-12">
//                     <div className='text-xl font-bold '>Create Order</div>
//                     <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                         <div className="sm:col-span-3">
//                             <label htmlFor="orderQuantity" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Order Quantity
//                             </label>
//                             <input
//                                 type="text"
//                                 name="orderQuantity"
//                                 id="orderQuantity"
//                                 value={orderQuantity}
//                                 onChange={(e) => setOrderQuantity(e.target.value)}
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                         <div className="sm:col-span-3">
//                             <label htmlFor="orderCategory" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Order Category
//                             </label>
//                             <div className="mt-2">
//                                 <input
//                                     type="text"
//                                     name="orderCategory"
//                                     id="orderCategory"
//                                     value={orderCategory}
//                                     onChange={(e) => setOrderCategory(e.target.value)}
//                                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 />
//                             </div>
//                         </div>
//                         <div className="sm:col-span-3">
//                             <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Item Date
//                             </label>
//                             <input
//                                 type="date"
//                                 name="date"
//                                 id="date"
//                                 value={date}
//                                 onChange={(e) => setDate(e.target.value)}
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                         <div className="sm:col-span-3">
//                             <label className="block text-sm font-medium leading-6 text-gray-900">Order Status</label>
//                             <select
//                                 className="block w-full mt-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                                 value={orderStatus}
//                                 onChange={(e) => setOrderStatus(e.target.value)}
//                             >
//                                 <option value="pending">Pending</option>
//                                 <option value="completed">Completed</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="mt-6 flex items-center justify-end gap-x-6">
//                 <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//                     Cancel
//                 </button>
//                 <button
//                     onClick={handleSubmit}
//                     className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                     Submit
//                 </button>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateOrder() {
    const [oid, setOid] = useState('');
    const [orderQuantity, setOrderQuantity] = useState('');
    const [date, setDate] = useState('');
    const [orderCategory, setOrderCategory] = useState('');
    const [orderStatus, setOrderStatus] = useState('pending'); // Default value

    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            oid,
            order_quantity: orderQuantity,
            date,
            order_category: orderCategory,
            order_status: orderStatus
        };

        axios.post('http://localhost:3000/InventoryManager/order/createorder', data)
            .then(() => {
                alert('Order created successfully!');
                navigate('/InventoryManager/order');
            })
            .catch((error) => {
                console.error('Error creating order:', error);
            });
    };

    return (
        <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className='text-xl font-bold'>Create Order</div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label htmlFor="orderQuantity" className="block text-sm font-medium leading-6 text-gray-900">
                                Order Quantity
                            </label>
                            <input
                                type="text"
                                name="orderQuantity"
                                id="orderQuantity"
                                value={orderQuantity}
                                onChange={(e) => setOrderQuantity(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Order Category</label>
                            <div className="mt-2">
                                <div className="flex items-center">
                                    <input
                                        type="radio"
                                        id="petFood"
                                        name="orderCategory"
                                        value="pet_food"
                                        checked={orderCategory === "pet_food"}
                                        onChange={() => setOrderCategory("pet_food")}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <label htmlFor="petFood" className="ml-2 block text-sm leading-5 text-gray-900">Pet Food</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="radio"
                                        id="petToys"
                                        name="orderCategory"
                                        value="pet_toys"
                                        checked={orderCategory === "pet_toys"}
                                        onChange={() => setOrderCategory("pet_toys")}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <label htmlFor="petToys" className="ml-2 block text-sm leading-5 text-gray-900">Pet Toys</label>
                                </div>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="radio"
                                        id="petCare"
                                        name="orderCategory"
                                        value="pet_care"
                                        checked={orderCategory === "pet_care"}
                                        onChange={() => setOrderCategory("pet_care")}
                                        className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                    />
                                    <label htmlFor="petCare" className="ml-2 block text-sm leading-5 text-gray-900">Pet Care</label>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                                Item Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium leading-6 text-gray-900">Order Status</label>
                            <select
                                className="block w-full mt-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                value={orderStatus}
                                onChange={(e) => setOrderStatus(e.target.value)}
                            >
                                <option value="pending">Pending</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => navigate('/InventoryManager/order')}>
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

