import React from "react";
import {Link} from "react-router-dom";

function Forgot() {
    return (
        <div className="form-container">
            <h1>Recover</h1>
            <form>
                <div className="form-input">
                    <input type="text" name="email" placeholder="Email" required />
                </div>
                <button type="submit" className="login-btn">
                    Recover
                </button>
                <p className="text">
                    Don't have an account? <Link to={'/Create'}>Create an Account</Link>
                </p>
            </form>
        </div>
    );
}

export default Forgot;
