import React, { useState } from 'react';
import { Container, Form, FormText } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

import { faCircleExclamation, faCircleCheck, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Register = () => {
    const [registerUser, setRegisterUser] = useState({ email: '', password: '', confirmPass: '' })
    const [formError, setFormError] = useState({ email: '', password: '', confirmPass: '' })
    const [disabled, setDisabled] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;

        console.log(name, email, password, confirmPass);
        createUserWithEmailAndPassword(email, password)
        console.log('user');
    }

    const handleEmail = e => {
        console.log(e.target.value);
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validate = regex.test(e.target.value)
        console.log(validate);
        if (!validate) {
            setFormError({ ...formError, email: true })
        } else {
            setFormError({ ...formError, email: false })
        }
        if (e.target.value == '') {
            setFormError({ ...formError, email: '' })
        }
    }
    const handlePass = e => {
        console.log(e.target.value);
        const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        const validate = passRegex.test(e.target.value)
        console.log(validate);
        if (!validate) {
            setFormError({ ...formError, password: true })
            setDisabled(false)
        } else {
            setFormError({ ...formError, password: false })
            setDisabled(true)
            setRegisterUser({ ...registerUser, password: e.target.value })
        }
        if (e.target.value == '') {
            setFormError({ ...formError, password: '' })
            setDisabled(false)
        }
    }

    const handleConfirmPass = e => {
        const validate = registerUser.password == e.target.value;

        if (validate) {
            setFormError({ ...formError, confirmPass: true })

        } else {

            setFormError({ ...formError, confirmPass: false })
        }

        if (e.target.value === '') {
            setFormError({ ...formError, confirmPass: '' })
        }
    }

    const handleShow = () => {
        setShowPass(!showPass)
    }
    return (
        <div>
            <Container>
                <div className='form-container mt-5 w-50 mx-auto px-4 py-5'>
                    <h2 className='text-center'>Please Login</h2>
                    <Form onSubmit={handleForm}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter Name" />
                            <Form.Text>
                                {
                                    // email<span className='text-danger'>{formError.email}</span>
                                }

                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmail} name='email' type="email" placeholder="Enter email" />
                            <Form.Text className={`${formError.email === '' ? 'd-none' : 'd-block'}`}>
                                {
                                    formError.email ? (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Invalid Email</span>) : (<span className='text-success mt-2'><FontAwesomeIcon icon={faCircleCheck} /> Great! Valid Email</span>)
                                }
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <div style={{ position: 'relative' }}>
                                <Form.Control onChange={handlePass} name='password' type={showPass ? 'text' : 'password'} placeholder="Password" />
                                <span onClick={handleShow} className='btn' style={{ position: 'absolute', top: '0', right: '0' }}><FontAwesomeIcon icon={faEyeSlash} /></span>
                            </div>
                            <Form.Text className={`${formError.password === '' ? 'd-none' : 'd-block'}`}>
                                {
                                    formError.password ? (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Minimum six characters, one uppercase letter, one lowercase letter, one number and special character</span>) : (<span className='text-success mt-2'><FontAwesomeIcon icon={faCircleCheck} /> Great! Strong Password</span>)
                                }
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type={showPass ? 'text' : 'password'} disabled={!disabled} onChange={handleConfirmPass} name='confirmPass' placeholder="Confirm Password" />
                            <FormText className={`${formError.confirmPass === '' ? 'd-none' : 'd-block'}`}>
                                {
                                    formError.confirmPass ? (<span className='text-success mt-2'><FontAwesomeIcon icon={faCircleCheck} /> Great! Confirm Password Matched</span>) : (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Confirm Password Not Match</span>)
                                }
                            </FormText>
                        </Form.Group>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                        <input type="submit" value="Register" className='btn btn-primary w-100 py-2' />
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;