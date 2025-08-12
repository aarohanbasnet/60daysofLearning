import React, { useState } from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
import { assets } from '../../assets/food-del-assets/assets/frontend_assets/assets' 
 

const NavBar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <Link to="/"><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu ==="home" ?"active" : ""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu ==="menu" ? "active" : ""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu ==="mobile-app" ? "active" : ""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")} className={menu ==="contact-us" ? "active" : ""}>contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
      <div className="navbar-search-icon">
        <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
        <div className="dot"></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}

export default NavBar