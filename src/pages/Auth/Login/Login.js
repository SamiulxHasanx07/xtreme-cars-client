import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

   

    const handleLoginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInWithEmailAndPassword(email, password)
        console.log(user);
        
        
    }
    return (
        <div className=''>
            <Container>
                <div className='form-container mt-5 w-50 mx-auto px-4 py-5'>
                    <h2 className='text-center'>Please Login</h2>
                    <h2>username: {user?.user.email}</h2>
                    <Form onSubmit={handleLoginForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>
                        <p>Dont Have account? <Link to='/register'>Register</Link></p>
                        <p>Forgot Password? <Link to='/resetpass'>Reset</Link></p>
                        <input type="submit" value="Login" className='btn btn-primary w-100 py-2' />
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Login;