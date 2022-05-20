import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Fade } from 'react-reveal';
import './Header.scss';
import { useState } from 'react';

function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    function handleNavLinkClick() {
        if (isMenuVisible) {
            setMenuVisible(false);
        } else {
            setMenuVisible(true);
        }
    }

    return (
        <header>
            <Logo title="MADAR" />
            <nav>
                <input
                    type="checkbox"
                    id="toggler"
                    checked={isMenuVisible}
                    onClick={handleNavLinkClick}
                />
                <label htmlFor="toggler">MENU</label>
                <ul>
                    <Fade>
                        <li>
                            <Link to="/" onClick={handleNavLinkClick}>
                                Strona główna
                            </Link>
                        </li>
                        <li>
                            <Link to="/uslugi" onClick={handleNavLinkClick}>
                                Usługi
                            </Link>
                        </li>
                        <li>
                            <Link to="/kontakt" onClick={handleNavLinkClick}>
                                Kontakt
                            </Link>
                        </li>
                    </Fade>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
