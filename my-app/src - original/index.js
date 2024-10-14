import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import { Saludo } from './components/Saludo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <h1>Hola estoy en la pagina index.js</h1>
    <Saludo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

