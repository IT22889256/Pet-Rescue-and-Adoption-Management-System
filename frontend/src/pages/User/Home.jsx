import React from "react";
import homeImg from '../../image/homeImg.jpg'

const Home = () => {
  return <>
  
  <div className="flex m-10">
    <div className="basis-2/3 items-stretch">
      <h1 className="text-6xl p-5 ">Get your family a new member.</h1>
      <p className="text-2xl p-5">Open your doors and hearts to pets in need of a home and it will be thankful to you for the rest of their lives.</p>
      <a href="#_" class="drop-shadow-md inline-flex m-5 items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#a3a3a3] rounded-full hover:bg-[#57534e] sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
        Get Started
        <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </a>
      <div className="box-content h-48 w-100 p-4 m-5 bg-gray-300  opacity-60 border-solid border-4 bg-stone-400 shadow-md rounded-md">
        <table className="table-fixed space-x-3 z-50">
          <thead>
            <tr>
              <th>
                count 01
              </th>
              <th>
                count 02
              </th>
              <th>
                count 02
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                01
              </td>
              <td>
                02
              </td>
              <td>
                03
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    
    <div className="basis-1/3">
      <img className="h-30 w-full" src={homeImg} alt="homeIMG" />
    </div>
  </div>
  <div className="flex m-10 ">
    <div className="box-border h-40 w-full">
      <img className="opacity-50 h-screen w-full object-cover" src={homeImg} alt="homeIMG" />
      <div className="flex mt-5 justify-center text-center">
    <div className="text-left leading-3" >
      <p className="text-base">Whether you need in-home pet grooming, pet training, or vet on call, ThePetFam connects pet parents with pet care heroes who’ll treat their pet like family.

We understand your pet is family. And you can trust us to keep your pet happy, healthy, and sweet as ever.

But it’s not just about pet love. ThePetFam is also committed to making pet care safe, easy, and affordable so that everyone can experience the unconditional love of a pet. Whatever you and your furr babies are into, we’re into it too. And we’ve got your back. Anytime. Anywhere.

ThePetFam donates a portion of every service to Pet NGO’s & Rescue shelters through this program. We also provide meals to shelter dogs in India.</p>
    </div>
  </div>
  </div>
  </div>
  <div className="flex m-10 justify-center text-center">
    <div >
      <h1 className="text-5xl p-5 font-black">About the PetFam</h1>
      <p className="text-2xl p-5 font-semibold">Founded in 2019, ThePetFam, is the India’s largest network of 5-star pet care service providers.</p>
    </div>
  </div>
  </>

};

export default Home;
