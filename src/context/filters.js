import {useState, createContext} from 'react';
const FiltersContext =  createContext();

function FiltersContextProvider({children}){
    const [filtersValues, setFiltersValues] = useState({
        category: '',
        price: ''
    });

    //Updatae the  category
    const updateCategory = (category) => {
        setFiltersValues({
            ...filtersValues,
            category: category
            
        });
    }

    //update filter by price
    
    const updatePrice = (price) => {
        setFiltersValues({
            ...filtersValues,
            price: price
        })
    }
   
 
    console.log('valores de los filtros ========================> ', filtersValues);

    return (
        <FiltersContext.Provider value={{filtersValues, updateCategory, updatePrice}}>
            {children}
        </FiltersContext.Provider>
    )
}


export {FiltersContext, FiltersContextProvider}