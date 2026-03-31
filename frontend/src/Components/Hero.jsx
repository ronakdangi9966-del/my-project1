import React from 'react'
import Hero1 from '../assets/Hero1.avif'

const Hero = () => {
  

  return (
    <div className='flex sm:flex-row border border-gray-400 right-3.5 mt-10 rounded-lg overflow-hidden'>
      {/* Hero left side  */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
        <div className='text-[#414141]'>
        <div className='flex items-center gap-2'>
        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>

        </div>
        <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'> Latest Arrivals</h1>
        <div className='flex items-center gap-2'>
      <p className='font-semibold text-sm md:text-base'>SHOP Now </p>
       <p className='w-8 md:w-11 h-[1px] bg-[#414141]'> </p> 
        </div>
        </div>

      </div>
      {/* { Hero Right side} */}
      <img className='w-full sm:w-1/2 h-159 object-cover object-top' src={Hero1}  />
    </div>
  )
}

export default Hero
