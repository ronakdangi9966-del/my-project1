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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex h-16 max-w-[1440px] items-center justify-between px-3 sm:h-20 sm:px-6 lg:px-8">
        <Link to="/" aria-label="Ronak Store home" className="shrink-0">
          <img src={Logo} alt="Ronak Store" className="h-12 w-12 object-contain sm:h-16 sm:w-16" />
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-sm text-gray-700 sm:flex md:gap-10 md:text-base">
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

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <button
            type="button"
            onClick={() => setShowSearch(true)}
            aria-label="Search products"
            className="flex h-10 w-8 items-center justify-center"
          >
            <img src={Search} alt="" className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="relative">
            <button
              type="button"
              aria-label="Account menu"
              aria-expanded={profileVisible}
              onClick={() => setProfileVisible(!profileVisible)}
              className="flex h-10 w-8 items-center justify-center"
            >
              <img src={Profile} className="h-5 w-5 sm:h-6 sm:w-6" alt="" />
            </button>

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

          <Link to="/cart" aria-label={`Cart, ${getCartCount()} items`} className="relative flex h-10 w-8 items-center justify-center text-gray-700 hover:text-black">
            <img src={Cart} alt="" className="h-6 w-8 sm:h-7 sm:w-9" />
            <span className="absolute bottom-0 right-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[9px] text-white">
              {getCartCount()}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setVisible(true)}
            aria-label="Open navigation menu"
            aria-expanded={visible}
            className="flex h-10 w-8 items-center justify-center sm:hidden"
          >
            <img src={Menu} className="w-5" alt="" />
          </button>
        </div>
      </div>

      {visible && (
        <nav className="fixed inset-0 z-50 bg-white sm:hidden" aria-label="Mobile navigation">
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close navigation menu"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center text-3xl text-gray-700"
          >
            &times;
          </button>
          <div className="flex flex-col items-center gap-7 pt-20 text-lg">
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
        </nav>
      )}
    </header>
  )
}

export default Navbar