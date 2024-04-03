import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateEmployee() {

    const [eid, setEid] = useState();
    const [nic, setNic] = useState();
    const [firstName, setFirstName] = useState();
    const [middleName, setMiddleName] = useState();
    const [lastName, setLastName] = useState();
    const [jobRole, setJobRole] = useState();
    const [recruitedDate, setRecruitedDate] = useState();
    const [birthday, setBirthday] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [postalCode, setPostalCode] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [maritalStatus, setMaritalStatus] = useState();
    const [employeeimage, setEmployeeImage] = useState();


    
    
    const navigate = useNavigate()

    const Submit = (e) => {

        const data = {
            eid,
            nic,
            firstName,
            middleName,
            lastName,
            jobRole,
            recruitedDate,
            birthday,
            address,
            city,
            postalCode,
            phoneNumber,
            email,
            maritalStatus,
            employeeimage,
        };

        console.log('result')
        axios.post('http://localhost:3000/EmployeeManager/employees',data)
        .then(result => {
            console.log(result)
            navigate('/EmployeeManager/ManageEmployees')
        })
        .catch(err => console.log(err))
    }
        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Employee Profile</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                               
                                <div className="sm:col-span-3">
                                    <label htmlFor="eid" className="block text-sm font-medium leading-6 text-gray-900">
                                        Employee ID
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="eid"
                                            id="eid"
                                            value={eid}
                                            onChange={(e) => setEid(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                                </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="nic" className="block text-sm font-medium leading-6 text-gray-900">
                                            NIC Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="nic"
                                                id="nic"
                                                value={nic}
                                                onChange={(e) => setNic(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                            First Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="middleName" className="block text-sm font-medium leading-6 text-gray-900">
                                        MiddleName
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="middleName"
                                                id="middleName"
                                                value={middleName}
                                                onChange={(e) => setMiddleName(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                        LastName
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                   
                                     <div className="sm:col-span-3">
                <label htmlFor="jobRole" className="block text-sm font-medium leading-6 text-gray-900">
                jobRole
                </label>
                <div className="mt-2">
                    <select
                        name="jobRole"
                        id="jobRole"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option></option>
                        <option>doctor</option>
                        <option>cleaner</option>
                        <option>manager</option>
                        <option>helper</option>
                        <option>supportive staff member</option>

                     
                    </select>
                </div>
            </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="recruitedDate" className="block text-sm font-medium leading-6 text-gray-900">
                                        RecruitedDate
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                name="recruitedDate"
                                                id="recruitedDate"
                                                value={recruitedDate}
                                                onChange={(e) => setRecruitedDate(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                 
                                    <div className="sm:col-span-3">
                                        <label htmlFor="birthday" className="block text-sm font-medium leading-6 text-gray-900">
                                        Birth date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="date"
                                                name="birthday"
                                                id="birthday"
                                                value={birthday}
                                                onChange={(e) => setBirthday(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="address"
                                                id="address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    { <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Employee Image
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
                                            value={employeeimage}
                                            onChange={(e) => setEmployeeImage(e.target.value)}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                            </div> }
                                    </div>
                                </div>
                            </div>

                            <div>
            <div className="sm:col-span-3">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    City
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="city"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">
                    Postal Code
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                </label>
                <div className="mt-2">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div className="sm:col-span-3">
                <label htmlFor="maritalStatus" className="block text-sm font-medium leading-6 text-gray-900">
                    Marital Status
                </label>
                <div className="mt-2">
                    <select
                        name="maritalStatus"
                        id="maritalStatus"
                        value={maritalStatus}
                        onChange={(e) => setMaritalStatus(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                        <option></option>
                        <option>single</option>
                        <option>married</option>
                        <option>divorced</option>
                        <option>widowed</option>

                     
                    </select>
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

