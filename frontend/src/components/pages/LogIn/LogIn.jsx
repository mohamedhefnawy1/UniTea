import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { login } from '../../../redux/actions/authAction'
import { useDispatch } from 'react-redux'

const LogIn = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(login({
            email: email,
            password: password,
        }));
        console.log(username, password);
    }

    return(
        <>
            <div className='white-bg'></div>
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
            <div className='container-title-login'> Login </div>
            <div className='form-container'>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={
                            (e)=> {
                                setEmail(e.target.value);
                            }
                        }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={
                            (e)=> {
                                setPassword(e.target.value);
                            }
                        }/>
                    </Form.Group>

                    <Button variant="secondary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}
export default LogIn