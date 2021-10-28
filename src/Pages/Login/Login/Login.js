import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const {signInGoogle} = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInGoogle} className="btn btn-danger">Google Sign In</button>
        </div>
    );
};

export default Login;