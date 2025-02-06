import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Colllection from './pages/Colllection'
import AboutUs from './pages/AboutUs'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Blogs from './pages/Blogs'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Cart from './pages/cart'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Collection' element={<Colllection/>}/>
<Route path='/AboutUs' element={<AboutUs/>}/>

<Route path='/Blogs' element={<Blogs/>}/>

<Route path='/Colllection' element={<Colllection/>}/>
<Route path='/Product/:ProductId' element={<Product/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/PlaceOrder' element={<PlaceOrder/>}/>
<Route path='/Orders' element={<Orders/>}/>



      </Routes>
    </div>
  )
}

export default App