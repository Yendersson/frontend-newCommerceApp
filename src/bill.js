import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/faq.css';
import './css/kart.css';
import './css/list.css';
import './css/product_detail.css';
import './css/profile.css';
import './css/style.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './services/store/store';
import Bill from './container/Bill';

const root = ReactDOM.createRoot(document.getElementById('bill'));
root.render(
  <>
    <Bill />
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();