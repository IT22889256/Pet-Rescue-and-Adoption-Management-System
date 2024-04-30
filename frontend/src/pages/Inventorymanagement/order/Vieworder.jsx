
// // import React, { useEffect, useState } from 'react'
// // import { Link, useParams,useNavigate } from 'react-router-dom'
// // import { getPetHealth } from '../../../lib/helpers/petManager/petHealthStatus'
// // import axios from 'axios'

// // export default function Vieworder() {
	
// // 	const [order, setorder] = useState({})
// // 	const {id} = useParams()
// // 	const navigate = useNavigate()
// // 	useEffect(() => {
// // 		axios.get(`http://localhost:3000/inventoryManager/order/vieworder/${id}`)
// // 		.then((res) => {
// // 			setorder(res.data)
			
// // 		}).catch((err) => {
// // 			console.log(err);
// // 		})
// // 	},[])
// // 	const Accept = (e) => {
		
// // 		const data = {
// // 			"order_status":"Accept"
// // 		}
		
// // 		console.log('result')
// //         axios.put(`http://localhost:3000/InventoryManager/order/vieworder/${id}`,data)
// //         .then(result => {
			
// //             alert('updated')
// //             console.log(result)
// //             navigate(`/InventoryManager/order/createorder/${id}`)
// //         })
// //         .catch(err => console.log(err))
// // 	}

// // 	const Reject = (e) => {
		
// // 		const data = {
// // 			"order_status":"Reject"
// // 		}
		
// // 		console.log('result')
// //         axios.put(`http://localhost:3000/InventoryManager/order/vieworder/${id}`,data)
// //         .then(result => {
			
// //             alert('updated')
// //             console.log(result)
// //             navigate(`/InventoryManager/order`)
// //         })
// //         .catch(err => console.log(err))
// // 	}

// // return (
// // 		<div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
// // 			<strong className="text-gray-700 font-medium">Rescue request</strong>
// // 			<div className="border-x border-gray-200 rounded-sm mt-3">
// // 				<table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
// // 					<thead className="bg-[#c1c3c558]" >
// // 						<tr>
// // 						<th>Order ID</th>
// // 							<th>Item ID</th>
// // 							<th>Quantity</th>
// // 							<th>Order date</th>
// // 							<th>Status</th>
							
						

// // 								{order.order_status==='Pending' &&(
// // 								<th>Action</th>

// // 								)}
// // 						</tr>
// // 					</thead>
// // 						<tbody>
// // 						<tr className='border-b-2 border-[#c1c3c558] text-center'>
// // 						<td>
// // 									{order.order_id}
// // 								</td >
// // 								<td>
// // 									{order.item_id}
// // 								</td>
// // 								<td>
// // 									{order.order_quantity}
// // 								</td>
// // 								<td>
// // 									{order.date}
// // 								</td >
// // 								{/* <td>
// // 									{order.order_status}
// // 								</td > */}
								
								
							
// // 									{order.order_status=== "Pending" && (
// // 									<td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-centerml">
// // 										<div>{order.order_status}</div>
// // 									</td>)}
// // 									{order.order_status=== "Accept" && (
// // 									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
// // 										<div>{order.order_status}</div>
// // 									</td>)}
// // 									{order.order_status=== "Reject" && (
// // 									<td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
// // 										<div>{order.order_status}</div>
// // 									</td>)}
								
// // 								 <td>
// // 								{order.order_status==='Pending' &&(
// // 								<>
// // 									<Link onClick={Accept} to={`/InventoryManager/order/editorder/${order._id}`} className=" bg-green-500 text-white py-2 px-2 rounded hover:bg-green-700 text-xs text-gray-400  text-center text-justify ml-1 ">Edit</Link>
// // 									<Link  onClick={Reject} to={`/InventoryManager/order/removeorder/${order._id}`} className=" bg-red-500 text-white py-2 px-2 rounded hover:bg-red-700 text-xs text-gray-400  text-center text-justify ml-1 ">Remove</Link>
// // 								</>

// // 								)}
// // 								</td>  
								
// // 							</tr>
// // 					</tbody>
					
// // 				</table>
// // 			</div>
// // 		</div>
// // 	)
// // }

// import React, { useEffect, useState } from 'react';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Vieworder() {
//     const [order, setOrder] = useState({});
//     const { id } = useParams();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get(`http://localhost:3000/InventoryManager/order/vieworder/${id}`)
//             .then((res) => {
//                 setOrder(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }, [id]);

//     return (
//         <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
//             <strong className="text-gray-700 font-medium">Rescue request</strong>
//             <div className="border-x border-gray-200 rounded-sm mt-3">
//                 <table className="bg-[#f3f3f3] w-full text-gray-700 h-full">
//                     <thead className="bg-[#c1c3c558]">
//                         <tr>
//                             <th>Order ID</th>
//                             <th>Item ID</th>
//                             <th>Quantity</th>
//                             <th>Order date</th>
//                             <th>Status</th>
//                             {order.order_status === 'Pending' && (
//                                 <>
//                                     <th>Actions</th>
//                                 </>
//                             )}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr className="border-b-2 border-[#c1c3c558] text-center">
//                             <td>{order.order_id}</td>
//                             <td>{order.item_id}</td>
//                             <td>{order.order_quantity}</td>
//                             <td>{order.date}</td>
//                             {order.order_status === 'Pending' && (
//                                 <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center">
//                                     {order.order_status}
//                                 </td>
//                             )}
//                             {order.order_status === 'Accept' && (
//                                 <td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#15803d] text-center">
//                                     {order.order_status}
//                                 </td>
//                             )}
//                             {order.order_status === 'Reject' && (
//                                 <td className="capitalize rounded-md text-s text-[#f8fafc] bg-[#801515] text-center">
//                                     {order.order_status}
//                                 </td>
//                             )}
//                             <td>
//                                 {order.order_status === 'Pending' && (
//                                     <>
//                                         <Link to={`/InventoryManager/order/editorder/${order._id}`} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700 text-xs text-gray-400 text-center ml-1">Edit</Link>
//                                         <Link to={`/InventoryManager/order/removeorder/${order._id}`} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 text-xs text-gray-400 text-center ml-1">Remove</Link>
//                                     </>
//                                 )}
//                             </td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewOrder() {
    const [order, setOrder] = useState({});
    // const { orderId } = useParams();
    const {id} = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3000/InventoryManager/order/vieworder/${id}`)
            .then((res) => {
                setOrder(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-lg font-medium text-black-500">Item ID</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:col-span-2">{order.item_id}</dd>
                        </div>
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
