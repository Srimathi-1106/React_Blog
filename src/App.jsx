import './App.css'
import BlogsList from './components/BlogsList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import AddBlog from './components/AddBlog'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<BlogsList/>}/>
          <Route path='/addblog' element={<AddBlog/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
