import React, { useEffect, useState } from 'react'
import { Card } from 'flowbite-react';
import {FaStar} from "react-icons/fa6"
import CurrencyFormat from 'react-currency-format';

const Shop = () => {

  const [books, setBooks] = useState([])
  
  useEffect( ()=> {
    fetch("http://localhost:3000/all-books").then (res => res.json()).then(data => setBooks(data))
  },[])
  return (
    <div className='mt-20 px-4 lg:px24'>
      <h2 className='text-center text-5xl font-bold'>Books</h2>

      <div className='grid gap-5 my-8 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        { 
          books.map(book => <Card
            className="w-auto"
            // imgSrc={book.imageURL}
          >
            <img src={book.imageURL} className='w-60 m-auto' />
            <a href="#">
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.bookTitle}
              </h5>
            </a>
            <div className="mb-2 mt-2 flex items-center">
              <div className='text-amber-500 flex flex-row gap-1 '>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
              </div>   
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-red-600 dark:text-white">
                <CurrencyFormat value={book.price} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'}/>
              </span>
              <a
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </a>
            </div>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop