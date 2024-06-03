import React from "react";
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { Footer } from './components/Footer'



export default function Homecomponets() {
  return (
    <div>

      <Navbar/> 
      <hr/>
      

              <br/><br/><br/>
      <Hero/>
      <br/><br/>
      <Section/>




      <br/> <br/><br/> <br/><br/>
      <hr/>
      <Footer/>




    
    </div>
  );
}
