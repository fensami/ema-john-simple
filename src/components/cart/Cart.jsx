import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = ({ cart, handleCleatCart, children }) => { //option-3
    // const cart = props.cart;//option-1
    // const {cart} = props; //option-2

    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }

        // product.quantity = product.quantity || 1;

        totalPrice = totalPrice + product.price * product.quantity
        totalShipping = totalShipping + product.shipping
        quantity = quantity + product.quantity
    }
    let tax = totalPrice * 7 / 100
    let grandTotal = totalPrice + totalShipping + tax


    return (
        <div className='cart'>
            <h2>show cart</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total price : ${totalPrice} </p>
            <p>Total Shipping : {totalShipping} </p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
            <button onClick={handleCleatCart} className='btn-clear-cart'>
                <span>clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
            {children}
        </div>
    );
};

export default Cart;