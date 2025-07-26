import React from 'react'
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A1EdYieSByo9yHxlkojqaBL_EnUqQg2OoTjyyG2SZvl4s1AvYx_7LgvvQMkyIGwQpDo&usqp=CAU" alt="router-logo" width="130px"/>
        <ul>
            <NavLink to = "/"><li>Home</li></NavLink>
            <NavLink to = "/products"><li>Products</li></NavLink>
            <NavLink to = "/about"><li>About</li></NavLink>
            <NavLink to = "/contact"><li>Contact</li></NavLink>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar