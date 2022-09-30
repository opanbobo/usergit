import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
    return (
        <nav className='navbar'>
            <i className={icon}></i>
            <h1>
            <Link to='/'>{title}</Link>
            </h1>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Tech Test Tofan',
    icon: 'fab fa-github-square fa-4x'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;
