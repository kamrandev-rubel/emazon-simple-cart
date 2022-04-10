import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import googleImage from '../../images/google.svg'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = e => {
        setConfirmPassword(e.target.value);
    }
    const handleCreateUser = e => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError("Your two password didn't match")
            return;
        }
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="password" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="confirm-password" required/>
                    </div>
                    <p style={{color:'red'}}>{ error}</p>
                    <input className='login-btn' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account?<Link className='sign-up' to='/login'>Login</Link>
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

export default SignUp;