import {useState, createContext} from 'react';

const SuccessModalContext = createContext();

function SuccessModalContextProvider({children}){
    const [successModalStatus, setSuccessModalStatus] = useState(null);

    //update the state

    const updateSuccessmodal = (successModalStatus) => {
        setSuccessModalStatus(successModalStatus)
    }

    return (
        <SuccessModalContext.Provider value={{successModalStatus, updateSuccessmodal}}>
            {children}
        </SuccessModalContext.Provider>
    );
}


export {SuccessModalContext, SuccessModalContextProvider}