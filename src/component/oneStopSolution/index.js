import React from 'react';
import { ONE_STOP_SOLUTION } from '../../constant/mapperConstant';

const OneStopCard=()=>{
  return(
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 w-[70%] mx-auto'>
    {ONE_STOP_SOLUTION.map((item, idx) => (
      <div className='flex bg-yellow-400 px-6 rounded-lg rounded-bl-3xl py-2 w-[22rem]' key={idx}>
      <div>
        <img src={item.src} width="60px" alt={item.title} />
        </div>
        <p className='text-xl font-semibold ml-6 text-start'>{item.title}</p>
      </div>
    ))}
  </div>
  )
}


const OneStopSolution = () => {
  return (
    <>
     <div className='mb-4 mt-6'>
     <p className='font-extrabold text-center text-5xl mb-6'>ONE <span className='text-red-600'>STOP SOLUTION</span></p>
     <OneStopCard />
     </div> 
    </>
  );
}

export default OneStopSolution;
