import React from 'react'
import { OUR_SERIVICES } from '../../constant/mapperConstant'

const OurServiceCard = () =>{
    return(
    <div className='flex justify-between flex-wrap w-[70%] mx-auto items-center mt-16'>
        {OUR_SERIVICES.map((item,idx) => (
            <div className='mx-auto'>
                <img src={item.src} width="300px" />
            </div>
        ))}
    </div>
    )
}


function OurService() {
  return (
    <div className='mt-16'>
      <p className='text-5xl font-extrabold text-center'>OUR <span className='text-red-600'>SERVICES</span></p>
      <OurServiceCard/>
    </div>
  )
}

export default OurService
