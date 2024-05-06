import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewGallery() {
  const [gallery, setGallery] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/userAffairsManager/gallery/getImage/${id}`)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-blue-100">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900 text-center">
            Pet Details
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="mt-3 flex text-xs justify-center">
              <img
                className="object-cover h-60 w-60 m-5 rounded-full"
                src={gallery.pet_image}
                alt="profile_Image"
              />
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Pet ID</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {gallery.imageId}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Pet Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {gallery.pet_name}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {gallery.about}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">
                Uploaded Date
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                {formatDate(gallery.createdAt)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
