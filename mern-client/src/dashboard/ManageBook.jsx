import React, { useEffect, useState } from 'react'
import { Table, TableBody } from 'flowbite-react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';

const ManageBook = () => {
  const [allBook, setAllBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setAllBooks(data))
  },[])

  //delete a book
  const handleDelete = (id) =>{
    console.log(id)
    fetch(`http://localhost:3000/delete-book/${id}`, {
      method: 'DELETE',

    }).then(res => res.json()).then(data => {
      alert("Book is deleted!")
      window.location.reload()
    })
  }

  return (
    <div  className='px-4 my-5'>
        <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

        <Table hoverable className='lg:w-[1060px]'>
        <Table.Head>
          <Table.HeadCell>NO.</Table.HeadCell>
          <Table.HeadCell>Book name</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>

        {
          allBook.map((book, index) => <TableBody className='divide-y' key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className='font-medium  text-gray-900 dark:text-white'>
                {index +1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.bookTitle}
              </Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>
                <CurrencyFormat value={book.price} displayType={'text'} thousandSeparator={true} suffix={' VNĐ'}/>
              </Table.Cell>
              <Table.Cell className='flex flex-row items-center justify-around'>
                <Link 
                  to={`/admin/dashboard/edit-book/${book._id}`} 
                  // className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  className="bg-blue-500 px-2 py-1 font-semibold text-white rounded-sm hover:bg-blue-700"
                >
                  <p>Edit</p>
                </Link>
                <button onClick={() => handleDelete(book._id)} className='bg-red-500 px-2 py-1 font-semibold text-white rounded-sm hover:bg-red-700'>Delete</button>
              </Table.Cell>
            </Table.Row>
          </TableBody>)
        }
      </Table>
    </div>
  )
}

export default ManageBook