import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './routes/Home';
import Services from './routes/Services';
import Contact from './routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="uslugi" element={<Services />} />
                <Route path="kontakt" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
