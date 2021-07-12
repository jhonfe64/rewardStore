import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap-4-grid/css/grid.min.css';
import {SuccessModalContextProvider}  from './context/successModalCotext';
import {ProductIdContextProvider} from './context/productid';
import {IndexProductsContextProvider} from './context/indexProductsContext';
import {FiltersContextProvider} from './context/filters';

ReactDOM.render(
  <React.StrictMode>
    <FiltersContextProvider>
    <IndexProductsContextProvider>
    <SuccessModalContextProvider>
      <ProductIdContextProvider>
        <App />
      </ProductIdContextProvider>
    </SuccessModalContextProvider>
    </IndexProductsContextProvider>
    </FiltersContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

