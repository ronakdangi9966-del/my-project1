import React, { useContext, useEffect, useState } from 'react'
import Dropdown from '../assets/dropdown.png'
import Title from '../Components/Title';
import Productitem from '../Components/Productitem';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {

  const { products ,search,showSearch} = useContext(ShopContext)

  const [showFilter, setShowFilter] = useState(false);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [subCategoryFilter, setSubCategoryFilter] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategoryFilter = (e) => {
    if (categoryFilter.includes(e.target.value)) {
      setCategoryFilter(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategoryFilter(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategoryFilter = (e) => {
    if (subCategoryFilter.includes(e.target.value)) {
      setSubCategoryFilter(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategoryFilter(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
  let productsCopy = products.slice();
  console.log(products);

  if (search) {
    productsCopy = productsCopy.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (categoryFilter.length > 0) {
    productsCopy = productsCopy.filter(item =>
      categoryFilter.includes(item.category)
    )
  }

  if (subCategoryFilter.length > 0) {
    productsCopy = productsCopy.filter(item =>
      subCategoryFilter.includes(item.subCategory)
    )
  }

  setFilteredProducts(productsCopy)
}
  const sortProduct = () => {
    let fpCopy = FilteredProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilteredProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'High-low':
        setFilteredProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        break;
    }
  }

  useEffect(() => {
    setFilteredProducts(products);
  }, [products])

  useEffect(() => {
    applyFilter();
  }, [categoryFilter, subCategoryFilter,search,showSearch,products])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mt-20 border-t'>
      
      {/* Filter option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          Filters
          <img src={Dropdown} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Men' onChange={toggleCategoryFilter} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Women' onChange={toggleCategoryFilter} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Kids' onChange={toggleCategoryFilter} /> Kids
            </p>
          </div>
        </div>

        {/* SubCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Topwear' onChange={toggleSubCategoryFilter} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Bottomwear' onChange={toggleSubCategoryFilter} /> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value='Winterwear' onChange={toggleSubCategoryFilter} /> Winterwear
            </p>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="All" text2="Collection" />

          <select
            className='border-2 border-gray-300 text-sm px-2'
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="High-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {FilteredProducts.map((item, index) => (
            <Productitem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Collection