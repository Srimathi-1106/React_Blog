import React from 'react'
import LandingPage from './LandingPage'
import LandingPageImage from '../assets/landing_writing_image.jpg'
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const Home = () => {
  return (
    <>
      <LandingPage/>
      <div class='px-40'>
        <div className='bg-gray-400 shadow p-10 flex items-center gap-7 m-2'>
            <img src={LandingPageImage} className='h-70 w-180'></img>
            <div className='flex flex-col gap-5'>
              <h1 className='text-2xl'>Title</h1>
              <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi unde id modi! Sint reiciendis dolor quod earum pariatur consequuntur necessitatibus error eligendi veritatis incidunt hic tenetur, quasi ut? Blanditiis voluptatum alias dicta, incidunt debitis sint sapiente consequatur nihil animi?</p>
              <div className='flex gap-3'>
                <Heart />
                <MessageCircle />
                <Share2 />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
