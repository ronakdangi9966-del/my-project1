import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Search1 from '../assets/Search1.png'
import Cross from '../assets/Cross.png'
import { useLocation } from 'react-router-dom';

const Searchbar = () => {

  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();

  return showSearch && location.pathname.includes('collection') ? (
    <div className='border-t border-b bg-gray-50 text-center mt-20'>

      <div className='relative inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='flex-1 outline-none bg-inherit text-sm'
          type="text"
          placeholder='Search'
        />

        <img
          src={Search1}
          alt="Search"
          className='w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2'
        />

      </div>

      <img
        onClick={() => setShowSearch(false)}
        className='inline w-3 cursor-pointer'
        src={Cross}
        alt="Close Search"
      />

    </div>
  ) : null
}

export default Searchbar