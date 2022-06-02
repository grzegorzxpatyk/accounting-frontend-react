import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Fade } from 'react-reveal';
import './Header.scss';
import { useState } from 'react';

function Header() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    function handleNavLinkClick(e) {
        if (isMenuVisible) {
            setMenuVisible(false);
        } else if (!isMenuVisible && e.target.nodeName !== 'SPAN') {
            setMenuVisible(true);
        }
    }

    return (
        <header>
            <Logo title="MADAR" onClick={handleNavLinkClick} />
            <nav>
                <input
                    type="checkbox"
                    id="toggler"
                    checked={isMenuVisible}
                    onChange={handleNavLinkClick}
                />
                <label htmlFor="toggler">MENU</label>
                <Fade>
                    <ul>
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
                    </ul>
                </Fade>
            </nav>
        </header>
    );
}

export default Header;
