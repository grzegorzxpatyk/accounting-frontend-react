import React from 'react';
import { Fade } from 'react-reveal';
import './Footer.scss';

function Footer() {
    return (
        <footer>
            <div>
                <Fade cascade bottom>
                    Madar &copy; 2022
                </Fade>
            </div>
        </footer>
    );
}

export default Footer;
