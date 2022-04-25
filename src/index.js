import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './routes/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<p>Welcome on the landing page!</p>} />
                <Route path="kontakt" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
