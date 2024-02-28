import {Button, Select, Label, TextInput, Textarea } from 'flowbite-react'
import React, { useState } from 'react'
import { HiCloudUpload, HiUpload } from 'react-icons/hi'


const UploadBook = () => {
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
  const handleBookSubmit = (event)=>{
    event.preventDefault()
    const form = event.target

    const bookTitle = form.bookTitle.value
    const authorName = form.authorName.value
    const imageURL = form.imageURL.value
    const category =form.categoryName.value
    const bookDescription = form.bookDescription.value
    const priceAsString = form.price.value
    const price = parseInt(priceAsString, 10)
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, price
    }
    console.log(bookObj)

    //send to database
    fetch("http://localhost:3000/upload-book/",{
      method: "Post",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data => {
      console.log(data)
      alert("Book uploaded successfully!")
      form.reset()
    })
    
    
  }

  return (
    <div className='px-4 my-5'>
      <div className='mb-8 text-3xl font-bold'>Upload a book</div>

      <form onSubmit={handleBookSubmit} className='flex lg:w-[1060px] flex-col flex-wrap gap-4'>
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
                placeholder='Enter book name'
                required
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
                placeholder='Enter author name'
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
                placeholder='Enter Image URL'
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
                placeholder='Enter book description'
                required
                row={4}
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
                placeholder='0'
                min={0}
                required
                type= 'number'
              />
            </div>
        <Button type="submit">
          <HiCloudUpload className='mr-2 h-5 w-5'/>
          Upload book
        </Button>
      </form>
    </div>
  )
}

export default UploadBook