import {useState, createContext} from 'react';

const SuccessModalContext = createContext();

function SuccessModalContextProvider({children}){
    const [successModalStatus, setSuccessModalStatus] = useState(false);

    //update the state

    const updateSuccessmodal = (successModalStatus) => {
        setSuccessModalStatus(successModalStatus)
    }

    console.log('estado del modal', successModalStatus)

    return (
        <SuccessModalContext.Provider value={{successModalStatus, updateSuccessmodal}}>
            {children}
        </SuccessModalContext.Provider>
    );
}


export {SuccessModalContext, SuccessModalContextProvider}