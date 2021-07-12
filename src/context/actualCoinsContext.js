import {useState, createContext} from 'react';

const CoinsContext = createContext();

function CoinsContextProvider({children}){
    const [coinsFigure, setCoinsFigure] = useState();

    //Update the state
    const updateCoinsFigure = (coinsFigure) => {
        setCoinsFigure(coinsFigure);
    }

    console.log('coins figure updated', coinsFigure);

    return (
        <CoinsContext.Provider value={{coinsFigure, updateCoinsFigure}}>
            {children}
        </CoinsContext.Provider>
    )
}


export {CoinsContext, CoinsContextProvider}