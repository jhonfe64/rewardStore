import './App.css';
import Header from './components/Header';
import Jumbo from './components/Jumbo';
import Results from './components/Results';
import Filters from './components/Filters';
import {JumboHeightContextProvider} from './context/jumboContext';
import {CoinsContextProvider} from './context/actualCoinsContext';


function App() {
  return (
    <CoinsContextProvider>
      <div className="App" style={{marginBottom: '100px'}}>
        <JumboHeightContextProvider>
          <Header />
          <Jumbo />
          <Filters />
        </JumboHeightContextProvider>
        <Results />
      </div>
    </CoinsContextProvider>
  );
}

export default App;
