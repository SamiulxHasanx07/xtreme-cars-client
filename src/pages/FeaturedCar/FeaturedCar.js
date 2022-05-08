import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FeaturedCar = () => {
    return (
        <div className='py-5'>
            <Container>
                <h2 className="title mb-5"><span className='custom-title'>Featured</span> Car</h2>
                <Row className='align-items-center'>
                    <Col xs={12} md={12} lg={6} className="py-4">
                        <div>
                            <h2 style={{fontWeight:'800'}}>Most Deliverd Car Aventador LP 780 4</h2>
                            <p className='text-justify'>All Time Most Deliverd Car from Our Warehouse. The latest version of Aventador is not only powerful, it is the most powerful Aventador ever made. With the highest-performing standard-production naturally aspirated V12 engine in Lamborghini history, it incorporates advanced technological solutions and unparalleled design.</p>
                            <button className='btn custom-btn'>Learn More</button>
                        </div>
                    </Col>
                    <Col xs={12} md={12} lg={6} className="py-4">
                        <img className='w-100' src="https://raw.githubusercontent.com/SamiulxHasanx07/xtreme-cars-images/main/other/featured-car.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturedCar;