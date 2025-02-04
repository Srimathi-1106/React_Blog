import React from 'react'
import LandingPageImage from '../assets/landing_writing_image.jpg'

const LandingPage = () => {
  return (
    <div className='flex bg-gray-200 items-center'>
      <img className='h-150 w-screen relative' alt='Landing Image' src={LandingPageImage}/>
      <pre className='text-white bold text-6xl absolute'>Lorem ipsum dolor <br>
      </br>sit amet consectetur,<br/> 
        adipisicing elit. Quasi.</pre>
    </div>
  )
}

export default LandingPage
