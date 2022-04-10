import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import googleImage from '../../images/google.svg'

const Login = () => {
    return (
        <div className='form-container'>
            <div className='input-form-container'>
                <h2 className='login-title'>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <input className='login-btn' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-john? <Link className='sign-up' to='/signup'>Create New Account</Link>
                </p>
                <div>
                    <div className='login-form-style'>
                        <div></div>
                        <p>or</p>
                        <div></div>
                    </div>
                    <button className='google-signin-btn'><img src={googleImage} alt="" /> Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;