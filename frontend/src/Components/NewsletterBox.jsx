import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-xl sm:text-2xl font-medium text-gray-800'> Subscribe now & get 20% off on your first order!</p>
        <p className='text-sm sm:text-base text-gray-400 mt-3'>Sign up for our newsletter to receive updates and special offers.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-2 sm:gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='min-w-0 flex-1 outline-none text-sm sm:text-base'/>
            <button type='submit' className='shrink-0 bg-black text-white text-xs px-4 sm:px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsletterBox
