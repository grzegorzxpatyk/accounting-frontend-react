import React from 'react';
import './Home.scss';
import { Fade } from 'react-reveal';
import calculator from '../assets/calculator.jpg';

function Home() {
    return (
        <section className="landingPage">
            <Fade left>
                <h1>Biuro rachunkowe MADAR</h1>
            </Fade>
            <Fade top>
                <img src={calculator} alt="" />
                <div className="overlay"></div>
            </Fade>
        </section>
    );
}

export default Home;
