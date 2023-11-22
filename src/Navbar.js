import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import a separate CSS file for Navbar styles

function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/writeups">Write Ups</Link>
                </li>
                <li>
                    <Link to="/programming">Programming</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar