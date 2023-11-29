import React from 'react'
import Bus from "../../assest/azoozCar.webp"

function ContactUs() {
  return (
    <>
     <div className='w-[75%] mx-auto'>
     <div className='bg-black p-10 rounded-tr-2xl rounded-bl-2xl mt-12'>
    <p className='text-yellow-300 font-bold text-4xl mb-10'>TESTIMONIALS</p>
    <p className='text-4xl text-red-600 font-bold'>OUR HAPPY CUSTOMERS</p>
     </div>
     <div className='flex justify-between'>
     <div className='w-1/2 flex justify-center flex-col'>
        <p className=' font-bold text-3xl'>READY TO GET MOVING?</p>
        <p className=' font-bold text-3xl'>GET YOUR FREE QUOTE </p>
        <div>
            <button className="font-bold bg-red-600 hover:bg-black text-white py-3 px-6 mt-12 rounded-tl-md rounded-bl-2xl rounded-r-2xl ">
              Contact Us
            </button>
          </div>
        </div>
        <div className='mb-20'>
            <img src={Bus} width="700px" alt='deliveryBus'/>
        </div>
     </div>
        
     </div>
    </>
  )
}

export default ContactUs
