"use client"

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbarcomponents from 'react-bootstrap/Navbar';



export const Navbar = () => {
  return (
    <Navbarcomponents expand="sm" className="bg-body-tertiary">
      <Container>
      <h1 className='header'> Headshot Ai</h1>
          <Nav className='nav  d-flex justify-content-end'>
            <Nav.Link href="../page" className='login d-flex justify-content-right'>Login/Signup</Nav.Link>
            <hr style={{backgroundColor:'black'}}/>
         </Nav>
       
      </Container>
    
    </Navbarcomponents>

  )
};
