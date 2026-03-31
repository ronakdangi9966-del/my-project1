import React from 'react'
import Exchange from '../assets/Exchange.webp'
import Support1 from '../assets/Support2.png'
import Support2 from '../assets/Support3.png'
const Ourpolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={Exchange} alt="Exchange Policy" className='w-20 h-20 object-contain mx-auto' />
        <p className='font-semibold'>easy Exchange Policy</p>
        <p className='text-gray-400'>We offer a hassle-free exchange policy for all our products</p>
      </div>
      <div>
        <img src={Support1} alt="Exchange Policy" className='w-20 h-20 object-contain mx-auto' />
        <p className='font-semibold'>7 days return policy</p>
        <p className='text-gray-400'>We offer a hassle-free exchange policy for all our products within 7 days of purchase.</p>
      </div>
      <div>
        <img src={Support2} alt="Exchange Policy" className='w-20 h-20 object-contain mx-auto' />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We offer 24/7 customer support for all our products and services.</p>
      </div>
    </div>
  )
}

export default Ourpolicy
