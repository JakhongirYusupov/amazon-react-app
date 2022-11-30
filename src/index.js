import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./locales/i18next";
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);                                                                                                                                                                                                                                                                  