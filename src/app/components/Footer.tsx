"use client"
import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap';
import {FaTwitter, FaGithub} from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav';
import Navbarcomponents from 'react-bootstrap/Navbar';



export const Footer = () => {

  return (
    <footer>
      <Container>
        <Row>
            <Col>
            
            <h1 style={{fontSize: '17px', margin: '1rem'}}> 
            <b>
                    <a href='https://github.com/XTRMDTECHGUY1'>
                    Open Source
                    </a>
                    </b> powered by <b>
                        
                        <a href='https://astria.ai'> 
                        Astria, Supabase,
                        </a>
                        </b> 
                    and <b>
                    <a href='https://vercel.com'>
                    Vercel.
                    </a></b> </h1>
            
            </Col>
            
            <Col>
            
            
           
            <Navbarcomponents expand="sm" className="bg-body-tertiary">
      <Container>
      <h1 className='header'></h1>
          <Nav className='nav  d-flex justify-content-end'>
            <Nav.Link href="#link" className='login'> <FaTwitter style={{fontSize: '30px'}}/>  <FaGithub style={{fontSize: '30px'}}/></Nav.Link>
            <hr style={{backgroundColor:'black'}}/>
         </Nav>
       
      </Container>
    
    </Navbarcomponents>

            </Col>
        </Row>
        <br/><br/>
      </Container>
    </footer>
  )
};

