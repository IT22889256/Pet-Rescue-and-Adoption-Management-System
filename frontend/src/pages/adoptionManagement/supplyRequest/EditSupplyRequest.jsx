import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { PhotoIcon} from '@heroicons/react/24/solid'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../../firebase';

// import { PhotoIcon} from '@heroicons/react/24/solid'
export default function EditSupplyRequest() {
    
    const [supply_id, setReqId] = useState()
    const [supply_item, setItem] = useState()
    const [supply_pettype, setPetType] = useState()
    const [supply_brand, setSupplyBrand] = useState()
    const [supply_quantity, setSupplyQuantity] = useState()
    const [supply_message, setSupplyMessage] = useState()
    const [supply_image, setSupplyImage] = useState()
    const [prevImg, setPrev] = useState()

    const navigate = useNavigate()
    const [setLoading] = useState(false);
    const {id} = useParams()
    useEffect((e) => {
        
        axios.get(`http://localhost:3000/adoptionManager/supplyRequest/viewSupplyRequest/${id}`)
        .then((res) => {
            setReqId(res.data.supply_id)
            setItem(res.data.supply_item)
            setPetType(res.data.supply_pettype)
            setSupplyBrand(res.data.supply_brand)
            setSupplyQuantity(res.data.supply_quantity)
            setSupplyMessage(res.data.supply_message)

            console.log(res);
            
        }).catch(err => console.log(err))
    },[])
    const Edit = (e) => {
        const data = {
            supply_id,supply_item,supply_pettype,supply_brand,supply_quantity,supply_message,supply_image,
        };
        
        console.log('result')
        axios.put(`http://localhost:3000/adoptionManager/supplyRequest/editSupplyRequest/${id}`,data)
        .then(result => {
            alert('updated')
            console.log(result)
            navigate('/adoptionManager/petSupply')
        })
        .catch(err => console.log(err))
    }

    const [img, setImg] = useState(null);
    const [imgPerc, setImgPerc] = useState();
    const [videoPerc, setVideoPerc] = useState();

    useEffect((e) => {
        if (img) {
          uploadFile(img, "imgUrl");
        }
      }, [img]);
  
    const uploadFile = (file, fileType) => {
      const storage = getStorage(app);
      const folder = fileType === "supply_image" ? "images/" : "videos/";
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, folder + fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
  
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          fileType === "supply_image"
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
                setPrev(downloadURL)
              return downloadURL
            });
          });
        }
      );
    }

        return (

            <div>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                <div className='text-xl font-bold '>Edit Supply Request</div>
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
                                Supply ID
                            </label>
                            <div className="mt-2">
                                <input
                                required
                                    type="text"
                                    name="request_id"
                                    id="request-id"
                                    value={supply_id}
                                    className="read-only:block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
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
                            </div>
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
                            </div>
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
                            </div>
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
                            </div>
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
                            </div>
                            <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                            Item Image
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                            <div className="text-center">
                                <img src={supply_image} className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file_upload"  type="file" className="sr-only" 
                                            //value={supply_image}
                                            onChange={(e) => setImg(() => e.target.files[0])}
                                        />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                            </div>
                            </div>
                            </div>
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
                    onClick={Edit}
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Submit
                </button>
        </div>
</div>


)}