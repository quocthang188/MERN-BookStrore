import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-200 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40 mr-20'>
            {/* left side */}
            <div className='md:w-1/2 space-y-5 h-full'>
                <h2 className='font-bold text-3xl text-black leading-snug'>
                    BUY AND SELL YOUR BOOK <span className='text-blue-600'>FOR THE BEST PRICE</span>
                </h2>
                <p className='md:w-4/5'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam et nisi sed odit possimus ad fugit, quam molestiae voluptates incidunt saepe vitae autem sit error ut voluptate, commodi rem reprehenderit.
                </p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a book' className='rounded-s-sm outline-none px-2 py-2' />
                    <button className='bg-blue-600 px-6 py-2 text-white hover:bg-black transition-all ease-in duration-300 '>Search</button>
                </div>
            </div>
            {/* right side */}
            <div>
                <BannerCard/>
            </div>
            
        </div>
    </div>
  )
}

export default Banner
