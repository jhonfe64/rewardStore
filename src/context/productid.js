import { useState, createContext} from "react";

const ProductIdContext = createContext();

function ProductIdContextProvider({children}){
    const [productId, setproductId] = useState('');

    //update the id
    const updateProductId = (productId) => {
        setproductId(productId);
    }

    console.log('id del producto a actualizar DDDDDDDDDDDDDD', productId);

    return (
        <ProductIdContext.Provider value={{productId, updateProductId}}>
            {children}
        </ProductIdContext.Provider>
    )

}


export {ProductIdContext, ProductIdContextProvider}