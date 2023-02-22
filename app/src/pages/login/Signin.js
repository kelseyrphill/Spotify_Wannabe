import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <div className="form-container">
            <h1>Sign in</h1>
            <form>
                <div className="form-input">
                    <input type="text" name="username" placeholder="Username" required />
                </div>
                <div className="form-input">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit" className="login-btn">Log in</button>
                <p className="text">Dont have an account? <Link to="/Create">Create an Account</Link> | <Link to="/Forgot">Forgot Password?</Link></p>
            </form>
        </div>
    );
}

export default SignIn;
