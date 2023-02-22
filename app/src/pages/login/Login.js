import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();


    function handleSignInClick() {
        navigate('/Signin');
    }

    function handleCreateAccountClick() {
        navigate('/Create');
    }
    return (
        <div className="Login">
            <div class="login-container">
                <h1>Login</h1>
                <button type="button" className="sign-in-btn" onClick={handleSignInClick}>
                    Sign In
                </button>
                <button type="button" className="create-account-btn" onClick={handleCreateAccountClick}>
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default Login;