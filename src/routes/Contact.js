import React from 'react';
import './Contact.scss';
import { Fade } from 'react-reveal';

function Contact() {
    return (
        <Fade>
            <section className="contact">
                <h2>Kontakt</h2>
                <div className="w-100 d-flex justify-content-between flex-column flex-md-row">
                    <div>
                        <h3>
                            Biuro Rachunkowe Madar s.c. Małgorzata Konieczna
                            Teresa Wrzesień
                        </h3>
                        <p>
                            <a
                                href="https://goo.gl/maps/kZmSYU5UPZR6jS2B9"
                                target="_blank"
                                rel="noreferrer"
                            >
                                ul. Racławicka 23, 32-200 Miechów
                            </a>
                        </p>
                        <p>Telefon: 41 383 23 89</p>
                    </div>
                    <aside>
                        <h4>Godziny otwarcia</h4>
                        <ul>
                            <li>Poniedziałek: 8:00 - 16:00</li>
                            <li>Wtorek: 8:00 - 16:00</li>
                            <li>Środa: 8:00 - 16:00</li>
                            <li>Czwartek: 8:00 - 16:00</li>
                            <li>Piątek: 8:00 - 16:00</li>
                            <li>Sobota, Niedziela - zamknięte</li>
                        </ul>
                    </aside>
                </div>
            </section>
        </Fade>
    );
}

export default Contact;
