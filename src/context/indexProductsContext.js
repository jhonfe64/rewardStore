import { useState, createContext } from "react";
const IndexProductsContext = createContext();

function IndexProductsContextProvider({children}){
    const [indexProducts, setIndexProducts] = useState([]);

    //update the state
    const updateIndexProducts = (indexProducts) => {
        setIndexProducts(indexProducts);
    }

    console.log('PRODUCTOS DEL INDEX', indexProducts);

    return (
        <IndexProductsContext.Provider value={{indexProducts, updateIndexProducts}}>
            {children}
        </IndexProductsContext.Provider>
    )
}

export {IndexProductsContext, IndexProductsContextProvider}