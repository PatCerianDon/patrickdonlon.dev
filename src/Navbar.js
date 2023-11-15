import React from 'react';
import './styles.css'; // Import a separate CSS file for Navbar styles

function Navbar() {
        return (
            <nav>
                <ul className="nav-list">
                    <li>
                    <a href="/">Home</a>
                    <a href="/writeups">Write Ups</a>
                    <a href="/programming">Programming</a>
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    </li>
                </ul>
            </nav>
        );
    }


export default Navbar;