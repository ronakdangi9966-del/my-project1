import React from 'react'
import Title from '../Components/Title'
import Contactt from '../assets/Contactt.jpg'
import NewsletterBox from '../Components/NewsletterBox'


const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t mt-20'>
        <Title text1={'CONTACT'} text2={'US'}></Title>

      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={Contactt} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>56 ashok station <br />Shobhagpura,udaipur,rajasthan</p>
          <p className='text-gray-500'>tel:(91)9680104344 <br /> Email:admin@123.com</p>
          <p className='font-semibold text-xl text-gray-600'> Carrers at Forever</p> 
              <p className='text-gray-500'>Learn more about our teams and job opening</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white tracking-all duration-500'>Explore Jobs</button>
        </div>
        </div> 
      <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Contact
