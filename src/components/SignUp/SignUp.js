import React from 'react';
import { Link } from 'react-router-dom';
import googleImage from '../../images/google.svg'


const SignUp = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Sign Up</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" requird/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" requird/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="confirm-password" requird/>
                    </div>
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