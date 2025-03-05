import React from 'react';
import './styles.css'; // Ensure your styles are in the correct place

const Header = () => {
    return (
        <header>
            <h1>Paris Isley</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
