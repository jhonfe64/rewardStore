import {useState, createContext} from 'react';

const JumboHeightContext = createContext();

function JumboHeightContextProvider({children}) {

    const [jumboHeight, setJumboHeight] = useState(false);

    //Update the state
    const updateJumboheight = (jumboHeight) => {
        setJumboHeight(jumboHeight);
    }

    console.log('vaLor actual', jumboHeight)

    return (
        <JumboHeightContext.Provider value={{jumboHeight, updateJumboheight}}>
            {children}
        </JumboHeightContext.Provider>
    )
}

export {JumboHeightContext, JumboHeightContextProvider}
