import React, { useState, useEffect, useContext, useRef } from 'react';
import  MainHeader from '../elements/MainHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import {headers, userUrl} from '../keys';
import { JumboHeightContext } from '../context/jumboContext';

function Header() {

    const {jumboHeight} = useContext(JumboHeightContext);

    const refHeader = useRef();

    const [userName, setUserName] = useState('');
    const [coinsFigure, setCoinsFigure] = useState('')

    useEffect(()=>{
        const personalInfo = async () => {
            const info = await fetch(userUrl, {
                headers
              })
            const userInfo = await info.json();
            setUserName(userInfo.name);
            setCoinsFigure(userInfo.points)
        }
        personalInfo();
    },[])


    return (
        <MainHeader className={`pt-4 pb-4 ${jumboHeight === true && 'fixed'}`} ref={refHeader}>
           <div className="container d-flex justify-content-between align-items-center position-relative">
               <div className='logo'>
                   <img src="./img/aerolab-logo.svg" alt="" />
               </div>
               <ul className='d-flex align-items-center'>
                   <li className='mr-3 coins d-flex justify-content-between'>
                        <FontAwesomeIcon  icon={faCoins} />
                        <span>{coinsFigure}</span>
                   </li>
                   <li> 
                        <span>{userName}</span>
                   </li>
               </ul>
           </div>
        </MainHeader>
    )
}

export default Header
