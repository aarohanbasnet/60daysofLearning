import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes, Link} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './components/Cart/Cart'
import Order from './Pages/PlacedOrder/Order'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/Login-popup/LoginPopup'
const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/>: <></>}
    <div className='app'>
      <NavBar setShowLogin = {setShowLogin}/>
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