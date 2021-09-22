import React, {useContext, useState, useEffect} from 'react';
import CardProduct from '../elements/CardProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {CoinsContext} from '../context/actualCoinsContext'; //TAL VEZ SEA ESTO
import {ProductIdContext} from '../context/productid'
import {SuccessModalContext} from '../context/successModalCotext';
import {Link} from 'react-router-dom';

function ProductCard({products}) {
    
    let {coinsFigure, updateCoinsFigure} = useContext(CoinsContext); 
    const {successModalStatus, updateSuccessmodal} = useContext(SuccessModalContext);
    const [productPrice, setProductPrice] = useState(0);

    const {updateProductId}  = useContext(ProductIdContext);

   
    const setProductCost = (e) => {
        setProductPrice(e.target.getAttribute('productcost'));
        if(coinsFigure > 0){
            updateSuccessmodal(true);
        }
    }

    //TOCA HACER LA PETICION PARA ENVIAR EL PRODUCTO POR POST A LA API , DESPUES HACER LA PETICION EN FILTERS
    //AHORA EN LA PAGINA DEL HISTORIAL, PARA VER LOS PRODUCTOS LE HACEMOS UN USEeFFECT Y QUE HAGA LA PETICON
    //CUANDO CARGUE LA PAGINA Y MUESTRA LOS PRODUCTOS
    
    const setProductId = (e) => {
        updateProductId(e.target.getAttribute('productid'));
    }

    localStorage.setItem('actualCoinsFigure', coinsFigure);

    useEffect(()=>{
        if(coinsFigure > 0 && productPrice > 0 && successModalStatus === true){
            updateCoinsFigure(coinsFigure - Number(productPrice));
        }
    },[successModalStatus, productPrice]);
  

    return (
        <CardProduct className='d-flex flex-wrap justify-content-between w-100'>
            {
                products.map((product)=>{
                    return (
                    <div  key={product.name} className='cardContainer mb-5 position-relative pt-3 pr-3'>
                        {
                             coinsFigure < product.cost ? 
                             <h4 className="position-absolute noBuy">
                                 te faltan {product.cost - coinsFigure}
                                <FontAwesomeIcon className="ml-3" icon={faCoins} />
                            </h4>: 
                            <h4 className="position-absolute buy d-flex mr-3"><FontAwesomeIcon icon={faShoppingBag} /></h4>
                        }
                       
                        <div className="imgContainer">
                            <img src={product.img.url} alt={product.name} />
                        </div>
                        <div className='description'>
                            <h4 className='text-center mb-1 mt-3'>{product.name}</h4>
                            <h5 className='text-center pb-4'>{product.category}</h5>
                        </div>
                        {
                            product.cost - coinsFigure < 0 ?
                            <div className="position-absolute hoverPrice d-flex justify-content-center align-items-center">
                                <div>
                                    <h3 className="pb-2">{product.cost} <FontAwesomeIcon className="ml-3" icon={faCoins} /></h3>
                                    <button className="p-2 w-100" onClick={(e)=> {setProductCost(e); setProductId(e)}} productcost={product.cost} productid = {product._id}>Redimir ahora</button>
                                </div>
                            </div>:
                            <div className="position-absolute hoverPrice rechargeCoins d-flex justify-content-center align-items-center">
                                <div>
                                    <h3 className="mb-3">No tienes suficiente dinero</h3>
                                    <Link className="nav-link active  w-100 d-block p-2 text-center" target="_blank" to="/get-coins">Obtener mas monedas</Link>
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
