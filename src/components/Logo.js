import React from 'react';
import { Fade } from 'react-reveal';
import './Logo.scss';

function Logo({ title }) {
    return (
        <h1 className="logoBrand">
            <Fade top>{title}</Fade>
        </h1>
    );
}

export default Logo;
