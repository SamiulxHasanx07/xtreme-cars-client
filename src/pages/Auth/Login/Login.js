import React, { useEffect, useState } from 'react';
import { Container, Form, FormText } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [formInfo, setFormInfo] = useState({ email: '', password: '' })
    const [formError, setFormError] = useState({ email: '', password: '' })
    // const [outterError, setOutterError] = useState({ error: '' })


    if (error) {
        console.log(error.code);
    }


    useEffect(() => {
        switch (error?.code) {
            case "auth/user-not-found":
                toast.error('User/Email not found');
                break;
            case "auth/wrong-password":
                toast.error('Wrong Password Try Again');
                break;
            default:

        }
    }, [error])

    const handleEmail = (e) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validate = regex.test(e.target.value)
        if (validate) {
            setFormInfo({ ...formInfo, email: e.target.value })
            setFormError({ ...formError, email: false })
        } else {
            setFormInfo({ ...formInfo, email: '' })
            setFormError({ ...formError, email: true })
        }
        if (e.target.value == '') {
            setFormError({ ...formError, email: '' })
        }
    }
    const handlePassword = (e) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const validate = regex.test(e.target.value)
        if (validate) {
            setFormInfo({ ...formInfo, password: e.target.value })
            setFormError({ ...formError, password: false })
        } else {
            setFormInfo({ ...formInfo, password: '' })
            setFormError({ ...formError, password: true })
        }
        if (e.target.value == '') {
            setFormError({ ...formError, password: '' })
        }
    }

    const handleLoginForm = (e) => {
        e.preventDefault();
        const { email, password } = formInfo;
        if (email.length > 1 && password.length > 1) {
            signInWithEmailAndPassword(email, password)
        }
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
                            <Form.Control onChange={handleEmail} name='email' type="email" placeholder="Enter email" />
                            <FormText className={formError?.email == '' ? 'd-none' : 'd-block'}>
                                {
                                    formError.email ? (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Invalid Email</span>) : ''
                                }
                            </FormText>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePassword} name='password' type="password" placeholder="Password" />
                            <FormText className={formError?.password == '' ? 'd-none' : 'd-block'}>
                                {
                                    formError.password ? (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Hints: Minimum six characters, one uppercase letter, one lowercase letter, one number and special character</span>) : ''
                                }
                            </FormText>
                        </Form.Group>
                        <p>Dont Have account? <Link to='/register'>Register</Link></p>
                        <p>Forgot Password? <Link to='/resetpass'>Reset</Link></p>
                        <input type="submit" value="Login" className='btn btn-primary w-100 py-2' />
                    </Form>
                </div>
            </Container>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Login;