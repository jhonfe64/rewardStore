import React, {useContext, useRef, useEffect } from 'react';
import  MainHeader from '../elements/MainHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import {headers, userUrl} from '../keys';
import { JumboHeightContext } from '../context/jumboContext';
import {CoinsContext} from '../context/actualCoinsContext';
import useFetch from '../hooks/useFetch';
import { useLocation } from 'react-router';

function Header() {
    //Opteniendo la cantidad de coins del estado global
    const {coinsFigure,  updateCoinsFigure}  = useContext(CoinsContext);
    //Avtualizando la altura del jumbo para sticky al menu
    const {jumboHeight, updateJumboheight} = useContext(JumboHeightContext);
    const mainHeader = useRef();
    //Obteniendo la url de la pagina que se carga
    const url = useLocation().pathname;
    
    //const actualCoins = JSON.parse(localStorage.getItem('actualCoins'));
    useEffect(()=>{
        if(url !== '/'){
            updateJumboheight(true);
        }
    }, []);

    //Psando los valores al hook personalizado que recibe los parametros url y header para hacer la 
    //peticion fetch (la url trae la info del usuario)
    let [data] = useFetch(userUrl, headers);

    //updateCoinsFigure(data.points);

    const actualCoins = Number(localStorage.getItem('actualCoinsFigure'));

    useEffect(()=>{
        if(data && !actualCoins){
            updateCoinsFigure(data.points);
        }else{
            updateCoinsFigure(actualCoins);
        }
    },[data]);


    //Actualizando el estado de coins
    return (
        <>
        <MainHeader ref={mainHeader} className={`pt-4 pb-4 ${jumboHeight === true && 'fixed'}`}>
           <div className="container d-flex justify-content-between align-items-center position-relative">
               <div className='logo'>
                   <img src="./img/aerolab-logo.svg" alt="" />
               </div>
               <ul className='d-flex align-items-center'>
                   <li className='mr-3 coins d-flex justify-content-between'>
                        <FontAwesomeIcon  icon={faCoins} />
                        {
                            <span>{coinsFigure}</span>
                        }
                   </li>
                   <li> 
                        <span>{data.name}</span>
                   </li>
               </ul>
           </div>
        </MainHeader>
        </>
    )
}

export default Header
