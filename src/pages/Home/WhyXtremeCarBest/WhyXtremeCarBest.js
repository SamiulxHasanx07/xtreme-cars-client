import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { faPeopleGroup, faScrewdriverWrench, faHeadset} from '@fortawesome/free-solid-svg-icons';

const WhyXtremeCarBest = () => {
    return (
        <div className='py-5 why-best'>
            <Container>
                <h2 className='title'>Why <span className='custom-title'>Xtreme Cars Best</span></h2>
                <div className='all-cards py-5'>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='text-center py-4 border-0'>
                                <div className='reason-icon d-flex justify-content-center mb-3'>
                                    <div><FontAwesomeIcon icon={faPeopleGroup} /></div>
                                </div>
                                <Card.Title>Highly Trained Stuff</Card.Title>
                                <p>Our Team Stuff Highly Trained and Professional.</p>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4}>
                            <Card className='text-center py-4 border-0'>
                                <div className='reason-icon d-flex justify-content-center mb-3'>
                                    <div><FontAwesomeIcon icon={faScrewdriverWrench} /></div>
                                </div>
                                <Card.Title>Premium & Fast Service</Card.Title>
                                <p>Our priority is client satisfaction we are ready to provide best service.</p>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='text-center py-4 border-0'>
                                <div className='reason-icon d-flex justify-content-center mb-3'>
                                    <div><FontAwesomeIcon icon={faHeadset} /></div>
                                </div>
                                <Card.Title>Best Support</Card.Title>
                                <p>We Provide Best Support 24x7 hrs.</p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default WhyXtremeCarBest;