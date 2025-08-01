import React, { useState } from 'react'
import "./home.css"
import Header from '../../components/NavBar/Header/Header'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = () => {
  const [category, setCategory] =useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category = {category}/>
        <AppDownload/>
    </div>
  )
}

export default Home