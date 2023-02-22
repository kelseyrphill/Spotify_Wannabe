import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faEnvelope,faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './login.css';

function CreateAccount() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    }

    return (
        <div className="form-container">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-input1">
                    <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} required />
                </div>
                <div className="form-input1">
                    <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                </div>
                <div className="form-input1">
                    <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit" className="login-btn">
                    Create
                </button>
                <p className="text">Already have an account? <Link to="/SignIn"><FontAwesomeIcon icon={faSignInAlt} /> Sign in here!</Link></p>
            </form>
        </div>
    );
}

export default CreateAccount;
