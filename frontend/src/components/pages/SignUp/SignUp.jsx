import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useDispatch } from 'react-redux'
import Logo from '../../../assets/UniTea-1.png'

const SignUp = () => {

    const [username, setUsername] = React.useState('');
    const [fullName, setFullName] = React.useState('');
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

            fetch('http://localhost:4000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        fullname: fullName,
                        username: username,
                        email: email,
                        password: password,
                        gender: 'Not set',
                        profilePic: "https://cdn.discordapp.com/attachments/1032006385732427801/1048099176434647100/user.png"
                    })
            })
            .then(response => response)
            .then(data => {
                console.log('Success:', data);        
                window.location.href = '/';
                alert("PLEASE CHECK YOUR EMAIL AND CONFIRM YOUR ACCOUNT TO REGISTER")
            })
            .catch((error) => {
                alert('Error:', error);
            });

            console.log(username, email, password, confirmPassword);
        }
    }


    return(
        <>
            <div className='white-bg'></div>
            <Navbar bg="primary" variant="light">
                <Container>
                <Navbar.Brand href="/">
                <img className="logo" src={Logo} alt="" />
                </Navbar.Brand>
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
                    <Form.Group controlId="formBasicFullName">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" value={fullName} onChange={
                            (e)=> {
                                setFullName(e.target.value);
                            }
                        }/>
                    </Form.Group>

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
                    <div>Already have an account?  
                        <a href="/logIn" style={{'marginLeft': '1em'}}>Login here</a>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default SignUp