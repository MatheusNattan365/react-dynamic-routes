import React from 'react';
import './styles.css'

import { Link } from 'react-router-dom'

// import { Container } from './styles';

export default function About() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link className="navLink" to="/">
                    <li>Home</li>
                </Link>
                <Link className="navLink" to="/about">
                    <li>About</li>
                </Link>
                <Link className="navLink" to="/users">
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    );
}
