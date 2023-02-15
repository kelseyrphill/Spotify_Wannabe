import React from 'react';
import './login.css';

const Login = () => {
    return (
        <div className="Login">
            <div class="login-container">
                <h1>Login</h1>
                <button type="button" className="sign-in-btn">Sign In</button>
                <button type="button" className="create-account-btn">Create Account</button>
            </div>
        </div>
    )
}

export default Login;