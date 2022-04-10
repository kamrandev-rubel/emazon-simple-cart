import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css'


const Header = () => {
    const [user] = useAuthState(auth)
    const signOutHandle = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className="navigation">
                <div>
                    <img src={logo} alt="" />
                </div>
                <div>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders Review</Link>
                    <Link to="/inventory">Manage Inventory</Link>
                    <Link to="/about">About</Link>
                    {
                        user ?
                        <Link onClick={signOutHandle} to='/login' >Sign Out</Link>
                        :
                        <Link to="/login">Login</Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;