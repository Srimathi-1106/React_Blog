import React from 'react'
import {Heart, MessageCircle, Share2} from 'lucide-react'

const BlogCard = () => {
  return (
    <div className='flex items-center p-10 shadow-xl m-10 gap-4' >
        <img className='w-70 h-40' src='https://images.pexels.com/photos/298246/pexels-photo-298246.jpeg?cs=srgb&dl=nature-field-flowers-298246.jpg&fm=jpg' alt='blog1'></img>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, fuga?</p>
            <button className='w-fit bg-red-200 rounded-full px-2 p-1'>Read More</button>
            <div className='flex gap-3'>
            <Heart />
            <MessageCircle />
            <Share2 />
            </div>
        </div>
    </div>
  )
}

export default BlogCard
