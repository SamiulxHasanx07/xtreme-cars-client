import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace/>
    }

    return children;
};

export default RequireAuth;