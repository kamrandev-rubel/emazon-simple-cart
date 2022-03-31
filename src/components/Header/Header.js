import React from 'react';
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
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders Review</a>
                    <a href="/inventory">Manage Inventory</a>
                    <a href="/about">About</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;