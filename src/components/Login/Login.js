import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googleImage from '../../images/google.svg'
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth)

    const HandleEmailBlur = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    } 
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='form-container'>
            <div className='input-form-container'>
                <h2 className='login-title'>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={HandleEmailBlur} type="email" name="email" id="email" required />
                        <p style={{ color: 'red' }}>{error?.message}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
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