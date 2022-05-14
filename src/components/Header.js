import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Fade } from 'react-reveal';
import './Header.scss';

function Header() {
    return (
        <header>
            <Logo title="MADAR" />
            <nav>
                <Fade>
                    <Link to="/">Strona główna</Link>
                    <Link to="/uslugi">Usługi</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </Fade>
            </nav>
        </header>
    );
}

export default Header;
