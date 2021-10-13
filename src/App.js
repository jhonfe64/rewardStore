import React, {useContext, useState} from 'react';
import './css/App.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Results from './components/Results';
import Recharge from './components/Recharge';
import Filters from './components/Filters';
import {JumboHeightContextProvider} from './context/jumboContext';
import {CoinsContextProvider} from './context/actualCoinsContext';
import {SuccessModalContext} from './context/successModalCotext';
import SuccessModal from './components/SuccessModal';

import {
  HashRouter as Router,
  Switch,
  Route
}from 'react-router-dom'

function App() {
  const {successModalStatus} = useContext(SuccessModalContext);
  return (
    <CoinsContextProvider>
    <JumboHeightContextProvider>
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className={`App ${successModalStatus && 'bodyBackground'}`} style={{marginBottom: '100px'}}>
              <Header />
              <Jumbo />
              <Filters />
              <Results />
            {
              successModalStatus && <SuccessModal />
            }
          </div>
      </Route>
      <Route path="/get-coins" exact>
          <Header />
          <Recharge />
      </Route>
      <Route path="/record" exact>
          <Header />
          <Results />
      </Route>
      </Switch>
    </Router>
    </JumboHeightContextProvider>
    </CoinsContextProvider>
    
  );
}

export default App;
