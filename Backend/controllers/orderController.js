//cash on delivery
import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from 'stripe'
//global variables
const currency= 'inr'
const deliveryCharge=10



const placeOrders=async(req,res)=>{
try {
  const { items, amount, address } = req.body;
const userId = req.userId;   
    const orderData={
        userId,
        address,
        items,
        amount,
        paymentMethod:"COD",
        payment:false,
        date:Date.now(),
        status: "Order placed"
    

    }
    console.log("KEY:", process.env.STRIPE_SECRET_KEY);
    const newOrder=new orderModel(orderData)
  await newOrder.save()
  await userModel.findByIdAndUpdate(userId,{cartData:{}})
  res.json({success:true,message:"Order Placed"})
} catch (error) {
    console.log(error);
    res.json({success:false,message:error.message})
    
}

}

//stripe
const placeOrdersStripe = async (req, res) => {
  console.log("Stripe API HIT 🔥");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  try {
      const userId = req.userId;   
    const { items, amount, address } = req.body;
    const { origin } = req.headers;

    const currency = "inr"; 
    const deliveryCharge = 50; 

    const orderData = {
      userId,
      address,
      items,
      amount,
      paymentMethod: "stripe",
      payment: false,
      date: Date.now(),
      status: "Order placed",
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    // Delivery charge
    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`, 
      line_items,
      mode: "payment",
    });


    res.json({ success: true, url: session.url });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//verify stripe
 const verifyStripe = async (req, res) => {
  try {
    const { orderId, success } = req.body;

    
    if (success !== "true") {
      await orderModel.findByIdAndDelete(orderId);
      return res.json({ success: false, message: "Payment Failed" });
    }

    
    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.json({ success: false, message: "Order not found" });
    }

    order.payment = true;
    order.status = "Order Placed";
    await order.save();

    res.json({ success: true, message: "Payment Verified" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

const placeOrdersRazorpay=async(req,res)=>{
    
}

//all orders data for admin panel
const allOrders=async(req,res)=>{
    try {
        const orders=await orderModel.find({})
        res.json({success:true,orders})
    } catch (error) {
         console.log(error);
    res.json({success:false,message:error.message})
    }
}
//user order data fro frontend
const userOrders = async (req, res) => {
  try {
    const userId = req.userId   // ✅ FIX
    const orders = await orderModel.find({ userId })
    res.json({ success: true, orders })
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message })
  }
}

//update orders status from Admin PAnel 
const updateStatus=async(req,res)=>{
   try {
    const {orderId,status}=req.body
    await orderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true,message:'Status Updated'})
} catch (error) {
   console.log(error);
   
    res.json({success:false,message:error.message})
    
   }

}
export {placeOrders,placeOrdersStripe,placeOrdersRazorpay,allOrders,userOrders,updateStatus,verifyStripe}