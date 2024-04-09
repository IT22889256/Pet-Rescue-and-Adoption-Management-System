import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateSponsorPet() {

    const [pet_id, setPetId] = useState()
    const [sponsorship_id, setSponsorshipId] = useState()
    const [pet_name, setPetName] = useState()
    const [pet_type, setPettype] = useState()
    const [pet_description, setPetDescription] = useState()
    const [added_date, setAddedDate] = useState()
    const [sponsorship_status, setSponsorshipStatus] = useState()
    const [pet_image, setPetImage] = useState()
    const [health_status, setHealthStatus] = useState()
    const navigate = useNavigate()

   

    const Submit = (e) => {

        const data = {
            pet_id,sponsorship_id,pet_name,pet_type,pet_description,added_date,sponsorship_status,pet_image,health_status  };
        console.log('result')
        axios.post('http://localhost:3000/donationManager/sponseredPet/createSponseredPet',data)
        .then(result => {
            console.log(result)
            navigate('/donationManager/SponsorshipPets')
        })
        .catch(err => console.log(err))
    }

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Pet Profile for Sponserships</div>
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"> 
                                <div className="sm:col-span-3">
                                    <label htmlFor="request-id" className="block text-sm font-medium leading-6 text-gray-900">
                                      Pet Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="request_id"
                                            id="request-id"
                                            value={pet_name}
                                            onChange={(e) => setPetName(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                                </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="task-id" className="block text-sm font-medium leading-6 text-gray-900">
                                            Added Date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="task_id"
                                                id="task-id"
                                                value={added_date}
                                                onChange={(e) => setAddedDate(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet ID
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pet_name"
                                                id="pet-name"
                                                value={pet_id}
                                                onChange={(e) => setPetId(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="pet-gender" className="block text-sm font-medium leading-6 text-gray-900">
                                            Sponsorship Status
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pet_gender"
                                                id="pet-gender"
                                                value={sponsorship_status}
                                                onChange={(e) => setSponsorshipStatus(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="sm:col-span-3">
                                        <label htmlFor="pet-age" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Age
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pet_age"
                                                id="pet-age"
                                                value={pet_age}
                                                onChange={(e) => setPetAge(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div> */}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="pet-appearance" className="block text-sm font-medium leading-6 text-gray-900">
                                            Added Date
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="pet_appearance"
                                                id="pet-appearance"
                                                value={added_date}
                                                onChange={(e) => setAddedDate(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-3">
  <fieldset>
    <legend className="block text-sm font-medium leading-6 text-gray-900">
      Pet Type
    </legend>
    <div className="mt-2">
      <div className="flex items-center space-x-4">
        <input
          type="radio"
          id="cat"
          name="pet_type"
          value="Cat"
          checked={pet_type === 'Cat'}
          onChange={() => setPettype('Cat')}
          className="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="cat" className="text-sm text-gray-900">
          Cat
        </label>

        <input
          type="radio"
          id="dog"
          name="pet_type"
          value="Dog"
          checked={pet_type === 'Dog'}
          onChange={() => setPettype('Dog')}
          className="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="dog" className="text-sm text-gray-900">
          Dog
        </label>
      </div>
    </div>
  </fieldset>
</div>

<div className="sm:col-span-3">
  <fieldset>
    <legend className="block text-sm font-medium leading-6 text-gray-900">
      Health Status
    </legend>
    <div className="mt-2">
      <div className="flex items-center space-x-4">
        <input
          type="radio"
          id="good"
          name="health_status"
          value="Good"
          checked={health_status === 'Good'}
          onChange={() => setHealthStatus('Good')}
          className="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="good" className="text-sm text-gray-900">
          Good
        </label>

        <input
          type="radio"
          id="need-treatment"
          name="health_status"
          value="Need Treatment"
          checked={health_status === 'Need Treatment'}
          onChange={() => setHealthStatus('Need Treatment')}
          className="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="need-treatment" className="text-sm text-gray-900">
          Need Treatment
        </label>

        <input
          type="radio"
          id="treating"
          name="health_status"
          value="Treating"
          checked={health_status === 'Treating'}
          onChange={() => setHealthStatus('Treating')}
          className="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
        <label htmlFor="treating" className="text-sm text-gray-900">
          Treating
        </label>
      </div>
    </div>
  </fieldset>
</div>


                                    <div className="col-span-full">
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Discription
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                type="text"
                                                name="location"
                                                id="locations"
                                                value={pet_description}
                                                onChange={(e) => setPetDescription(e.target.value)}
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
                                    </div>
                                    </div> }
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

