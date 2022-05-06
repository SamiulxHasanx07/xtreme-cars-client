import React from 'react';
import { Container } from 'react-bootstrap';

const SignUpWelcome = () => {
    return (
        <div className='py-5 d-flex align-items-center' style={{minHeight:'90vh'}}>
            <Container>
                <div className='text-center py-5' style={{backgroundColor:'#c3f5c4'}}>
                    <h2>Thanks!! For Creating Account.</h2>
                    <p className='m-0'>Verification Link Sended</p>
                    <p className='m-0'>Please Check Your Email & Verify your Account</p>
                </div>
            </Container>
        </div>
    );
};

export default SignUpWelcome;