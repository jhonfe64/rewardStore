import { useContext, useState, useEffect } from 'react';
import ResultsComponent from '../elements/ResultsStyles';
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
import {SuccessModalContext} from '../context/successModalCotext';
import {CoinsContext} from '../context/actualCoinsContext'; //TAL VEZ SEA ESTO
//Pginacións
import usePagination from "../hooks/usePagination";

const Results = () => {

    const url = useLocation().pathname;

    //productos del index
    const [data] = useFetch(allProductsUrl, headers, allProductsUrl);
    //Productso filtrados por categoria
    const [listFilteredByCategory, setListFilteredByCategory] = useState([]);
    //productos cangeados
    const {productId}  = useContext(ProductIdContext);

    let {coinsFigure, updateCoinsFigure} = useContext(CoinsContext);


    const {successModalStatus, updateSuccessmodal} = useContext(SuccessModalContext);


    //Contexto productos del index
    const {indexProducts, updateIndexProducts} = useContext(IndexProductsContext);

    //Context de filtros
    const {filtersValues, updateCategory} = useContext(FiltersContext);

    const [filteredList, setFilteredList] = useState([]);

    //Paginación
    let [page, setPage] = useState(1);
    const PER_PAGE = 16;

    
  const count = Math.ceil(filteredList.length / PER_PAGE);

  //================================================================================================>☻

  const _DATA = usePagination(filteredList, PER_PAGE);


  //==========> HAY Q FILTRAR SOBR EESTA LISTA NO SOBRE EL INDEX
  let filteredlistPaginated = _DATA.currentData();

  if(data){
        updateIndexProducts(data)
    }

  useEffect(()=>{
    let x = _DATA.next();
    let y = _DATA.prev();
  },[filteredList]);

  //hay q filtrar sobre esta lista esta lista es la que tiene 16productos en una pagina y 16 en la otra

    //ESTE FILTRO FUNCIONA PARA FILTRAR SOBRE INDEX 

    useEffect(()=>{
        setFilteredList(indexProducts);
    },[indexProducts]);

    //==========> Si existe filteredlistPaginated


     const body = JSON.stringify({
        "productId": productId
    });


    //Enviando los productos redimidos =====================================>
    useFetchPost(setReedemproducts, headers, body, coinsFigure);
    
 
    //Trayendo los productos cangeados
    const getReedemProducts = useFetch(getReedemproducts, headers, productId);

    //Oganizando los productos elementos del index por filtro de precio
    if(filteredlistPaginated && filtersValues.price === 'max'){
        filteredlistPaginated.sort(function (a, b) {
            return b.cost - a.cost;
        });
    }

    if(filteredlistPaginated && filtersValues.price === 'min'){
        filteredlistPaginated.sort(function (a, b) {
            return a.cost - b.cost;
        });
    }

    const handleChange = (e) => {
        if(e.target.getAttribute('name') === 'back'){
            setPage(1);
            _DATA.jump(1);
        }

        if(e.target.getAttribute('name') === 'next'){
            setPage(2);
            _DATA.jump(2);
        }
    }
    

    useEffect(()=>{
        if(filteredlistPaginated.length > 0 && filtersValues.category !== ''){
            const filteredProducts = filteredlistPaginated.filter(product => product.category == filtersValues.category);
            setListFilteredByCategory(filteredProducts);
        }else{
            return;
        }
    },[filtersValues.category]);


    //cuamdo filtra por categoria yd espues quiere ordenarlos
    //Organizando los elemento filtrados por categoria por el filtro de precio
    if(listFilteredByCategory && filtersValues.price === 'max' && filtersValues.category !== ''){
        listFilteredByCategory.sort(function (a, b) {
            return b.cost - a.cost;
        });
    }


    if(listFilteredByCategory && filtersValues.price === 'min' && filtersValues.category !== ''){
        listFilteredByCategory.sort(function (a, b) {
            return a.cost - b.cost;
        });
    }

    return (
        <ResultsComponent>
            <div className="container d-flex mt-5">
                
                {
                    url === '/record' && getReedemProducts.length > 0 && <RedeemProductCard products={getReedemProducts} />
                }
                {
                    url === '/' && listFilteredByCategory.length <= 0 && filtersValues.category === "" && <ProductCard products={filteredlistPaginated} />
                }
                {
                    url === '/' && listFilteredByCategory.length <= 0 && filtersValues.category !== ""  && <h1>No hay resultados filtre por otra categoría</h1>
                }
                {
                    url === "/" && listFilteredByCategory.length > 0 && <ProductCard products={listFilteredByCategory} />
                }
                {
                    getReedemProducts.length <= 0 || data.length <= 0 && <Loader />
                }
            </div>
            {
                 url === "/" && filteredlistPaginated.length >= 16 && filtersValues.category === "" &&
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

