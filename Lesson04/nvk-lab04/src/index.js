import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NvkApp from './NvkApp';
import reportWebVitals from './reportWebVitals';

const nvkRoot = ReactDOM.createRoot(document.getElementById('nvkRoot'));
nvkRoot.render(
  <React.StrictMode>
    <NvkApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();