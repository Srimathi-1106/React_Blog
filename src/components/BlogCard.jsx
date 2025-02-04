import React from 'react'
import {Heart, MessageCircle, Share2} from 'lucide-react'

const BlogCard = ({blog}) => {
  return (
    <div className='flex items-center p-10 shadow-xl m-10 gap-4' >
        <img className='w-70 h-40' src={blog.photo_url} alt={blog.id}></img>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>{blog.title}</h1>
            <p>{blog.content_text.slice(0,100)}...</p>
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
