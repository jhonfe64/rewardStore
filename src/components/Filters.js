import React, {useContext} from 'react';
import ProductFiltres from '../elements/ProductFiltres';
import { JumboHeightContext } from '../context/jumboContext';


function Filters() {
    
    const {jumboHeight} = useContext(JumboHeightContext);

    return (
        <ProductFiltres className={`container mt-4 mb-4 mt-md-5 ${jumboHeight === true && 'marginTop'}`}>
            <div className="row d-flex">
                <div className="col-12 d-flex">
                    <select className='mr-3' name="" id="">
                        <option value="">Categoria</option>
                        <option value="">Categoria uno</option>
                        <option value="">Categoria dos</option>
                        <option value="">Categoria tres</option>
                    </select>
                    <div className='filterPrice mr-3'>Precio maximo</div>
                    <div className='filterPrice mr-3'>Precio minimo</div>
                </div>
            </div>
        </ProductFiltres>
    )
}

export default Filters
