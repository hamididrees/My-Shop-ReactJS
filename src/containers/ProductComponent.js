import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    
    
    return (
        <>
        <div className="card-container">
        {
            products.map((product) => {
                const {id, title, image, price} = product;
                const shortTitle = title.substring(0, 30);
                return (
                    
                            <div className="card" key={id}>
                                <div className="card-image">
                                    <img src={image} alt={id}/>
                                </div>
                                <div className="card-detail">
                                    <h3>{title.length > 20 ? `${shortTitle}...` : title}</h3>
                                    <div className="card-sub-detail">
                                        <h2>${price}</h2>
                                        <Link className="btn-link" to={`/product/${id}`}>Details</Link>
                                    </div>
                                </div>
                            </div>
                    
                  )
            })
        }
        </div>
        </>
    )
}
