import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart , setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
        // console.log(id);
    }
    const handleCleatCart = () => {
        setCart([]);
        deleteShoppingCart()
        
    }
    // console.log(products);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem 
                    key={product.id}
                    product={product}
                    handleRemoveFromCart = {handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                cart = {cart}
                handleCleatCart = {handleCleatCart}>
                    
                    <Link className='prossed-link' to= "/checkout">
                    <button className='btn-prossed'>Prosid Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Orders;