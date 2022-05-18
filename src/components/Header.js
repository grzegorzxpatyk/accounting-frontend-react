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
                <input type="checkbox" id="toggler" />
                <label htmlFor="toggler">MENU</label>
                <ul>
                    <Fade>
                        <li>
                            <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                            <Link to="/uslugi">Usługi</Link>
                        </li>
                        <li>
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                    </Fade>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
