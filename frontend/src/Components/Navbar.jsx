
import Logo from '../assets/Logo.png'
import Search from '../assets/Search.png'
import Profile from '../assets/Profile.jpg'
import Cart from '../assets/Cart.webp'
import Menu from '../assets/Menu.png'
import { NavLink,Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
const Navbar = () => {
    const[visible,setVisible]=useState(false)
    const [profileVisible, setProfileVisible] = useState(false)
    const {setShowSearch,getCartCount,navigate,token,setToken,setCartItem}=useContext(ShopContext);
    const logout=()=>{
      localStorage.removeItem('token')
      navigate('/login')
      setToken('')
      setCartItem({})
      setProfileVisible(false)
    }
    return (
    <div className="fixed top-2 left-0 right-0 z-50 py-2">
     <Link to="/"> <img src={Logo} alt="Logo" className="absolute top-0 left-0 w-25 h-25" /></Link>
      <ul className="hidden sm:flex gap-10 text-lg text-gray-700 absolute left-1/2 transform -translate-x-1/2">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-900 hidden" />
        </NavLink>
      </ul>
      <div className="absolute top-0 right-3 p-4 flex items-center gap-6">
        <img src={Search}  onClick={()=>setShowSearch(true)} alt="Search" className="w-6 h-6 cursor-pointer" />
        <div className="relative">
          <img src={Profile} onClick={() => setProfileVisible(!profileVisible)} className="w-6 h-6 cursor-pointer" alt="Profile" />
          {
            token && profileVisible &&
            <div className="absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black" onClick={()=>{navigate('/orders'); setProfileVisible(false)}}>Order</p>
              <p className="cursor-pointer hover:text-black" onClick={logout}>Logout</p>
            </div>
          </div>
          }
        </div>
        <Link to="/cart" className="text-gray-700 hover:text-black relative">
          <img src={Cart} alt="Cart" className="w-10 h-8 cursor-pointer" />
          <p className='absolute left-1/2 -translate-x-1/2 top-[-24] w-4 h-4 text-center bg-black text-white aspect-square rounded-full text-[9px] flex items-center justify-center'>{getCartCount()}</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={Menu} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
      </div>
      {/* Sidebar menu for smaller screen */}
    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0' }`}>

    </div>
    </div>
  )
  
}

export default Navbar
