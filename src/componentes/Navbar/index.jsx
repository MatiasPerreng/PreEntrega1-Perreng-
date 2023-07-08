import React from 'react';
import './styles.css';

const Navbar = (props) => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="logo">Logo</a>
                <ul className="list">
                    {props.children}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;