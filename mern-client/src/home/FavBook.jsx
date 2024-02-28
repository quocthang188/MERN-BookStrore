import React from 'react'
import favbookcover from "../assets/FavBook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={favbookcover} alt="" className='rounded md:w-2/5' />
        </div>

        <div className='md:w-1/2'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite <span
            className='text-blue-700'>Book Here</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat est dignissimos voluptatibus accusamus quibusdam expedita voluptate ipsum nostrum? Maxime, modi. Aliquam eius velit assumenda quo ut modi accusamus dolorum.
            </p>

            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-5'> 
                  <div>
                        <h3 className='text-3xl font-bold '>800+</h3>
                        <p className='text-base'>Book Listing</p>
                  </div>
                  <div>
                        <h3 className='text-3xl font-bold '>500+</h3>
                        <p className='text-base'>User Registered</p>
                  </div>
                  <div>
                        <h3 className='text-3xl font-bold '>1200+</h3>
                        <p className='text-base'>PDF Downloads</p>
                  </div>
            </div>
            <Link to="/shop"><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded 
            hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook