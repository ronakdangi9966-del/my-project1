import './App.css'
import { Routes, Route } from 'react-router-dom' 
import Payment from './Pages/Payment'
import Placeorder from './Pages/Placeorder'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Home from './Pages/Home'
import About from './Pages/About'
import Collection from './Pages/Collection'
import Orders from './Pages/Orders'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Searchbar from './Components/Searchbar'
 import { ToastContainer, toast } from 'react-toastify';
import Login from './Pages/Login'
import Verify from './Pages/verify.jsx'
  


function App() {
  

  return (
    <>
    
      <div className="app-shell">
        <ToastContainer></ToastContainer>
        <Navbar/>
        <Searchbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/collection' element={<Collection/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/placeorder' element={<Placeorder/>}/>
          <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/verify' element={<Verify></Verify>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
    </>
  )
}

export default App
