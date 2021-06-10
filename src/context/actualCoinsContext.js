import {useState, createContext} from 'react';

const CoinsContext = createContext();

function CoinsContextProvider({children}){
    const [coinsFigure, setCoinsFigure] = useState(2000);

    //Update the state
    const updateCoinsFigure = (coinsFigure) => {
        setCoinsFigure(coinsFigure);
    }

    console.log('cantidad de coins', coinsFigure);


    return (
        <CoinsContext.Provider value={{coinsFigure, updateCoinsFigure}}>
            {children}
        </CoinsContext.Provider>
    )
}


export {CoinsContext, CoinsContextProvider}