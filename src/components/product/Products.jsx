import React from 'react';
import './Products.css'

const Products = (props) => {
    const {img,name,price,seller,ratings}=props.product
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Price : {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
            
        </div>
    );
};

export default Products;