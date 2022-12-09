import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './Landing.css'


const Landing = () => {

    return(
        <>
            <Navbar bg="primary" variant="light">
                <Container>
                <Navbar.Brand href="#home">UniTea</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#login">
                        <Button variant="outlined-primary">Login</Button>
                    </Nav.Link>
                    <Nav.Link href="#sign-up">
                        <Button variant="secondary">Sign Up</Button>
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <body>
            <div className='landing-text'>
                Stand out and reach other students with UniTEA's student focused social media app
            </div>
            </body>
            
        </>
    )
}
export default Landing