import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      </div>
    </div>
  )
}

export default App;