import React from "react";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ContactLayout from "./Layouts/ContactLayout";

import { Routes, Route } from "react-router-dom";
import Contactinfo from "./Components/Contactinfo";
import { ContactForm } from "./Components/ContactForm";
import NotFound from "./Components/NotFound";
import JobsLayout from "./Layouts/JobsLayout";
import Jobs from "./Pages/Jobs";

const App = () => {
  return (
    <div>
      <NavBar/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path="info" element={<Contactinfo/>}/>
          <Route path="form" element={<ContactForm/>}/>
        </Route>
        <Route path="jobs" element={<JobsLayout/>}>
          <Route index element={<Jobs/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App;