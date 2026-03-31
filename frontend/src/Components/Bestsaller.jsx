import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';
const Bestsaller = () => {
  const{products}=useContext(ShopContext);
  const[bestSeller,setBestSeller]=useState ([])
    useEffect(()=>{
        const bestSellers=products.filter((item)=>item.bestseller);
        setBestSeller(bestSellers.slice(0,5));
    },[products])
  return (
    <div className='my-10'>
      <div className= 'text-center text-3xl py-8'> 
        <Title text1={"Best"} text2={"SELLER"}/>
        <p className='w-3/4 -auto text-xs sm:text-sm md:text-base text-gray-600'>our best selling item you ....dajsvdhavhass.... </p>
      
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        { 
        bestSeller.map((item, index) => (
            <Productitem key={index} id={item._id} name={item.name0} image={item.image} price={item.price}/>
         
          
        ))
    }
      </div>
    </div>
  )
}

export default  Bestsaller
