import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditRequest() {
    
    const [adoption_id, setReqId] = useState()
    const [adopter_nic, setNIC] = useState()
    const [adopter_name, setName] = useState()
    const [adopter_phone, setPhoneNumber] = useState()
    const [adopter_email, setEmail] = useState()
    const [adopter_pettype, setPetType] = useState()
    const [adopter_petname, setPetName] = useState()
    const [adopter_message, setMessage] = useState()
    //const [location, setLocation] = useState()
    //const [pet_image, setPetImage] = useState()
    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()

    const [nameError,setNameError]=useState("");
    const [valid,setValid] = useState(true);

    useEffect((e) => {
        
        axios.get(`http://localhost:3000/adoptionManager/adoptionProfile/viewRequest/${id}`)
        .then((res) => {
            setReqId(res.data.adoption_id)
            setNIC(res.data.adopter_nic)
            setName(res.data.adopter_name)
            setPhoneNumber(res.data.adopter_phone)
            setEmail(res.data.adopter_email)
            setPetType(res.data.adopter_pettype)
            setPetName(res.data.adopter_petname)
            setMessage(res.data.adopter_message)
            //setLocation(res.data.location)
            //setPetImage(res.data.pet_image)

            console.log(res);
            
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            adoption_id,adopter_nic,adopter_name,adopter_phone,adopter_email,adopter_pettype,adopter_petname,adopter_message,
        };
        
        console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/adoptionProfile/editRequest/${id}`,data)
        .then(result => {
            alert('updated')
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
    const nicValidator = (nic) => {
        let regex = /^[0-9]{12}$/;
        if (!regex.test(nic)) {
            setNameError("Invalid NIC number");
            setValid(false);
        } else {
            setNameError("");
            setValid(true);
        }
    }

        return (

            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Adoption Profile</div>
                <div className='text-red-600'>{nameError}</div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                {/* <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                         Profile picture
                    </label>
                <div className="mt-2 flex items-center gap-x-3">
                    <img className="h-20 w-20 text-gray-300" alt='image' />
                </div>
                </div> */}
                        <div className="sm:col-span-3">
                            <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                Adoption ID
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="request_id"
                                    id="request-id"
                                    value={adoption_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
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
                                    Adopter Name
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
                                            
                                            //onChange={(e) => setPetType(e.target.value)}
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
                                        //onChange={(e) => setPetName(e.target.value)}
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
                            
                            {/*
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
                            </div>
                            { <div className="col-span-full">
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
                            </div>*/}
                        </div>
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
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
        </div>
</div>


)}