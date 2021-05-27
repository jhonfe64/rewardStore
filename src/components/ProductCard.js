import React from 'react';
import CardProduct from '../elements/CardProduct';

function ProductCard({products}) {
    return (
        <CardProduct className='d-flex justify-content-between w-100'>
            {
                products.map((product)=>{
                    return (
                    <div className='ddd'>
                        <div className="imgContainer">
                            <img src={product.img.url} alt={product.name} />
                        </div>
                        <div className='description'>
                            
                        </div>
                    </div>
                    )
                })
            }
        </CardProduct>
    )
}

export default ProductCard
