import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='py-3'>
                <Container>
                    <h3 className='header-logo'><Link to='/'>Xtreme Cars</Link></h3>
                    <Nav className="ms-auto">
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        <CustomLink to='/login'>Login</CustomLink>
                        <CustomLink to='/register'>Register</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;