import Logo from '../assets/Logo.png'
import Search from '../assets/Search.png'
import Profile from '../assets/Profile.jpg'
import Cart from '../assets/Cart.webp'
import Menu from '../assets/Menu.png'
import { NavLink, Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

  const [visible, setVisible] = useState(false)
  const [profileVisible, setProfileVisible] = useState(false)

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItem } = useContext(ShopContext)

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
    setToken('')
    setCartItem({})
    setProfileVisible(false)
  }

  return (
    <div className="fixed top-2 left-0 right-0 z-50 py-2">

      <Link to="/">
        <img src={Logo} alt="Logo" className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24" />
      </Link>

      <ul className="hidden sm:flex gap-5 md:gap-10 text-sm md:text-lg text-gray-700 absolute left-1/2 transform -translate-x-1/2">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
        </NavLink>
      </ul>

      <div className="absolute top-0 right-2 sm:right-3 p-2 sm:p-4 flex items-center gap-3 sm:gap-6">

        <img
          src={Search}
          onClick={() => setShowSearch(true)}
          alt="Search"
          className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
        />

        <div className="relative">
          <img
            src={Profile}
            className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
            alt="Profile"
            onClick={() => setProfileVisible(!profileVisible)}
          />

          {
            profileVisible &&
            <div className="absolute right-0 pt-2 sm:pt-4 z-50">
              <div className="flex flex-col gap-2 w-32 sm:w-36 py-2 sm:py-3 px-3 sm:px-5 bg-slate-100 text-sm sm:text-base">

                {
                  token ? (
                    <>
                      <p className="cursor-pointer hover:text-black">My Profile</p>

                      <p
                        className="cursor-pointer hover:text-black"
                        onClick={() => { navigate('/orders'); setProfileVisible(false) }}
                      >
                        Order
                      </p>

                      <p
                        className="cursor-pointer hover:text-black"
                        onClick={logout}
                      >
                        Logout
                      </p>
                    </>
                  ) : (
                    <p
                      className="cursor-pointer hover:text-black"
                      onClick={() => { navigate('/login'); setProfileVisible(false) }}
                    >
                      Login
                    </p>
                  )
                }

              </div>
            </div>
          }
        </div>

        <Link to="/cart" className="text-gray-700 hover:text-black relative">
          <img src={Cart} alt="Cart" className="w-8 h-6 sm:w-10 sm:h-8 cursor-pointer" />
          <p className='absolute left-1/2 -translate-x-1/2 top-[-10px] w-4 h-4 text-center bg-black text-white aspect-square rounded-full text-[9px] flex items-center justify-center'>
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={Menu}
          className='w-5 cursor-pointer sm:hidden'
          alt="Menu"
        />

      </div>

      {visible && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-40">
          <div className="flex flex-col items-center pt-20 gap-6 text-lg">
            <NavLink to="/" onClick={() => setVisible(false)}>
              <p className="text-gray-700">Home</p>
            </NavLink>
            <NavLink to="/collection" onClick={() => setVisible(false)}>
              <p className="text-gray-700">Collection</p>
            </NavLink>
            <NavLink to="/about" onClick={() => setVisible(false)}>
              <p className="text-gray-700">About</p>
            </NavLink>
            <NavLink to="/contact" onClick={() => setVisible(false)}>
              <p className="text-gray-700">Contact</p>
            </NavLink>
          </div>
          <img
            onClick={() => setVisible(false)}
            src={Menu}
            className='absolute top-5 right-5 w-5 cursor-pointer'
            alt="Close Menu"
          />
        </div>
      )}

    </div>
  )
}

export default Navbar