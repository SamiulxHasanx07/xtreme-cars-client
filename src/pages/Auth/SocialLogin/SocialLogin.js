import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import useJWTAuthToken from '../../../hook/useJWTAuthToken';
const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
    const [signInWithgithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (githubError) {
            toast.error(githubError.code)
        }
    }, [githubError])

    useEffect(() => {
        if (facebookError) {
            toast.error(facebookError.code)
        }
    }, [facebookError])
    useEffect(() => {
        if (googleError) {
            toast.error(googleError.code)
        }
    }, [googleError])



    const from = location.state?.from?.pathname || "/home";
    const path = location.pathname;
    const pathValidation = path === '/login';

    // custom accessToken hook
    const accessToken = useJWTAuthToken();
    if (googleUser || facebookUser || githubUser) {
        const email = googleUser?.user?.email;

        // custom accessToken hook
        accessToken(email)
        navigate(from, { replace: true });
        // fetch('http://localhost:5000/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ email })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         // console.log(data.accessToken)
        //         localStorage.setItem('accessToken', data.accessToken)
        //     })

    }

    const signInGoogle = () => {
        signInWithGoogle()
    }
    return (
        <div>
            <div className='d-flex flex-column align-items-center justify-content-around py-4'>
                <button onClick={signInGoogle} className='w-100 my-2 btn btn-danger'><FontAwesomeIcon className='me-2' icon={faGoogle} /> {pathValidation ? 'Login' : 'Signup'} With Google</button>
                <button onClick={() => signInWithFacebook()} className='w-100 my-2 btn btn-primary'><FontAwesomeIcon className='me-2' icon={faFacebook} /> {pathValidation ? 'Login' : 'Signup'} With Facebook</button>
                <button onClick={() => signInWithgithub()} className='w-100 my-2 btn btn-success'><FontAwesomeIcon className='me-2' icon={faGithub} /> {pathValidation ? 'Login' : 'Signup'} With Github</button>
            </div>

        </div>
    );
};

export default SocialLogin;