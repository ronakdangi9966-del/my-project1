import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../Components/Title';
import Bin from '../assets/Bin.png'
import CartTotal from '../Components/CartTotal';
const Cart = () => {
  const{products,currency,cartItems,updateQuantity,navigate}=useContext(ShopContext)
  const[cartData,setCartdata]=useState([]);
  
  useEffect(()=>{
    if(products.length>0){
    const tempData=[];
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
  
    setCartdata(tempData)
  }
  },[cartItems,products])
  
  return (
    <div className='border-t pt-10 sm:pt-14 mt-20'>
      <div className='text-2xl mb-3'>
      <Title text1={'Your'} text2={'Cart'}></Title>
      </div>
      <div>
        <div>
    {
     cartData.map((item,index)=>{
  const productData = products.find((p)=> p._id === item._id);

  if (!productData) return null;

  return(
    <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[minmax(0,1fr)_3.5rem_1.5rem] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-3 sm:gap-4'>
      <div className='flex min-w-0 items-start gap-3 sm:gap-6'>
        <img className='w-16 sm:w-20' src={productData?.image?.[0]} alt="" />          <div>
              <p className='text-xs sm:text-base font-medium break-words'>
              {productData.name}
              </p>
              <div className='flex items-center gap-5 mt-2'>
                <p>
                  {currency}{productData.price} </p>
                  <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
               
              </div>
            </div>
          </div>
          <input  className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 ' type="number" onChange={(e)=>e.target.value === '' || e.target.value === '0'? null:updateQuantity(item._id,item.size,Number(e.target.value))} min={1} defaultValue={item.quantity}/>
        <img src={Bin} onClick={()=>updateQuantity(item._id,item.size,0)} className='w-5 sm:w-6 cursor-pointer justify-self-center' alt="Remove item" />
        </div>
      )
      })
    }
    </div>
    <div className='flex justify-end my-20'>
      <div className='w-full sm:w-[450px]'>
        <CartTotal></CartTotal>
        <div className='w-full text-end'></div>
      <button onClick={()=>navigate('/placeorder')} className='w-full bg-black text-white text-sm my-8 py-3'>PROCEED TO CHECKOUT</button>
      </div>

    </div>
      </div>
      
    </div>
  )
}

export default Cart
