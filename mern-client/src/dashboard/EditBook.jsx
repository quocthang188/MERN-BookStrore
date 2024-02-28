import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import {Button, Select, Label, TextInput, Textarea } from 'flowbite-react'
import { useState } from 'react'
import { HiCloudUpload, HiUpload } from 'react-icons/hi'


const EditBook = () => {
  const {id} = useParams()
  const {bookTitle, authorName, imageURL, category, bookDescription, price} = useLoaderData()

  const bookCategories=[
    "Fiction",
    "Non-fiction",
    "Programming",
    "Romance",
    "Horor",
    "Business",
    "Self-help",
    "Fantasy",
    "Science",
    "Education"
  ]

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0])

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value)
    setSelectedBookCategory(event.target.value)
  }
  
  //handel book submission
  const handleUpdate = (event)=>{
    event.preventDefault()
    const form = event.target

    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageURL = form.imageURL.value
    const category =form.categoryName.value
    const bookDescription = form.bookDescription.value
    const priceAsString = form.price.value
    const price = parseInt(priceAsString, 10)
    const updatedBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, price
    }
    console.log(updatedBookObj)
    //update book data
    fetch(`http://localhost:3000/update-book/${id}`,{
      method: 'PATCH',
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookObj)
    }).then(res => res.json()).then(data => {
      // console.log(data)
      alert("Book updated successfully!")
    })
  }

  return (
    <div className='px-4 my-5'>
      <div className='mb-8 text-3xl font-bold'>Edit a book</div>

      <form onSubmit={handleUpdate} className='flex lg:w-[1060px] flex-col flex-wrap gap-4'>
          {/* Firts row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label
                  htmlFor='bookTitle'
                  value='Book Title'
                />
              </div>
              <TextInput
                id='bookTitle'
                name='bookTitle'
                required
                defaultValue={bookTitle}
                type='text'
              />
            </div>
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label
                  htmlFor='authorName'
                  value='Author Name'
                />
              </div>
              <TextInput
                id='authorName'
                name='authorName'
                defaultValue={authorName}
                required
                type='text'
              />
            </div>
          </div>
          {/* Second row */}
          <div className='flex gap-8'>
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label
                  htmlFor='imageURL'
                  value='Image URL'
                />
              </div>
              <TextInput
                id='imageURL'
                name='imageURL'
                defaultValue={imageURL}
                required
                type='text'
              />
            </div>
            <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label
                  htmlFor='inputState'
                  value='Category'
                />
              </div>
              
              <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
                  {
                    bookCategories.map((option)=>
                    <option key={option} value={option}>{option}</option>)
                  }
              </Select>

            </div>
          </div>
          
          {/* Description */}
          <div>
              <div className='mb-2 block'>
                <Label
                  htmlFor='bookDescription'
                  value='Book Description'
                />
              </div>
              <Textarea
                id='bookDescription'
                name='bookDescription'
                defaultValue={bookDescription}
                required
                row={6}
              />
          </div>
          {/* Price */}
          <div className='lg:w-1/2'>
              <div className='mb-2 block'>
                <Label
                  htmlFor='price'
                  value='Price'
                />
              </div>
              <TextInput
                id='price'
                name='price'
                defaultValue={price}
                min={0}
                required
                type= 'number'
              />
            </div>
        <Button type="submit">
          <HiCloudUpload className='mr-2 h-5 w-5'/>
          Update
        </Button>
      </form>
    </div>
  )
}

export default EditBook