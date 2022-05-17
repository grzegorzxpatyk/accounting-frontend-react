import React from 'react';
import './Home.scss';
import { Fade } from 'react-reveal';
import calculator from '../assets/calculator.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <section className="landingPage">
            <Fade left>
                <h1>Biuro rachunkowe MADAR</h1>
            </Fade>
            <Fade top>
                <div className="overlay"></div>
                <img src={calculator} alt="" />
            </Fade>
            <Fade right>
                <aside>
                    <p>
                        Potrzebujesz usług związanych z księgowością lub
                        prowadzeniem działalności gospodarczej?
                    </p>
                    <p>
                        <Link to="/uslugi">Dowiedz się więcej 🠒</Link>
                    </p>
                </aside>
            </Fade>
        </section>
    );
}

export default Home;
