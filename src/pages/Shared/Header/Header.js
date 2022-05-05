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
            <Navbar bg="" variant="dark" className='py-3 black-bg' sticky="top">
                <Container>
                    <h3 className='header-logo'><Link to='/'>Xtreme Cars</Link></h3>
                    <Nav className="ms-auto d-flex align-items-center">
                        <CustomLink to='/home'>Home</CustomLink>
                        {
                            user ? '' : <CustomLink to='/login'>Login</CustomLink>
                        }
                        {
                            user ? '' : <CustomLink to='/register'>Register</CustomLink>
                        }

                        {
                            user ? <CustomLink to='/additem'>Add Item</CustomLink> :'' 
                        }

                        {
                            user ? <CustomLink to='/manageinventories'>Manage Inventories</CustomLink> :'' 
                        }
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        
                        <p className='text-white m-0' title={user?user.displayName:''}>{user ? 'Hi, '+user.displayName.slice(0,3) : ''}..</p>
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