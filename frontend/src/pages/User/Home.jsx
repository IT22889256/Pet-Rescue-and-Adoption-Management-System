import React, { useEffect, useState } from 'react'
import homeImg from '../../image/homeImg.jpg'
import axios from 'axios'

const Home = () => {


  const [feedbacks, setfeedbacks] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3000/userAffairsManager/feedback').then(res => {
			console.log(res);
			setfeedbacks(res.data)
		})
	},[])


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
  
  
  <div class="grid gap-6 text-center md:grid-cols-3 lg:gap-12">
  {feedbacks.map((feedback) => (
  <div class="mb-12 md:mb-0">
    <div class="mb-6 flex justify-center">
      <img
        src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
        class="w-32 rounded-full shadow-lg dark:shadow-black/30" />
    </div>
    <h5 class="mb-4 text-xl font-semibold">{feedback.email}</h5>
    <h6 class="mb-4 font-semibold text-primary dark:text-primary-400">
     
    </h6>
    <p class="mb-4 text-neutral-600 dark:text-neutral-300">
      <span class="inline-block pe-2 [&>svg]:w-5"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 448 512">
          
          <path
            d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
        </svg>
      </span>
     {feedback.reason}
    </p>
    
  </div>
  ))}
  
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
