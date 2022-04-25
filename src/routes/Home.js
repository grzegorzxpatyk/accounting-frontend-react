import React from 'react';
import './Home.scss';
import { Fade } from 'react-reveal';

function Home() {
    return (
        <section className="landingPage">
            <Fade left>
                <h1>Biuro rachunkowe MADAR</h1>
            </Fade>
        </section>
    );
}

export default Home;
