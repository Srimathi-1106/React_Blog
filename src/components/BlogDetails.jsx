import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const blog = location.state?.blog;

  const [updatedBlog, setUpdatedBlog] = useState(blog);

  useEffect(() => {
    if (blog) {
      // Get blogs from localStorage
      const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

      // Find the specific blog and update views
      const updatedBlogs = blogs.map((b) =>
        b.id === blog.id ? { ...b, views: b.views + 1 } : b
      );

      // Save back to localStorage
      localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

      // Update local state
      setUpdatedBlog((prev) => ({ ...prev, views: prev.views + 1 }));
    }
  }, [blog]);


  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return (
    <div className="mx-auto p-4 border rounded-lg shadow-lg">
      {/* <img className='h-150 w-screen relative' alt='Landing Image' src={blog.image}/> */}
      <h2 className="text-8xl text-center font-bold mb-4">{updatedBlog.title}</h2>
      {blog.imageUrl && <img src={updatedBlog.imageUrl} alt={updatedBlog.title} className="w-full h-150 object-cover mb-4" />}
      <p className="text-lg mx-10 text-xl">{updatedBlog.content}</p>
      <div className="text-gray-500 text-sm mt-4">
        Likes: {updatedBlog.likes} | Views: {updatedBlog.views + 1} {/* Increase view count */}
      </div>

      <button onClick={() => navigate(-1)} className="bg-gray-500 text-white px-4 py-2 rounded mt-4">
        Back
      </button>
    </div>
  );
};

export default BlogDetails;
