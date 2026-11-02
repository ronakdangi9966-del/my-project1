import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import Star1 from '../assets/Star1.png'
import Star2 from '../assets/Star2.png'
import RelatedProducts from '../Components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency ,addToCart} = useContext(ShopContext);

  const [productsData, setProductsData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = () => {

    if (!products || products.length === 0) return;

    const foundProduct = products.find(
      (item) => item._id === productId
    );

    if (foundProduct) {
      setProductsData(foundProduct);
      setImage(foundProduct.image?.[0] || "")
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products])
    
  return productsData ? (
    <div className='border-t-2 pt-8 sm:pt-10 transition-opacity ease-in duration-500 opacity-100 mt-20'>

      <div className='flex flex-col sm:flex-row gap-8 sm:gap-12'>

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto 
            justify-start sm:justify-normal gap-2 sm:gap-0 sm:w-[18.7%] w-full'>

            {productsData?.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className='w-16 sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
              />
            ))}

          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} alt={productsData.name} className='w-full h-auto' />
          </div>

        </div>

        <div className='flex-1' >

          <h1 className='font-medium text-2xl mt-2'>
            {productsData.name}
          </h1>

          <div className='flex items-center gap-1 mt-2'>
            <img src={Star1} alt="" className='w-3.5' />
            <img src={Star1} alt="" className='w-3.5' />
            <img src={Star1} alt="" className='w-3.5' />
            <img src={Star1} alt="" className='w-3.5' />
            <img src={Star2} alt="" className='w-3.5' />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-2xl sm:text-3xl font-medium'>
            {currency}{productsData.price}
          </p>

          <p className='mt-5 text-gray-500 md:w-4/5'>
            Perfect for all seasons, this clothing item combines comfort, style, and functionality — making it a must-have essential for your wardrobe.
          </p>

          <div className='flex flex-col gap-4 my-8'>
            <p className='font-medium'>Select Size</p>

            <div className='flex flex-wrap gap-2'>
              {productsData?.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item == size ? 'border-orange-500' : ''}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button onClick={()=>addToCart(productsData._id,size)} className='w-full sm:w-auto bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product</p>
            <p>Easy return ans exchange policy within 7 days.</p>
          </div>

        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Discription</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 border px-4 sm:px-6 py-5 sm:py-6 text-sm text-gray-500'>
          <p>This e-commerce website provides a seamless online shopping experience, 
allowing customers to browse, select, and purchase products بسهولة and securely.</p>
          <p>Our online store offers premium quality fashion designed for comfort and style.</p>
        </div>
      </div>

      <RelatedProducts category={productsData.category} subCategory={productsData.subCategory}/>

    </div>
  ) : <div className='opacity-0'></div>
}

export default Product