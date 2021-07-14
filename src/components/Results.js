import { useContext, useState, useEffect } from 'react';
import ResultsComponent from '../elements/ResultsStyles'
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
import {FiltersContext} from '../context/filters';
//Pginacións
import usePagination from "../hooks/usePagination";

const Results = () => {

    const url = useLocation().pathname;

    //productos del index
    const [data] = useFetch(allProductsUrl, headers, allProductsUrl);
    //productos cangeados
    const {productId}  = useContext(ProductIdContext);

    //Contexto productos del index
    const {indexProducts, updateIndexProducts} = useContext(IndexProductsContext);

    //Context de filtros
    const {filtersValues} = useContext(FiltersContext);

    const [filteredList, setFilteredList] = useState([]);

    //Paginación
    let [page, setPage] = useState(1);
    const PER_PAGE = 16;

    const handleChange = (e) => {
        if(e.target.getAttribute('name') === 'next'){
            setPage(2);
            _DATA.jump(2);
        }

        if(e.target.getAttribute('name') === 'back'){
            setPage(1);
            _DATA.jump(1);
        }
    }


    
  const count = Math.ceil(filteredList.length / PER_PAGE);
  const _DATA = usePagination(filteredList, PER_PAGE);

  const filteredlistPaginated = _DATA.currentData();


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

    if(data){
        updateIndexProducts(data)
    }

     const body = JSON.stringify({
        "productId": productId
    })

    //Enviando los productos redimidos
    useFetchPost(setReedemproducts, headers, body,  productId);
 
    //Trayendo los productos cangeados
    const getReedemProducts = useFetch(getReedemproducts, headers, productId);

    return (
        <ResultsComponent>
            <div className="container d-flex mt-5">
                {
                    url === '/record' && getReedemProducts.length > 0 && <RedeemProductCard products={getReedemProducts} />
                }
                {
                    url === '/' && data.length > 0 && <ProductCard products={filteredlistPaginated} />
                }
                {
                    getReedemProducts.length <= 0 || data.length <= 0 && <Loader />
                }
            </div>
            {
                filteredlistPaginated.length >= 16 &&
                <div className="container d-flex justify-content-center">
                    <button className="p-2" name="back" onClick={handleChange}>
                        1
                    </button>
                    <button className="ml-2 p-2" name="next" onClick={handleChange}>
                        2
                    </button>
                </div>
            }
        </ResultsComponent>
    );
}

export default Results;

