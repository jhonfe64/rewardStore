import React, { useRef, useEffect, useContext } from 'react'
import TopJumbo from '../elements/TopJumbo';
import { JumboHeightContext } from '../context/jumboContext';

function Jumbo() {

    const {updateJumboheight} = useContext(JumboHeightContext);

    //select the html element jumbo
    const RefJumbo = useRef();

    useEffect(()=>{
        //when scrolling the page
        window.addEventListener('scroll', ()=> {
            const jumboTron = RefJumbo.current;
            const jumboHeight = jumboTron.clientHeight;
            const scroll = window.scrollY;
            if(scroll >= jumboHeight){
                //updating the global state
                updateJumboheight(true)
            }else{
                updateJumboheight(false)
            }
        });
    },[updateJumboheight])

    return (
        <TopJumbo className='container-fluid' ref={RefJumbo}>
            <div>
                <div className="row d-flex">
                    <div className='headPhones pr-0 col-6 d-none d-lg-block'>
                        <img className='w-100 h-100' src="./img/headphones.jpg" alt="headphones" />
                    </div>
                    <div className='d-flex flex-wrap col-12 col-lg-6 '>
                        <div className='w-100 name  d-flex flex-wrap align-items-center'>
                            <div className='p-5 w-100 description'>
                                <h2>Rewards Store</h2>
                                <h5>Lorem ipsum dolor sit amet.</h5>
                            </div>
                        </div>
                        <div className='w-100 cablePhone pt-3'>
                            <img className='w-100 h-100' src="./img/audifono.jpg" alt="audifono" />
                        </div>
                    </div>
                </div>
            </div>
        </TopJumbo>
    )
}

export default Jumbo
