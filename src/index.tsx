import React from 'react';
import ReactDOM from 'react-dom/client';
// React and ReactDOM are part of Reach

import './index.css';
// This is a cascading style sheet to determine the appearance

import App from './App';
// App.js implements the default React App

import reportWebVitals from './reportWebVitals';

// this file is the code that will inject html into index.html
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// here is when it renders App.tsx
// ReactDOM renders app in root
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
