import React, {useEffect, useState} from 'react';
import {headers,  allProductsUrl} from '../keys';
import ProductCard from './ProductCard';
import Loader from './Loader';

const Results = () => {

    const [products, setProducts ] = useState([])

    useEffect(()=>{
        const getProducts = async () => {
            const allProducts = await fetch(allProductsUrl, {
                headers
            });
            const allProductsJson = await allProducts.json();
            setProducts(allProductsJson);
        }
        getProducts();
    },[])
    

    return (
        <div className=''>
            <div className="container d-flex mt-5">
                {
                    products.length > 0 ? <ProductCard products={products} />: <Loader />
                }
            </div>
        </div>
    );
}

export default Results;

