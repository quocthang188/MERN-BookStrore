import React from 'react'
import {Link} from 'react-router-dom'
import bookpic from "../assets/book.png"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>Top 10 Books awarded for Developers</h2>
                <Link to="/shop"><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded 
                hover:bg-black transition-all duration-300'>Read now</button></Link>
            </div>

            <div>
              <img src={bookpic} alt="" className='w-60 pr-10' />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner