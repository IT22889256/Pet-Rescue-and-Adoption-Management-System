import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const PetInNeed = () => {
  const [pets, setPets] = useState([]);
  const [amount, setAmount] = useState(0);
  const [pet_id, setPetId] = useState();
  const currentUser = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();

  const [cardholderName, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [SponsorshipPets, setSponsorshipPets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/donationManager/sponseredPet")
      .then((res) => {
        setSponsorshipPets(res.data);
      });
  }, []);

  const Submit = (e) => {
    e.preventDefault();

    // Your existing code...
  };

  const generatePaymentSlip = () => {
    // Here you generate the payment slip dynamically
    // You can use libraries like pdf-lib or jsPDF to create PDFs programmatically

    // Create a new jsPDF instance
    const pdf = new jsPDF();

    // Add content to the PDF
    pdf.text("Payment Slip", 10, 10);
    pdf.text("Amount: $" + amount, 10, 20);
    pdf.text("Cardholder Name: " + cardholderName, 10, 30);
    // Add more details as needed

    // Save the PDF as a Blob
    const pdfBlob = pdf.output("blob");

    // Create a temporary anchor element
    const a = document.createElement("a");
    a.href = URL.createObjectURL(pdfBlob);
    a.download = "payment_slip.pdf"; // Set the file name
    document.body.appendChild(a);
    a.click(); // Click the anchor element to trigger download
    document.body.removeChild(a); // Remove the anchor element from the DOM
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row ">
      <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4 ">
        <div className="flex justify-center">
          <h1 className="text-3xl font-semibold text-gray-600 text-center bg-orange-100 rounded-2xl px-20 py-2 max-w-xl">
            Pets in Need
          </h1>
        </div>

        <table className="max-w-xl mx-auto rounded-lg my-7 py-5  bg-white line">
          <tbody>
            {SponsorshipPets.map((SponsorshipPet) => (
              <tr key={SponsorshipPet._id}>
                <td>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                    <div className="flex justify-items-center">
                      <img
                        className=" w-auto h-60"
                        src={SponsorshipPet.pet_image}
                        alt="Pet"
                      />
                    </div>
                    <div className="px-6 py-4 text-left">
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        PetID : {SponsorshipPet.pet_id}
                      </h1>
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        Name : {SponsorshipPet.pet_name}
                      </h1>
                      <h1 className="bg-white  text-gray-800 font-semibold  px-4  ">
                        Description : {SponsorshipPet.pet_description}
                      </h1>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-4 rounded-lg my-7 md:w-1/2 p-4">
        <div className="max-w-xl mx-auto rounded-lg my-7 py-5 px-16 bg-gray-300 bg-opacity-60">
          <div>
            <h1 className=" text-lg text-center my-2 font-bold">
              Choose an Pet
            </h1>
            <div>
              <select
                onChange={(e) => setPetId(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {SponsorshipPets.map((opts, i) => (
                  <option key={i}>{opts.pet_id}</option>
                ))}
              </select>
            </div>
          </div>

          <h1 className=" text-lg text-center my-2 font-bold">
            Choose an amount
          </h1>
          <div>
            <div className="flex gap-16 my-5">
              <div
                onClick={() => setAmount(5)}
                className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer   border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200 "
              >
                5$
              </div>
              <div
                onClick={() => setAmount(10)}
                className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                10$
              </div>
              <div
                onClick={() => setAmount(50)}
                className=" bg-slate-50 py-2 px-10 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                50$
              </div>
            </div>
            <div className="my-5 flex gap-16">
              <div
                onClick={() => setAmount(100)}
                className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                100$
              </div>
              <div
                onClick={() => setAmount(200)}
                className=" bg-slate-50 py-2 px-8 mr-1 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                200$
              </div>
              <div
                onClick={() => setAmount(300)}
                className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                300$
              </div>
            </div>
            <div className="my-5 flex gap-16">
              <div
                onClick={() => setAmount(500)}
                className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                500$
              </div>
              <div
                onClick={() => setAmount(1000)}
                className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer  border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                1000$
              </div>
              <div
                onClick={() => setAmount(2000)}
                className=" bg-slate-50 py-2 px-8 text-center rounded-lg cursor-pointer border-amber-400 border-solid border-2 font-bold hover:bg-orange-200 active:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-200"
              >
                2000$
              </div>
            </div>
          </div>

          <div>
            <input
              type="text"
              className=" bg-gray-200 border-neutral-200 border-b-slate-400 w-full py-2 px-3 my-5 text-center font-bold text-red-700"
              value={amount}
              disabled
            ></input>
          </div>
        </div>
        <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
          <div
            className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
            style={{ maxWidth: "600px" }}
          >
            <div className="w-full pt-1 pb-5">
              <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                <i className="mdi mdi-credit-card-outline text-3xl"></i>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-center font-bold text-xl uppercase">
                Secure payment info
              </h1>
            </div>
            <div className="mb-3 flex -mx-2">
              <div className="px-2">
                <label
                  htmlFor="type1"
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-indigo-500"
                    name="type"
                    id="type1"
                    checked
                  />
                  <img
                    src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                    alt="Credit Card"
                    className="h-8 ml-3"
                  />
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardName">
                Name on card
              </label>
              <input
                id="cardName"
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Smith"
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label
                className="font-bold text-sm mb-2 ml-1"
                htmlFor="cardNumber"
              >
                Card number
              </label>
              <input
                onChange={(e) => setCardNumber(e.target.value)}
                id="cardNumber"
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
                required
              />
            </div>
            <div className="mb-3 -mx-2 flex items-end">
              <div className="px-2 w-1/2">
                <label
                  className="font-bold text-sm mb-2 ml-1"
                  htmlFor="expiryDate"
                >
                  Expiration Month
                </label>
                <input
                  type="text"
                  id="expiryMonth"
                  onChange={(e) => setExpirationMonth(e.target.value)}
                  required
                  className=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                ></input>
              </div>
              <div className="px-2 w-1/2">
                <label
                  className="font-bold text-sm mb-2 ml-1"
                  htmlFor="expiryYear"
                >
                  Expiration year
                </label>
                <input
                  type="text"
                  id="expiryYear"
                  onChange={(e) => setExpirationYear(e.target.value)}
                  className=" w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors "
                ></input>
              </div>
            </div>
            <div className="mb-10">
              <label
                className="font-bold text-sm mb-2 ml-1"
                htmlFor="securityCode"
              >
                Security code
              </label>
              <input
                id="cvv"
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                onChange={(e) => setCvv(e.target.value)}
                type="text"
              />
            </div>
            <div>
              <div
                onClick={Submit}
                className=" text-center block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
              >
                <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInNeed;
