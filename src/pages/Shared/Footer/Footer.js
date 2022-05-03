import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <footer className='black-bg py-5 text-white'>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <h3 className=''>Xtreme Cars</h3>
                        <p className='me-5'>Xtereme Cars is the best car provider in world wide. Our target leding in car industries</p>
                        <div className='d-flex footer-social'>
                            <div><FontAwesomeIcon icon={faFacebookF}/></div>
                            <div><FontAwesomeIcon icon={faTwitter}/></div>
                            <div><FontAwesomeIcon icon={faLinkedinIn}/></div>
                            <div><FontAwesomeIcon icon={faInstagram}/></div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h3>Suppliers</h3>
                        <div className='footer-suppliers'>
                            <p className='m-0'>
                                <Link to=''>Honda</Link>
                            </p>
                            <p className="m-0">
                                <Link to=''>Toyota</Link>
                            </p>
                            <p className="m-0">
                                <Link to=''>Audi</Link>
                            </p>
                            <p className="m-0">
                                <Link to=''>Ferrari</Link>
                            </p>
                            <p className="m-0">
                                <Link to=''>BMW</Link>
                            </p>
                            <p className="m-0">
                                <Link to=''>Mercedes</Link>
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <h3>Contacts</h3>
                        <p className='m-0'><FontAwesomeIcon className='me-2' icon={faLocationDot}/> h-8, Boalia, Rajshahi, Bangladesh</p>
                        <p className='m-0'><FontAwesomeIcon className='me-2' icon={faPhone}/>  +880 17880-58690</p>
                        <p className='m-0'><FontAwesomeIcon className='me-2' icon={faEnvelope}/> business@xtremecars.com</p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
};

export default Footer;