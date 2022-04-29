import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Xtreme Cars</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="">Home</Nav.Link>
                        <Nav.Link href="">Login</Nav.Link>
                        <Nav.Link href="">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;