import React from 'react';
import "./header.css"
import logo from "../../images/Logo.svg"

const Header = () => {
    return (
        <nav className='header'>
            <div className='inner-header'>
                <img src={logo} alt="" srcset="" />
                <div className='nav-item'>
                    <a href="/order">Order</a>
                    <a href="/order_review">Order Review</a>
                    <a href="/manage_inventory">Manage Inventory</a>
                    <a href="/login">Login</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;