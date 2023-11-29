import React from 'react'
import Bus from "../../assest/azoozCar.webp"

function ContactUs() {
  return (
    <>
     <div className=' sm:p-4 md:w-[75%] mx-auto'>
     <div className='bg-black p-10 rounded-tr-2xl rounded-bl-2xl mt-12'>
    <p className='text-yellow-300 font-bold sm:text-2xl sm:text-center md:text-4xl mb-10'>TESTIMONIALS</p>
    <p className='sm:text-2xl md:text-4xl text-red-600 sm:text-center font-bold'>OUR HAPPY CUSTOMERS</p>
     </div>
     <div className='flex justify-between sm:mt-6'>
     <div className='md:w-1/2 md:flex md:justify-center md:flex-col'>
        <p className=' font-bold sm:text-xl sm:text-center md:text-3xl'>READY TO GET MOVING?<span>GET YOUR FREE QUOTE</span></p>
        <p className=' font-bold sm:text-xl md:text-3xl sm:hidden'>GET YOUR FREE QUOTE</p>
        <div>
        <div className='sm:flex sm:justify-center'>
            <button className="font-bold bg-red-600 hover:bg-black text-white py-3 px-6 sm:mt-6 md:mt-12 rounded-tl-md rounded-bl-2xl rounded-r-2xl ">
              Contact Us
            </button>
          </div>
          </div>
        </div>
        <div className='sm:hidden md:block mb-20'>
            <img src={Bus} width="700px" alt='deliveryBus'/>
        </div>
     </div>
        
     </div>
    </>
  )
}

export default ContactUs
