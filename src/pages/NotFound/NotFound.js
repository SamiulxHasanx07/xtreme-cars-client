import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='py-5 text-center d-flex align-items-center' style={{ minHeight: '80vh' }}>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={12} md={12} lg={6}>
                        <img className='w-100' src="https://raw.githubusercontent.com/SamiulxHasanx07/xtreme-cars-images/main/other/not-found.gif" alt="" />
                    </Col>
                    <Col sm={12} md={12} lg={6}>
                        <div>
                            <h2>404 Not Found!</h2>
                            <p>Please Try again later or visit other pages</p>
                            <Link to='/home' className='btn custom-btn'>Go to Home Page</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;