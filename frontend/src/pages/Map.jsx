import { useRef, useState } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const center = { lat: 6.915432, lng: 79.972936 };

function Map() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  const originRef = useRef();
  const destinationRef = useRef();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  /* global google */

  async function calculateRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destinationRef.current.value = "";
  }

  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <div className="absolute inset-0">
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </div>
      <div className="p-4 rounded-lg m-4 bg-white shadow-lg min-w-[320px] max-w-[640px] z-10">
        <div className="flex justify-between space-x-2">
          <input
            type="text"
            placeholder="Origin"
            ref={originRef}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
          <input
            type="text"
            placeholder="Destination"
            ref={destinationRef}
            className="w-full border border-gray-300 rounded px-2 py-1"
          />
          <div className="space-x-2">
            <button
              className="bg-pink-500 text-white px-4 py-2 rounded"
              type="submit"
              onClick={() => calculateRoute()}
            >
              Calculate Route
            </button>
            <button
              className="bg-gray-300 text-gray-700 px-2 py-2 rounded-full"
              onClick={() => clearRoute()}
            >
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-4 space-x-4">
          <span>Distance: {distance} </span>
          <span>Duration: {duration} </span>
          <button
            className="bg-blue-500 text-white rounded-full p-2"
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          >
            <FaLocationArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Map;
