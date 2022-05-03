import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <Navbar bg="dark" variant="dark" className='py-3' sticky="top">
                <Container>
                    <h3 className='header-logo'><Link to='/'>Xtreme Cars</Link></h3>
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink to='/home'>Home</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        {
                            user ? '' : <CustomLink to='/login'>Login</CustomLink>
                        }
                        {
                            user ? '' : <CustomLink to='/register'>Register</CustomLink>
                        }
                        
                        <p className='text-white m-0'>{user ? user.displayName : ''}</p>
                        {
                            user ? <button onClick={() => signOut(auth)} className='btn btn-link text-white text-decoration-none'>Logout <FontAwesomeIcon icon={faRightToBracket} /></button> : ''
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;