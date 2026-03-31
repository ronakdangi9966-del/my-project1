import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import Bestsaller from '../Components/Bestsaller'
import Ourpolicy from '../Components/Ourpolicy'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
  return (
    
    <div>
      <Hero/>
      <LatestCollection/>
    <Bestsaller/>
    <Ourpolicy/>
    <NewsletterBox></NewsletterBox>
    </div>
  )
}

export default Home
