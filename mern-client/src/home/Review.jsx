import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {FaStar} from "react-icons/fa6"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Pagination } from 'swiper/modules';
import { Avatar } from 'flowbite-react';
import proPic1 from '../assets/profile1.jpg'
import proPic2 from '../assets/profile2.jpg'
import proPic3 from '../assets/profile3.jpg'



const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-8 leading-snug'>Our Customers</h2>

        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide className='px-4 py-4 shadow-2xl bg-white rounded-lg border'>
                <div className='flex flex-row justify-between mb-2'>
                    <div>
                        <div className='text-amber-500 flex flex-row gap-1 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>     
                        <h5 className='text-lg font-medium '>Đức Nguyễn</h5>
                        <p className='text-base'>Freelancer</p>
                    </div>
                    <div>
                        <Avatar img={proPic1} status="online" className='size-12 mb-3'/>
                    </div>             
                </div>
                
                <div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda cupiditate quis 
                    placeat atque obcaecati veniam perspiciatis! Adipisci corporis odit amet quod eum earum exercitationem id, ex, 
                    vel non molestiae.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide  className='px-4 py-4 shadow-2xl bg-white rounded-lg border'>
                <div className='flex flex-row justify-between mb-2'>
                    <div>
                        <div className='text-amber-500 flex flex-row gap-1 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>     
                        <h5 className='text-lg font-medium '>Quang Trung</h5>
                        <p className='text-base'>Coder</p>
                    </div>
                    <div>
                        <Avatar img={proPic2} status="away"  className='size-12 mb-3'/>
                    </div>             
                </div>
                
                <div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda cupiditate quis 
                    placeat atque obcaecati veniam perspiciatis! Adipisci corporis odit amet quod eum earum exercitationem id, ex, 
                    vel non molestiae.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide  className='px-4 py-4 shadow-2xl bg-white rounded-lg border'>
                <div className='flex flex-row justify-between mb-2'>
                    <div>
                        <div className='text-amber-500 flex flex-row gap-1 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>     
                        <h5 className='text-lg font-medium '>Lê Thảo</h5>
                        <p className='text-base'>Photographer</p>
                    </div>
                    <div>
                        <Avatar img={proPic3} status="online" className='size-12 mb-3'/>
                    </div>             
                </div>
                
                <div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda cupiditate quis 
                    placeat atque obcaecati veniam perspiciatis! Adipisci corporis odit amet quod eum earum exercitationem id, ex, 
                    vel non molestiae.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide  className='px-4 py-4 shadow-2xl bg-white rounded-lg border'>
                <div className='flex flex-row justify-between mb-2'>
                    <div>
                        <div className='text-amber-500 flex flex-row gap-1 '>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>     
                        <h5 className='text-lg font-medium '>Lê Thảo</h5>
                        <p className='text-base'>Photographer</p>
                    </div>
                    <div>
                        <Avatar img={proPic3} status="online" className='size-12 mb-3'/>
                    </div>             
                </div>
                
                <div>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda cupiditate quis 
                    placeat atque obcaecati veniam perspiciatis! Adipisci corporis odit amet quod eum earum exercitationem id, ex, 
                    vel non molestiae.</p>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Review