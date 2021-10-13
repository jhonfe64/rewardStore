import React, {useState, useEffect} from 'react';
import  RechargeSection from '../elements/RechargeSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'
import {updateCoinsFigureUrl} from '../keys';
import {headers} from '../keys';
import useFetchPost from '../hooks/useFetchPost';

function Recharge() {

    
    const [newCoins, setNewCoins] = useState(0);

    const body =  JSON.stringify( {
        "amount": Number(newCoins)
    });

    //Personalized hook to post request
    //getting new coins 
    useFetchPost(updateCoinsFigureUrl, headers, body, newCoins);
 
    const getCoins = (e) => {
        setNewCoins(e.target.value);
        setTimeout(()=>{
            setNewCoins(0);
        },1000)
    }
    

    //los coins del locals torage
    const actualCoinsFigure =  Number(localStorage.getItem('actualCoinsFigure'));

    useEffect(()=>{
        localStorage.setItem('actualCoinsFigure', actualCoinsFigure + Number(newCoins));
    },[body])

    //actualizar el localstorare
    //actualizar ele stado global


    return (
        <RechargeSection className="container">
            <h1 className="mb-5">Recarga monedas aquí</h1>
            <h2>Tienes {actualCoinsFigure} monedas</h2>
            <br/>
            {/* {
                rechargedCoins && <h2 className="mb-4">Has recargado {rechargedCoins} en total tienes {Number(actualCoins)} </h2>
            } */}

            <button onClick={getCoins} className="d-block mb-3 pt-3 pb-3" value="1000">1000<FontAwesomeIcon className="ml-5"  icon={faCoins} /></button>
            <button onClick={getCoins} className="d-block mb-3 pt-3 pb-3" value="5000">5000<FontAwesomeIcon className="ml-5"  icon={faCoins} /></button>
            <button onClick={getCoins} className="d-block mb-3 pt-3 pb-3" value="7500">7500<FontAwesomeIcon className="ml-5"  icon={faCoins} /></button>
            <br/>
            <Link to='/'><FontAwesomeIcon icon={faArrowLeft}/>Regresar</Link>
        </RechargeSection> 
    )
}

export default Recharge;
