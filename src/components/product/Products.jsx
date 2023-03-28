import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'

const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product

    const addBtnClick = props.addBtnClick
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : {price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => addBtnClick(props.product)} className='btn-cart'> 
            Add to cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Products;