import React from 'react';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import './Logo.scss';

function Logo({ title, onClick }) {
    return (
        <Link to="/">
            <h1 className="logoBrand" onClick={onClick}>
                <Fade top cascade>
                    {title}
                </Fade>
            </h1>
        </Link>
    );
}

export default Logo;
