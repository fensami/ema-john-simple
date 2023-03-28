import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Products from '../product/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    },[])
    const addBtnClick = (product) => {
        // console.log(product);
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id)

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addBtnClick = {addBtnClick}
                    ></Products>)
                }

            </div>
            <div className="cart-container">
               <Cart cart = {cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;