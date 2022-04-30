import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
const SocialLogin = () => {
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
    return (
        <div>
            <div className='d-flex flex-column align-items-center justify-content-around py-4'>
                <button onClick={() => signInWithGoogle()} className='w-50 my-2 btn btn-danger'><FontAwesomeIcon className='me-2' icon={faGoogle} /> Login With Google</button>
                <button onClick={() => signInWithFacebook()} className='w-50 my-2 btn btn-primary'><FontAwesomeIcon className='me-2' icon={faFacebook} /> Login With Facebook</button>
                <button onClick={() => signInWithgithub()} className='w-50 my-2 btn btn-success'><FontAwesomeIcon className='me-2' icon={faGithub} /> Login With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;