import express from 'express'
import {placeOrders,placeOrdersStripe,placeOrdersRazorpay,allOrders,userOrders,updateStatus,verifyStripe} from '../controllers/orderController.js' 
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/Auth.js'

const orderRouter=express.Router()
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//payment Features

orderRouter.post('/place',authUser,placeOrders)
orderRouter.post('/stripe',authUser,placeOrdersStripe)
orderRouter.post('/razorpay',authUser,placeOrdersRazorpay)

//User features
orderRouter.post('/userorders',authUser,userOrders)
 
//verify payments
orderRouter.post('/verifyStripe',authUser,verifyStripe)
export default orderRouter




