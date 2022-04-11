import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState,  } from 'react-firebase-hooks/auth';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()



    const handleNameBlur = (e) => {
        setName(e.target.value)
    }
    const handlePhoneBlur = e => {
        setPhone(e.target.value);
    }
    const handleAddressBlur = e => {
        setAddress(e.target.value);
    }
    const handleCreateUser = e => {
        e.preventDefault()
        setError('')
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='login-title'>Shipping Infomation</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" name="phone" id="phone" required placeholder='+01' />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="address" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input style={{marginBottom:'25px'}} className='login-btn' type="submit" value="Add Shipping" />
                </form>
               
            </div>
        </div>
    );
};

export default Shipment;