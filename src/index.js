import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';


const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize("G-FCP2KLC26X");

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);


reportWebVitals();
