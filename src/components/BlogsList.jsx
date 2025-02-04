import React, { useEffect, useState } from 'react'

import BlogCard from './BlogCard'

const BlogsList = ({blogs}) => {

  console.log(blogs);

  // const [blogs,setBlogs] = useState([]);

  // async function getBlogs(){
  //   const response =await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts`);
  //   const data = await response.json();
  //   setBlogs(data.blogs);
  //   console.log(data.blogs);
  // }

  // useEffect(()=>{
  //   getBlogs();
  // },[])

  return (
    <div className='flex flex-col grid grid-cols-2 items-center bg-gray-100'>
        {
          blogs && blogs?.length>0 && ( blogs.map((blog)=>(
            <BlogCard blog={blog} key={blog.id}/>
          ))
          
        )
        }
    </div>
  )
}

export default BlogsList
