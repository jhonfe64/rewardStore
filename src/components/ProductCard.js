import React, {useContext} from 'react';
import CardProduct from '../elements/CardProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {CoinsContext} from '../context/actualCoinsContext';
{/* <i class="fab fa-bitcoin"></i> */}



function ProductCard({products}) {
    
    const {coinsFigure, updateCoinsFigure} = useContext(CoinsContext);

    // const newFigure = (e) => {
    //     console.log(e.target.getAttribute('figure'))
    // }


    return (
        <CardProduct className='d-flex flex-wrap justify-content-between w-100'>
            {
                products.map((product)=>{
                    return (
                    <div  key={product.name} className='cardContainer mb-5 position-relative pt-3 pl-3'>
                        {
                             coinsFigure < product.cost ? 
                             <h4 className="position-absolute noBuy">
                                 te faltan {product.cost - coinsFigure}
                                <FontAwesomeIcon className="ml-3" icon={faCoins} />
                            </h4>: 
                            <h4 className="position-absolute buy"><FontAwesomeIcon className="ml-3" icon={faShoppingBag} />{product.cost}</h4>
                        }
                       
                        <div className="imgContainer">
                            <img src={product.img.url} alt={product.name} />
                        </div>
                        <div className='description'>
                            <h4 className='text-center mb-1 mt-3'>{product.name}</h4>
                            <h5 className='text-center pb-4'>{product.category}</h5>
                        </div>
                        {
                            product.cost - coinsFigure < 0 &&
                            <div className="position-absolute hoverPrice d-flex justify-content-center align-items-center">
                            <div>
                                <h3 className="pb-2">{product.cost} <FontAwesomeIcon className="ml-3" icon={faCoins} /></h3>
                                <button>Redeem now</button>
                            </div>
                        </div>
                        }
                        
                    </div>
                    )
                })
            }
        </CardProduct>
    )
}


export default ProductCard
