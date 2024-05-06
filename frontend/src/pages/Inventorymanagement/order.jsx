import React, { useEffect, useState } from 'react';
import { useParams, useNavigate,Link } from 'react-router-dom';
import axios from 'axios';

export default function Order() {
    const [order, setorder] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    useEffect(() => {
        axios.get(`http://localhost:3000/InventoryManager/order`)
            .then((res) => {
                setorder(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);






	const handleDelete = (id) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this leave request?');
        if (confirmDelete) {
            axios.delete(`http://InventoryManager/order/removeorder/${id}`)
                .then(() => {
                    alert('leave request deleted');
                    //navigate('/EmployeeManager/LeaveManagement');
					window.location.reload();
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };


	
  

return (<>
             
    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">Order</strong>
        <div className="text-xs text-gray-400 pl-1.5 mb-1 float-right mt-1"><Link to='/InventoryManager/order/createorder' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Add order</Link></div>
        <div className="border-x border-gray-200 rounded-sm mt-3">
            <table className="bg-[#f3f3f3] w-full text-gray-700">
                <thead className="bg-[#c1c3c558]">
                    <tr>
                        <th>Order ID</th>
                        <th>Order quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((order) => (
                        order.order_status === 'pending' && (
                            <tr className="border-b-2 border-[#c1c3c558] text-center" key={order._id}>
                                <td>{order.oid}</td>
                                <td>{order.order_quantity}</td>
                                <td>{order.date}</td>
                                <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
                                    {order.order_status}
                                </td>
                                <td>
                                    <Link to={`/InventoryManager/order/vieworder/${order._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">View</Link>
                                    {/* Add Edit and Delete buttons */}
                                    <button className="bg-yellow-500 text-white py-2 px-3 rounded hover:bg-yellow-700 text-xs text-gray-400 text-center text-justify ml-1" onClick={() => navigate(`/InventoryManager/order/editorder/${order._id}`)}>Edit</button>
                                    <Link to={`/InventoryManager/order/removeorder/${order._id}`} className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1">Delete</Link>
                                   
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    </div>

    <div className="bg-[#f8fafc] px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
        <strong className="text-gray-700 font-medium">History</strong>
        <div className="border-x border-gray-200 rounded-sm mt-3">
            <table className="bg-[#f3f3f3] w-full text-gray-700">
                <thead className="bg-[#c1c3c558]">
                    <tr>
                        <th>Order ID</th>
                        <th>Order quantity</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((order) => (
                        order.order_status === 'completed' && (
                            <tr className="border-b-2 border-[#c1c3c558] text-center" key={order._id}>
                                <td>{order.oid}</td>
                                <td>{order.order_quantity}</td>
                                <td>{order.date}</td>
                                <td className="overflow-auto py-1 capitalize rounded-md text-s text-[#f8fafc] bg-[#cfbf28] text-center ml">
                                    {order.order_status}
                                </td>
                                <td>
                                    <Link to={`/InventoryManager/order/vieworder/${order._id}`} className="bg-blue-500 text-white py-2 px-3 rounded hover:bg-blue-700 text-xs text-gray-400 text-center text-justify ml-1">View</Link>
                                    {/* Add Edit and Delete buttons */}
                                    {/* <button className="bg-yellow-500 text-white py-2 px-3 rounded hover:bg-yellow-700 text-xs text-gray-400 text-center text-justify ml-1" onClick={() => navigate(`/InventoryManager/order/editorder/${order._id}`)}>Edit</button> */}
                                    <button className="bg-red-500 text-white py-2 px-3 rounded hover:bg-red-700 text-xs text-gray-400 text-center text-justify ml-1" onClick={() => handleDelete(order._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</>);
}
