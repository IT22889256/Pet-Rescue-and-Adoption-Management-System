import React, { useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateRequest() {

    
    const [adopter_nic, setNIC] = useState()
    const [adopter_name, setName] = useState()
    const [adopter_phone, setPhoneNumber] = useState()
    const [adopter_email, setEmail] = useState()
    const [adopter_pettype, setPetType] = useState()
    const [adopter_petname, setPetName] = useState()
    const [adopter_message, setMessage] = useState()
    const [adopter_status, setStatus] = useState("Pending")

    const navigate = useNavigate()

    const [nameError,setNameError]=useState("");
    const [valid,setValid] = useState(true);

    const Submit = (e) => {

        const data = {
            adopter_nic,adopter_name,adopter_phone,adopter_email,adopter_pettype,adopter_petname,adopter_message,adopter_status,
        };
        console.log('result')
        axios.post('http://localhost:3000/adoptionManager/adoptionProfile/createRequest',data)
        .then(result => {
            console.log(result)
            navigate('/adoptionManager/Adoption')
        })
        .catch(err => console.log(err))
    }

    //phone number validate
    const numberValidator = (value)=>{
        let regex = /^[0-9]{10}$/;
        if(!regex.test(value) ){
            setNameError("Invalid input");
            setValid(false);
        }
        else{
            setNameError("");
            setValid(true);
        }
    }
    //email validate
    const emailValidator = (email) => {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            setNameError("Invalid email address");
            setValid(false);
        } else {
            setNameError("");
            setValid(true);
        }
    }
    
    //nic validate
    // const nicValidator = (nic) => {
    //     let regex = /^[0-9]{12}$/;
    //     if (!regex.test(nic)) {
    //         setNameError("Invalid NIC number");
    //         setValid(false);
    //     } else {
    //         setNameError("");
    //         setValid(true);
    //     }
    // }

    const nicValidator = (nic) => {
        let regexNumeric = /^[0-9]{12}$/;
        let regexAlphaNumeric = /^[0-9]{4}[0-9]{5}[vV]$/;
        //let regexAlphaNumeric = /^[0-9]{9}[vV]$/;
        //let regexCombined = /^([0-9]{10}||[0-9]{9}[vV]),$/;
    
        let birthYear = parseInt(nic.substring(0, 4));

        if (regexAlphaNumeric.test(nic) && birthYear < 2000) {
            setNameError("");
            setValid(true);
        } else if(regexNumeric.test(nic)){
            setNameError("");
            setValid(true);
        }
        else{
            setNameError("Invalid NIC number");
            setValid(false);
        }
    }
    
    

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Adoption Profile</div>
                        <div className='text-red-600'>{nameError}</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                             {/*<div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                        Request ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_id"
                                            id="request-id"
                                            value={request_id}
                                            onChange={(e) => setReqId(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                    </div>
                                </div>*/}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-nic" className="block text-sm font-medium leading-6 text-gray-900">
                                            NIC
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="adopter_nic"
                                                id="adopter-nic"
                                                value={adopter_nic}
                                                onChange={(e) => {
                                                    setNIC(e.target.value)
                                                    nicValidator(e.target.value)}}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="adopter_name"
                                                id="adopter-name"
                                                value={adopter_name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-phone" className="block text-sm font-medium leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="adopter_phone"
                                                id="adopter-phone"
                                                value={adopter_phone}
                                                onChange={(e) => {
                                                    setPhoneNumber(e.target.value);
                                                    numberValidator(e.target.value); 
                                                }}
                                               
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="adopter_email"
                                                id="adopter-email"
                                                value={adopter_email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                    emailValidator(e.target.value)}}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-pettype" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Type
                                        </label>
                                            <div className="mt-2">
                                                <select
                                                required
                                                    id="adopter-pettype"
                                                    name="adopter_pettype"
                                                    value={adopter_pettype}
                                                    
                                                    onChange={(e) => setPetType(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    ><option></option>
                                                    <option>Cat</option>
                                                    <option>Dog</option>
                                                </select>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-petname" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="adopter_petname"
                                                id="adopter-petname"
                                                value={adopter_petname}
                                                onChange={(e) => setPetName(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="adopter-message" className="block text-sm font-medium leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                            required
                                                type="text"
                                                name="adopter_message"
                                                id="adopter-message"
                                                value={adopter_message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    {/*<div className="sm:col-span-3">
                                        <label htmlFor="adopter-status" className="block text-sm font-medium leading-6 text-gray-900">
                                            Status
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                type="text"
                                                name="adopter_status"
                                                id="adopter-status"
                                                value={adopter_status}
                                                onChange={(e) => setStatus(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>*/}
                                    </div>
                                </div>
                            </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button>
                            <Link to={'/adoptionManager/Adoption'} className="text-sm font-semibold leading-6 text-gray-900"
        >                   Cancel
                            </Link>
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

