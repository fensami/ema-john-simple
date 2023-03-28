import React from 'react';
import './Cart.css'

const Cart = ({cart}) => { //option-3
    // const cart = props.cart;//option-1
    // const {cart} = props; //option-2

    let total = 0;
    for (const product of cart){
        total = total + product.price
    }

   
    return (
        <div className='cart'>
            <h2>show cart</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total price : {total} </p>
            <p>Total Shipping : </p>
            <p>Tax: </p>
            <h6>Grand Total</h6>
        </div>
    );
};

export default Cart;