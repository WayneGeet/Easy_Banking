import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero"
import Ad from "../components/Ad/Ad";
import Latest from "../components/Latest/Latest";
import Bottom from "../components/Bottom/Bottom";
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/> 
        <Ad/>
        <Latest/>
        <Bottom/>
    </div>
  )
}

export default Home