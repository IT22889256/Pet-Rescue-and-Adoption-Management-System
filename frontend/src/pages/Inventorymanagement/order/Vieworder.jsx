
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// export default function ViewOrder() {
//     const [order, setOrder] = useState({});
//     // const { orderId } = useParams();
//     const {id} = useParams()
//     useEffect(() => {
//         axios.get(`http://localhost:3000/InventoryManager/order/vieworder/${id}`)
//             .then((res) => {
//                 setOrder(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, []);

//     return (
//         <div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
//             <div className="bg-white shadow overflow-hidden sm:rounded-lg">
//                 <div className="px-4 py-5 sm:px-6">
//                     <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Order Details</h3>
//                 </div>
//                 <div className="border-t border-gray-200">
//                     <dl>
//                         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                             <dt className="text-lg text-black-500 font-medium">Order ID</dt>
//                             <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order._id}</dd>
//                         </div>
//                         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                             <dt className="text-lg font-medium text-black-500">Item ID</dt>
//                             <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.item_id}</dd>
//                         </div>
//                         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                             <dt className="text-lg font-medium text-black-500">Order Quantity</dt>
//                             <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.order_quantity}</dd>
//                         </div>
//                         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                             <dt className="text-lg font-medium text-black-500">Date</dt>
//                             <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.date}</dd>
//                         </div>
//                         <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
//                             <dt className="text-lg font-medium text-black-500">Status</dt>
//                             <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.order_status}</dd>
//                         </div>
//                     </dl>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewOrder() {
    const [order, setOrder] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/InventoryManager/order/vieworder/${id}`)
            .then((res) => {
                setOrder(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); // Make sure to include 'id' in the dependency array

    return (
        <div className="max-w-4xl mx-auto px-1 py-1 bg-neutral-200 sm:rounded-lg">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">Order Details</h3>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg text-black-500 font-medium">Order ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order._id}</dd>
                        </div>
                        {/* <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Item ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.item_id}</dd>
                        </div> */}
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Order Quantity</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.order_quantity}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Date</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.date}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Status</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.order_status}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
