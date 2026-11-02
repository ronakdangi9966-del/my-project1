import React from 'react'
import Title from '../Components/Title'
import us from '../assets/us.jpg'
import NewsletterBox from '../Components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t mt-20'>
        <Title text1={'ABOUT'} text2={'US'} ></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-8 md:gap-16'>
        <img className='w-full md:max-w-[450px] ' src={us} alt="" />
      <div className=' flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
      <p>We focus on delivering a smooth shopping experience, fast service, and products that our customers love</p>
      <p>Our mission is to provide high-quality clothing that combines modern trends with everyday comfort</p>
      <b className='text-gray-800'>Our Misson</b>
      <p> Our mission is to create stylish, high-quality clothing that combines comfort, affordability, and modern fashion trends. We aim to inspire confidence through fashion by offering designs that suit every lifestyle and personality</p>
      </div>
      </div>
      <div className='text-4xl py-4'>
      <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col '>
        <b>Quality Assurance</b>
        <p className=' text-gray-600'>We are committed to maintaining the highest quality standards in every product we offer. Each piece of clothing is carefully designed and inspected to ensure durability, comfort, and style.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col '>
        <b>Convenience</b>
        <p className=' text-gray-600'>Our shopping experience is designed to be simple, fast, and convenient. From browsing the latest collections to placing an order, everything is made easy so customers can enjoy a smooth and hassle-free shopping journey from anywhere.</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col '>
        <b>Exceptional Customer Service</b>
        <p className=' text-gray-600'>We are dedicated to providing exceptional customer service at every step of your shopping journey. Our team is always ready to assist with questions, orders, and support to ensure a smooth and satisfying experience for every customer.</p>
      </div>
      
      
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
