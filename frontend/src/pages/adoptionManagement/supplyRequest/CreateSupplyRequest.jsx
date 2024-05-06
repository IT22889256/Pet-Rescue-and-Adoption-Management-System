import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase';

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function CreateSupplyRequest() {

    const [request_id, setReqId] = useState()
    const [supply_item, setItem] = useState()
    const [supply_pettype, setPetType] = useState()
    const [supply_brand, setSupplyBrand] = useState()
    const [supply_image, setSupplyImage] = useState()
    const [supply_quantity, setSupplyQuantity] = useState()
    const [supply_message, setSupplyMessage] = useState()
    
    const navigate = useNavigate()

    const [img, setImg] = useState(null);
    const [imgPerc, setImgPerc] = useState();
    const [videoPerc, setVideoPerc] = useState();
    const [validationErrors, setValidationErrors] = useState({}); 


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
            
            setSupplyImage(() => {
                // console.log("45"+JSON.parse(downloadURL));
              return downloadURL
            });
          });
        }
      );
    }

    const validateForm = () => {
        const errors = {}; // Object to store validation errors
    
        if (!request_id) {
          errors.request_id = 'ID is required';
        }
    
        if (!supply_item) {
          errors.supply_item = 'Item is required';
        }
    
        if (!supply_pettype) {
          errors.supply_pettype = 'Pet Type is required';
        }
        
        if (!supply_brand) {
          errors.supply_brand = 'Brand is required';
        }
        if (!supply_image) {
            errors.supply_image = 'Item Image is required';
        }
        if (!supply_quantity) {
            errors.supply_quantity = 'Item Quantity is required';
        }
        if (!supply_message) {
            errors.supply_message = 'Message is required';
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
            request_id,supply_item,supply_pettype,supply_brand,supply_quantity,supply_image,supply_message,
        };
        console.log('result')
        axios.post('http://localhost:3000/adoptionManager/supplyRequest/createSupplyRequest',data)
        .then(result => {
            console.log(result)
            navigate('/adoptionManager/petSupply')
        })
        .catch(err => console.log(err))
    }

        return (

            <div>
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                        <div className='text-xl font-bold '>Create Supply Request</div>
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
                                        <label htmlFor="supply-item" className="block text-sm font-medium leading-6 text-gray-900">
                                            Item Type
                                        </label>
                                            <div className="mt-2">
                                                <select
                                                required
                                                    id="supply-item"
                                                    name="supply_item"
                                                    value={supply_item}
                                                    
                                                    onChange={(e) => setItem(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    ><option></option>
                                                    <option>Food</option>
                                                    <option>Medicine</option>
                                                </select>
                                        </div>
                                    </div>{validationErrors.supply_item && (
                                    <p className="text-red-500 text-xs">{validationErrors.supply_item}</p>
                                    )}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="supply-pettype" className="block text-sm font-medium leading-6 text-gray-900">
                                            Pet Type
                                        </label>
                                            <div className="mt-2">
                                                <select
                                                required
                                                    id="supply-pettype"
                                                    name="supply_pettype"
                                                    value={supply_pettype}
                                                    
                                                    onChange={(e) => setPetType(e.target.value)}
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                    ><option></option>
                                                    <option>Cat</option>
                                                    <option>Dog</option>
                                                </select>
                                        </div>
                                    </div>{validationErrors.supply_pettype && (
                                    <p className="text-red-500 text-xs">{validationErrors.supply_pettype}</p>
                                    )}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="supply-brand" className="block text-sm font-medium leading-6 text-gray-900">
                                            Brand
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="supply_brand"
                                                id="supply-brand"
                                                value={supply_brand}
                                                onChange={(e) => setSupplyBrand(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>{validationErrors.supply_brand && (
                                    <p className="text-red-500 text-xs">{validationErrors.supply_brand}</p>
                                    )}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="supply-quantity" className="block text-sm font-medium leading-6 text-gray-900">
                                            Quantity
                                        </label>
                                        <div className="mt-2">
                                            <input
                                            required
                                                type="text"
                                                name="supply_quantity"
                                                id="supply-quantity"
                                                value={supply_quantity}
                                                onChange={(e) => setSupplyQuantity(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>{validationErrors.supply_quantity && (
                                    <p className="text-red-500 text-xs">{validationErrors.supply_quantity}</p>
                                    )}
                                    <div className="sm:col-span-3">
                                        <label htmlFor="supply-message" className="block text-sm font-medium leading-6 text-gray-900">
                                            Message
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                            required
                                                type="text"
                                                name="supply_message"
                                                id="supply-message"
                                                value={supply_message}
                                                onChange={(e) => setSupplyMessage(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>{validationErrors.supply_message && (
                                    <p className="text-red-500 text-xs">{validationErrors.supply_message}</p>
                                    )}
                                    <div className="col-span-full">
                                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Item Image
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <img src={supply_image} className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file_upload"  type="file" className="sr-only"
                                                    
                                                    onChange={(e) => setImg(() => e.target.files[0])}
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                    </div>
                                    </div>{validationErrors.supply_image && (
                                    <p className="text-red-500 text-xs">{validationErrors.supply_image}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button>
                        <Link to={'/adoptionManager/PetSupply'} className="text-sm font-semibold leading-6 text-gray-900"
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

