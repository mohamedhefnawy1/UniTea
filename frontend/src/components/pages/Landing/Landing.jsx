import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from '../../../assets/UniTea-1.png'


const Landing = () => {

    return(
        <div className='landing'>
            <Navbar bg="primary" variant="light">
                <Container>
                <Navbar.Brand href="/">UniTea</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/logIn">
                        <Button variant="outlined-primary">Login</Button>
                    </Nav.Link>
                    <Nav.Link href="/signUp">
                        <Button variant="secondary">Sign Up</Button>
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            <div>
                <div className='landing-boxes'>
                    <div className='landing-box1'></div>
                    <div className='landing-box2'></div>
                    <div className='landing-box3'></div>
                </div>
                <div className='landing-text'>
                    Stand out and reach other students with UniTEA's student-focused social media app
                </div>
            </div>
        </div>
    )
}
export default Landing