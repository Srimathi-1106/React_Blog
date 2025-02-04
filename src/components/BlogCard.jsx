import React from 'react'
import {Heart, Eye} from 'lucide-react'

const BlogCard = ({blog}) => {

  console.log(blog.imageUrl);
  return (
    <div className='flex items-center p-10 shadow-xl m-10 gap-4' >
        <img className='w-70 h-40' src={blog.imageUrl} alt={blog.id}></img>
        <div className='flex flex-col gap-3'>
            <h1 className='text-3xl'>{blog.title}</h1>
            <p>{blog.content.slice(0,100)}...</p>
            <button className='w-fit bg-red-200 rounded-full px-2 p-1'>Read More</button>
            <div className='flex gap-3'>
            <Heart /><span>{blog.likes}</span>
            <Eye /><span>{blog.views}</span>
            
            </div>
        </div>
    </div>
  )
}

export default BlogCard
