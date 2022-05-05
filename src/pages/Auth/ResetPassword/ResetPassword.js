import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Container, Form, FormText } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const ResetPassword = () => {

    const [formEmail, setFormEmail] = useState('')
    const [formError, setFormError] = useState('')

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const handleEmail = (e) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validate = regex.test(e.target.value)

        if (validate) {
            setFormEmail(e.target.value)
            setFormError(false)
        } else {
            setFormEmail('')
            setFormError(true)
        }
        if (e.target.value == '') {
            setFormError('')
        }
    }

    const handleResetForm = (e) => {
        e.preventDefault();
        if (formEmail.length > 1) {
            sendPasswordResetEmail(formEmail)

            if (error) {
                toast.error(error.code);
            } else{
                toast.success('Password Reset Code Sended');
            }
        }
    }
    return (
        <div className=''>
            <Container>
                <div className='form-container my-5 w-50 mx-auto px-4 py-5'>
                    <h2 className='text-center'>Reset Password</h2>
                    <Form onSubmit={handleResetForm}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required onChange={handleEmail} name='email' type="email" placeholder="Enter email" />
                            <FormText>
                                {
                                    formError ? (<span className='text-danger mt-2'><FontAwesomeIcon icon={faCircleExclamation} /> Invalid Email</span>) : ''
                                }
                            </FormText>
                        </Form.Group>

                        <input type="submit" value="Reset Password" className='btn btn-primary w-100 py-2' />
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

export default ResetPassword;