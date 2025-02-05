import './App.css'
import BlogsList from './components/BlogsList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBlog from './components/AddBlog'
import { useEffect, useState } from 'react'
import BlogDetails from './components/BlogDetails'

function App() {
  const [blogs, setBlogs] = useState(() => {
    const savedBlogs = localStorage.getItem("blogs");
    return savedBlogs ? JSON.parse(savedBlogs) : []; 
  });

  // useEffect(() => {
  //   const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
  //   setBlogs(savedBlogs);
  // },[]);

  // Save blogs to localStorage whenever "blo" changes
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);
  
  const addBlog = (title, content, imageUrl) => {
    console.log(imageUrl,"App");
    const newBlog = {
      id: Date.now(),
      title,
      content,
      imageUrl,
      likes: 0,
      views: 0,
    };
    setBlogs([...blogs, newBlog]);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<BlogsList blogs={blogs} setBlogs={setBlogs}/>}/>
          <Route path='/addblog' element={<AddBlog addBlog={addBlog}/>}/>
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
