import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './Header.scss';

function Header() {
    return (
        <header>
            <Logo title="madar sc" />
            <nav>
                <Link to="/">Strona główna</Link>
                <Link to="/uslugi">Usługi</Link>
                <Link to="/kontakt">Kontakt</Link>
            </nav>
        </header>
    );
}

export default Header;
