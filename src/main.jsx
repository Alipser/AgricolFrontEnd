import React from 'react';
import ReactDOM from 'react-dom/client';
import './compartido.css';
import App from './pages/App/index.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'boxicons';

//set a default role for the user
// localStorage.setItem('


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
