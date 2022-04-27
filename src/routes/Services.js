import React from 'react';
import { Fade } from 'react-reveal';
import './Services.scss';

function Services() {
    return (
        <Fade>
            <section className="services">
                <h2>Usługi</h2>
                <div>
                    <section>
                        <h4>
                            W naszej ofercie znajdziecie państwo wiele usług.
                            Między innymi:
                        </h4>
                        <ul>
                            <li>
                                prowadzenie podatkowych ksiąg przychodów i
                                rozchodów
                            </li>
                            <li>
                                prowadzenie ewidencji przychodów dla celów
                                zryczałtowanego podatku dochodowego od osób
                                fizycznych
                            </li>
                            <li>
                                sporządzanie ewidencji dla celów rozliczenia
                                podatku od towarów i usług (VAT){' '}
                            </li>
                            <li>
                                prowadzenie ewidencji wyposażenia i ewidencji
                                środków trwałych, wraz z dokonywaniem
                                miesięcznych odpisów amortyzacyjnych i
                                ewentualnym przeszacowywaniem wartości środków
                                trwałych
                            </li>{' '}
                            <li>sporządzanie wniosków kredytowych</li>{' '}
                            <li>
                                sporządzanie list płac oraz umów zleceń i o
                                dzieło, prowadzenie kartotek wynagrodzeń
                                pracowników, rozliczanie zwolnień lekarskich,
                                wyliczanie przysługujących urlopów i świadczeń
                            </li>{' '}
                            <li>
                                przygotowanie dokumentacji ZUS związanej z
                                powstaniem i zarejestrowaniem nowej firmy,
                                comiesięczne przekazy elektroniczne deklaracji
                                ZUS, obsługa Klienta przed Zakładem Ubezpieczeń
                                Społecznych
                            </li>{' '}
                            <li>
                                na zlecenie Klienta zajmujemy się tylko sprawami
                                kadrowymi w firmie bez świadczenia usługi
                                księgowej
                            </li>{' '}
                            <li>
                                sporządzanie sprawozdań do Urzędu Statystycznego
                            </li>
                        </ul>
                    </section>
                    {/* <aside>
                        <img src="" alt="" />
                    </aside> */}
                </div>
            </section>
        </Fade>
    );
}

export default Services;
