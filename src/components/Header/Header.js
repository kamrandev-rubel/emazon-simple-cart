import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
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
                </div>
            </nav>
        </div>
    );
};

export default Header;