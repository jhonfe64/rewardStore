import { useContext, useState, useEffect } from 'react';
import {headers,  allProductsUrl} from '../keys';
import ProductCard from './ProductCard';
import Loader from './Loader';
//Import personalized hook
import useFetch from '../hooks/useFetch';
import {ProductIdContext} from '../context/productid';
import  useFetchPost from '../hooks/useFetchPost';
import {setReedemproducts} from '../keys';
import {getReedemproducts} from '../keys';
import { useLocation } from 'react-router';
import RedeemProductCard from './RedeemProductCard';
import {IndexProductsContext} from '../context/indexProductsContext';
import {FiltersContext, FiltersContextProvider} from '../context/filters';

const Results = () => {

    const url = useLocation().pathname;

    //productos del index
    const [data] = useFetch(allProductsUrl, headers, allProductsUrl);
    //productos cangeados
    const {productId}  = useContext(ProductIdContext);

    //Contexto productos del index
    const {indexProducts, updateIndexProducts} = useContext(IndexProductsContext);

    //Context de filtros
    const {filtersValues, updateCategory, updatePrice} = useContext(FiltersContext);

    const [filteredList, setFilteredList] = useState([])

    useEffect(()=>{
        const filteredProducts = indexProducts.filter((product)=>{
            if(product.category !== ''){
                return filtersValues.category === product.category;
            }else{
                return product
            }
        })

        if(filteredProducts){
            setFilteredList(filteredProducts);
        }
    },[filtersValues.category, indexProducts])


    useEffect(()=>{
        setFilteredList(indexProducts);
    },[indexProducts])

    //updateCategory, updatePrice

    if(filteredList && filtersValues.price === 'max'){
        filteredList.sort(function (a, b) {
            return b.cost - a.cost;
        });
    }

    if(filteredList && filtersValues.price === 'min'){
        filteredList.sort(function (a, b) {
            return a.cost - b.cost;
        });
    }

    console.log('FILTERED LIST =======================> ', filteredList)


    if(data){
        updateIndexProducts(data)
    }

     const body = JSON.stringify({
        "productId": productId
    })

    //Enviando los productos redimidos
    useFetchPost(setReedemproducts, headers, body,  productId);



    console.log('productos del index  =====> ', indexProducts)
 
    //Trayendo los productos cangeados
    const getReedemProducts = useFetch(getReedemproducts, headers, productId);

    return (
        <div className=''>
            <div className="container d-flex mt-5">
                {
                    url === '/record' && getReedemProducts.length > 0 && <RedeemProductCard products={getReedemProducts} />
                }
                {
                    url === '/' && data.length > 0 && <ProductCard products={filteredList} />
                }
                {
                    getReedemProducts.length <= 0 || data.length <= 0 && <Loader />
                }
            </div>
        </div>
    );
}

export default Results;

