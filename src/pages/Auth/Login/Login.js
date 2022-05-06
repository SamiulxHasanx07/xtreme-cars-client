import React, { useEffect, useState } from 'react';
import { Container, Form, FormText } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { faCircleExclamation, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';

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

    const handleLoginForm = async (e) => {
        e.preventDefault();
        const { email, password } = formInfo;
        if (email.length > 1 && password.length > 1) {
            await signInWithEmailAndPassword(email, password)
            await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data.accessToken)
                    localStorage.setItem('accessToken', data.accessToken)
                })
            // console.log(user);

        }
    }


    const [showPass, setShowPass] = useState(false);
    const handleShow = () => {
        setShowPass(!showPass)
    }
    return (
        <div className=''>
            <Container>
                <div className='form-container my-5 mx-auto px-4 py-5'>
                    <h2 className='text-center'>Please Login</h2>
                    <Form onSubmit={handleLoginForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onChange={handleEmail} name='email' type="email" placeholder="Enter email" />
                            <FormText className={formError?.email == '' ? 'd-none' : 'd-block'}>
                                {
                                    formError.email ? (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Invalid Email</span>) : ''
                                }
                            </FormText>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <div style={{ position: 'relative' }}>
                                <Form.Control onChange={handlePassword} name='password' type={showPass ? 'text' : 'password'} placeholder="Password" />
                                <span onClick={handleShow} className='btn' style={{ position: 'absolute', top: '0', right: '0' }}><FontAwesomeIcon icon={faEyeSlash} /></span>
                            </div>
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
                    <SocialLogin></SocialLogin>
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