import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [navActice, setNavActive] = useState(false);
    const changeNavBG = () => {
        if (window.scrollY > 80) {
            setNavActive(true);
        } else { setNavActive(false); }
    }
    window.addEventListener('scroll', changeNavBG);
    return (
        <nav className={navActice ? "navbar navbar-expand-lg navbar-light fixed-top nav-active" : "navbar navbar-expand-lg navbar-light fixed-top"}    >
            <h1 class="navbar-brand text-white" style={{ fontWeight: 'bold' }} >TravGeek</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink className="nav-link mr-5 text-white" to="/home">Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5" to="/about">About</NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink className="nav-link mr-5 " to="">Dental Services</NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5  " to="/admin">Reviews</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5  " to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link mr-5  " to="/contact">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;