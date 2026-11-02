import React from 'react'
import Logo from '../assets/Logo.png'


const Footer = () => {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-8 sm:gap-14 my-10 mt-24 sm:mt-40 text-sm'>
        <div>
          <img src={Logo} alt="" className='mb-5 w-32' />
          <p className='w-full md:w-2/3 text-gray-600'>
            At RD Clothing, fashion is more than just clothing — it's a lifestyle. We believe in creating timeless designs that blend comfort
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Phone: +91 9876543210</li>
            <li>Email: info@rdclothing.com</li>
          </ul>
        </div>
      </div>
      <div className='text-center text-gray-500 mt-10'>
        <hr />
        <p className='py-5 text-sm'>© 2024 RD Clothing. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
