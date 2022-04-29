import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='py-5 text-center d-flex align-items-center' style={{ minHeight: '80vh' }}>
            <Container>
                <div>
                    <h2>404 Not Found!</h2>
                    <p>Please Try again later or visit other pages</p>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;