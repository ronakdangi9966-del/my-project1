import React, { useState, useContext, useEffect } from 'react'
import Title from '../Components/Title'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Orders = () => {

  const { currency,token,backendUrl } = useContext(ShopContext)
  const [orderData, setOrderData] = useState([])
const loadOrderData=async()=>{
  try {
    if(!token){

      return null
    }
    const response=await axios.post(backendUrl+'/api/order/userorders',{},{headers:{token}})
    if(response.data.success){
      let allOrdersItem=[]
      response.data.orders.map((order)=>{
         console.log("FULL RESPONSE 👉", response.data);

        order.items.map((item)=>{
          item['status']=order.status
          item['payment']=order.payment
          item['paymentMethod']=order.paymentMethod
          item['date']=order.date 
          allOrdersItem.push(item)
        })
       
      })
      setOrderData(allOrdersItem.reverse())
    }
    
  } catch (error) {
    
  }
  
}
useEffect(()=>{
  if(token){
    loadOrderData()
  }
},[token])
  return (
    <div className='border-t pt-16 mt-20'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>

        {orderData.length > 0 ? (
          orderData.map((item, index) => (
            
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>

              {/* Left Side */}
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                <div>
                  <p className='sm:text-base font-medium'>{item.name}</p>

                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p>{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>

                  <p className='mt-2'>
  Date: <span className='text-gray-400'>
    {item.date ? new Date(item.date).toDateString() : "No Date"}
  </span>
</p>
                   <p className='mt-2'>
                    payment: <span className='text-gray-400'>{item.paymentMethod}</span>
                  </p>
                </div>
              </div>

              {/* Right Side */}
              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-4'>
               
                  <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                <p className='text-sm md:text-base'> {item.status}</p>
                </div>

                <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>
                  TRACK ORDER
                </button>
              </div>

            </div>

          ))
        ) : (
          <p className='text-gray-500 mt-5'>No Orders Yet</p>
        )}

      </div>

    </div>
  )
}

export default Orders