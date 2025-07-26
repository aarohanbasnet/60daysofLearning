import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0A1EdYieSByo9yHxlkojqaBL_EnUqQg2OoTjyyG2SZvl4s1AvYx_7LgvvQMkyIGwQpDo&usqp=CAU" alt="router-logo" width="130px"/>
        <ul>
            <Link to = "/"><li>Home</li></Link>
            <Link to = "/products"><li>Products</li></Link>
            <Link to = "/about"><li>About</li></Link>
            <Link to = "/contact"><li>Contact</li></Link>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default NavBar