import './App.css'
import BlogsList from './components/BlogsList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blogs' element={<BlogsList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
