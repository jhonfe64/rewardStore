import React, {useContext, useState, useEffect} from 'react';
import ProductFiltres from '../elements/ProductFiltres';
import { JumboHeightContext } from '../context/jumboContext';
import {Link} from 'react-router-dom';
import {FiltersContext} from '../context/filters';


function Filters() {
    
    const {jumboHeight} = useContext(JumboHeightContext);

    //Context de filtros
    const {filtersValues, updateCategory, updatePrice} = useContext(FiltersContext);

    const handleSelectValue = (e) => {
        if(e.target.name === 'categoriesSelect'){
            updateCategory(e.target.value)
        }
    }

    const filterByPrice = (e) => {
        updatePrice(e.target.value);
    }

    const resetFilters = () => {
        window.location.reload();
    }

    return (
        <ProductFiltres className={`container mt-4 mb-4 mt-md-5 ${jumboHeight === true && 'marginTop'}`}>
            <div className="row d-flex">
                <div className="col-12 d-flex flex-wrap">
                    <select className='mr-3' name="categoriesSelect" id="" onChange={handleSelectValue} value={filtersValues.category}>
                        <option value="" key="" selected disabled>Seleccionar categoria</option>
                        <option name="phones" value="Phones">Phones</option>
                        <option name="gaming" value="Gaming">Gaming</option>
                        <option name="laptops" value="Laptops">Laptops</option>
                        <option name="cameras" value="Cameras">Cameras</option>
                        <option name="monitorsAndTv" value="Monitors & TV">Monitors and TV</option>
                        <option name="drones" value="Drones">Drones</option>
                        <option name="phonesAccessories" value="Phone Accessories">Phones Accessories</option>
                        <option name="startHome" value="Smart Home">Smart Home</option>
                        <option name="pcAccessories" value="PC Accessories">PC Accessories</option>
                        <option name="tabletsAndErenders" value="Tablets & E-readers">Tablets & E-readers</option>
                    </select>
                    <select className='mr-3' name="categoriesSelect" id="" value={filtersValues.price} onChange={filterByPrice}>
                        <option value="" key="" selected disabled>Filtrar por</option>
                        <option name="max" value="max">Precio máximo</option>
                        <option name="min" value="min">Precio mínimo</option>
                    </select>
                    <Link to='/record' target="_blank" className="text-center d-flex align-items-center pr-3 pl-3">Ver historial</Link>
                    <button onClick={resetFilters} className="ml-3 rounded pr-3 pl-3 border-0">Reset filtros</button>
                </div>
            </div>
            {
                filtersValues.category && <h2 className="mt-5">Resultados para {filtersValues.category}</h2>
            }
            
        </ProductFiltres>
    )
}

export default Filters
