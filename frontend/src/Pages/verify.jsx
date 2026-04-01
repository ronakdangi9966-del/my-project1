import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {

  const { navigate, token, setCartItem, backendUrl } = useContext(ShopContext)

  const [searchParams] = useSearchParams()

  const success = searchParams.get('success')
  const orderId = searchParams.get('orderId')

  const verifyPayment = async () => {
    try {
      if (!token) return

      const response = await axios.post(
        backendUrl + '/api/order/verifyStripe',
        { success, orderId },
        { headers: { token } }
      )

      if (response.data.success) {
        setCartItem({})
        navigate('/orders')
      } else {
        navigate('/cart')
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // ✅ FIX: token, success, orderId dependency add ki
  useEffect(() => {
    if (token && success && orderId) {
      verifyPayment()
    }
  }, [token, success, orderId])

  return (
    <div>
      Verifying Payment...
    </div>
  )
}

export default Verify