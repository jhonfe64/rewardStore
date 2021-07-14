import { product } from 'prelude-ls';
import React from 'react';
// import CardProduct from '../elements/CardProduct';
import RedeemProductCar from '../elements/RedeemProductCardStyles'
import {Link} from 'react-router-dom';
import '../App.css'

function RedeemProductCard({products}) {
    return (
        <>
        <div className='d-flex flex-wrap justify-content-between col-12 p-0 mt-5'>
        <h1 className="w-100 mt-5 mb-5">Productos redimidos</h1>
         {
             products[0].map((product)=>{
                return(
                  <RedeemProductCar className="mb-4 pb-4">
                      <div className="w-100">
                        <img className="w-100" src={product.img.url} alt={product.name} />
                      </div>
                     
                      <h4 className="text-center">{product.name}</h4>
                  </RedeemProductCar>
                )
             })
         }
         <div className="w-100 mb-5">
             <Link className="backbtn pr-5 pl-5 pt-2 pl-2 pb-2" to="/">Volver</Link>
         </div>
        </div>
        </>
        
    )
}

export default RedeemProductCard;
