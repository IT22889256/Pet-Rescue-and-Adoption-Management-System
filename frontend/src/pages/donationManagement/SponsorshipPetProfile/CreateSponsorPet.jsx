import React, { useState , useEffect} from 'react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import app from '../../../firebase';


// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateSponsorPet() {

    const [pet_id, setPetId] = useState()
    const [sponsorship_id, setSponsorshipId] = useState()
    const [pet_name, setPetName] = useState()
    const [pet_type, setPettype] = useState()
    const [pet_description, setPetDescription] = useState()
    const [added_date, setAddedDate] = useState()
   
    const [pet_image, setPetImage] = useState()
    const [health_status, setHealthStatus] = useState()
    const navigate = useNavigate()

    const [img, setImg] = useState(null);
    const [imgPerc, setImgPerc] = useState();
    const [videoPerc, setVideoPerc] = useState();
    const [validationErrors, setValidationErrors] = useState({}); 
  

    const [Pets, setPets] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/petManager/petProfile').then(res => {
        console.log(res);
        setPets(res.data)
      })
    },[])

    useEffect((e) => {
        if (img) {
          uploadFile(img, "imgUrl");
        }
      }, [img]);
  
    const uploadFile = (file, fileType) => {
      const storage = getStorage(app);
      const folder = fileType === "imgUrl" ? "images/" : "videos/";
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, folder + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          fileType === "imgUrl"
            ? setImgPerc(Math.round(progress))
            : setVideoPerc(Math.round(progress));
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              console.log(error);
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
            default:
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            
            console.log('DownloadURL - ', downloadURL);
            
            setPetImage(() => {
                // console.log("45"+JSON.parse(downloadURL));
              return downloadURL
            });
          });
        }
      );
    }

    const validateForm = () => {
      const errors = {}; // Object to store validation errors
  
      if (!added_date) {
        errors.added_date = 'added date  is required';
      }
      if (!pet_description) {
        errors.pet_description = 'Pet description is required';
      }
      if (!pet_id) {
        errors.pet_id = 'Pet ID is required';
      }
  
      if (!pet_type) {
        errors.pet_type = 'Pet type is required';
      }
  
      if (!health_status) {
        errors.health_status = 'Health status is required';
      }
      
      if (!pet_name) {
        errors.pet_name = 'Pet Name is required';
      }
      if (!img) {
          errors.img = 'Image is required';
        }
  
      // You can add more validation rules here, e.g., email validation for location
  
      setValidationErrors(errors); // Update validation errors state
      return Object.keys(errors).length === 0; // Return true if no errors
    };

    const Submit = (e) => {
      e.preventDefault();
      if (!validateForm()) {
          return; // Don't submit if validation fails
        }

        const data = {
            pet_id,sponsorship_id,pet_name,pet_type,pet_description,added_date,pet_image,health_status  };
        console.log('result')
        axios.post('http://localhost:3000/donationManager/sponseredPet/createSponseredPet',data)
        .then(result => {
          console.log(pet_id);
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
                                        </div>{validationErrors.pet_name && (
            <p className="text-red-500 text-xs">{validationErrors.pet_name}</p>
          )}
                                                </div>
                                                <input
    type="date"
    name="task_id"
    id="task-id"
    value={added_date}
    onChange={(e) => setAddedDate(e.target.value)}
    
    min={getCurrentDate()} // Set the minimum date to the current date
    max={getCurrentDate()} // Set the maximum date to the current date
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
/>{validationErrors.added_date && (
            <p className="text-red-500 text-xs">{validationErrors.added_date}</p>
          )}



                                    
                                    
                                    <div className="sm:col-span-3">
    <label htmlFor="pet-name" className="block text-sm font-medium leading-6 text-gray-900">
        Pet ID
    </label>
    <select 
        id="pet-name"
        value={pet_id}
        onChange={(e) => {
            setPetId(e.target.value);
        }}
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <option value="">Select Pet ID</option>
        {Pets.map((pet) => (
            <option key={pet.pet_id} value={pet.pet_id}>{pet.pet_id}</option>
        ))}
    </select>
    {validationErrors.pet_id && (
            <p className="text-red-500 text-xs">{validationErrors.pet_id}</p>
          )}
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
    </div>{validationErrors.pet_type && (
            <p className="text-red-500 text-xs">{validationErrors.pet_type}</p>
          )}
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
    </div>{validationErrors.health_status && (
            <p className="text-red-500 text-xs">{validationErrors.health_status}</p>
          )}
  </fieldset>
</div>


                                    <div className="col-span-full">
                                        <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Description
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                            required
                                                type="text"
                                                name="location"
                                                id="locations"
                                                value={pet_description}
                                                onChange={(e) => setPetDescription(e.target.value)}
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />{validationErrors.pet_description && (
                                              <p className="text-red-500 text-xs">{validationErrors.pet_description}</p>
                                            )}
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
                                                    //  value={pet_image}
                                                    onChange={(e) => setImg(() => e.target.files[0])}
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
                            <Link
          to={`/DonationManager/SponsorshipPets`}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </Link>
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

function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  // Convert month and day to strings if they are single digits
  month = month < 10 ? '0' + month : month.toString();
  day = day < 10 ? '0' + day : day.toString();

  return `${year}-${month}-${day}`;
}



