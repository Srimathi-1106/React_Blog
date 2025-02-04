import React from 'react'
import LandingPage from './LandingPage'
import LandingPageImage from '../assets/landing_writing_image.jpg'

const Home = () => {
  return (
    <>
      <LandingPage/>
      <div class='px-40'>
        <div className='bg-gray-400 shadow p-20 flex items-center gap-7'>
            <img src={LandingPageImage} className='h-70 w-180'></img>
            <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur animi unde id modi! Sint reiciendis dolor quod earum pariatur consequuntur necessitatibus error eligendi veritatis incidunt hic tenetur, quasi ut? Blanditiis voluptatum alias dicta, incidunt debitis sint sapiente consequatur nihil animi?</p>
        </div>

      </div>
    </>
  )
}

export default Home
