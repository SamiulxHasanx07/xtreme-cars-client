import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [user, loading] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithgithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    if (githubError) {
        toast.error(githubError.code)
    }
    if (facebookError) {
        toast.error(githubError.code)
    }
    if (googleError) {
        toast.error(githubError.code)
    }

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/home";
    const path = location.pathname;
    const pathValidation = path == '/login';
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex flex-column align-items-center justify-content-around py-4'>
                <button onClick={() => signInWithGoogle()} className='w-100 my-2 btn btn-danger'><FontAwesomeIcon className='me-2' icon={faGoogle} /> {pathValidation?'Login':'Signup'} With Google</button>
                <button onClick={() => signInWithFacebook()} className='w-100 my-2 btn btn-primary'><FontAwesomeIcon className='me-2' icon={faFacebook} /> {pathValidation?'Login':'Signup'} With Facebook</button>
                <button onClick={() => signInWithgithub()} className='w-100 my-2 btn btn-success'><FontAwesomeIcon className='me-2' icon={faGithub} /> {pathValidation?'Login':'Signup'} With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;