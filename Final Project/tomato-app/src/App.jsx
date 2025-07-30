import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Order from './Pages/PlacedOrder/Order'
import Footer from './components/Footer/Footer'
const App = () => {
  <Link to="/">Home Page</Link>
  return (
    <>
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Order/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App