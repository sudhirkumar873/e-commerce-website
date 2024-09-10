import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Contact from './pages/Contact'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-blue-50'>
    <ToastContainer/>
      <Navbar/>
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/product/:productId' element={<Product />} />
        </Routes>
        <Footer/>
    </div>
  )
}

export default App