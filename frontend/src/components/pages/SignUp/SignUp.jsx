import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'

const SignUp = () => {

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        else {
            dispatch(signUp({
                username: username,
                email: email,
                password: password,
            }));
            console.log(username, email, password, confirmPassword);
        }
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
            <div className='container-title-signup'> Sign Up </div>
            <div className='form-container'>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onChange={
                            (e)=> {
                                setUsername(e.target.value);
                            }
                        }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={
                        (e) => {
                            setEmail(e.target.value);
                        }
                    }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  value={password} onChange={
                        (e) => {
                            setPassword(e.target.value);
                        }
                    }/>
                    </Form.Group>

                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={
                        (e) => {
                            setConfirmPassword(e.target.value);
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
export default SignUp