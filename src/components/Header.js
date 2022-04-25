import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.scss';

function Header() {
    return (
        <header>
            <Logo />
            <nav>
                <Link to="/">Strona główna</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
        </header>
    );
}

export default Header;