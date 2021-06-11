import React, {useContext, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Results from './components/Results';
import Filters from './components/Filters';
import {JumboHeightContextProvider} from './context/jumboContext';
import {CoinsContextProvider} from './context/actualCoinsContext';
import {SuccessModalContext} from './context/successModalCotext';
import SuccessModal from './components/SuccessModal';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// }from 'react-router-dom'

function App() {
  const {successModalStatus} = useContext(SuccessModalContext);
  console.log('succes modal estatus from APP', successModalStatus);
  return (
    <CoinsContextProvider>
      <div className="App" style={{marginBottom: '100px'}}>
        <JumboHeightContextProvider>
          <Header />
          <Jumbo />
          <Filters />
        </JumboHeightContextProvider>
        <Results />
        {
          successModalStatus && <SuccessModal />
        }
      </div>
    </CoinsContextProvider>
    
  );
}

export default App;
