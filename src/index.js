import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap-4-grid/css/grid.min.css';
import {SuccessModalContextProvider}  from './context/successModalCotext';

ReactDOM.render(
  <React.StrictMode>
    <SuccessModalContextProvider>
      <App />
    </SuccessModalContextProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

