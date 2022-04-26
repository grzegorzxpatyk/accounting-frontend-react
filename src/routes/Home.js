import React from 'react';
import './Home.scss';
import { Fade } from 'react-reveal';
import shakingHands from '../assets/shakingHands.jpg';

function Home() {
    return (
        <section className="landingPage">
            <Fade left>
                <h1>Biuro rachunkowe MADAR</h1>
            </Fade>
            <Fade top>
                <img src={shakingHands} alt="" />
            </Fade>
        </section>
    );
}

export default Home;
