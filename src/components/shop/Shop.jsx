import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Products from '../product/Products';
import './Shop.css'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        //step-1 get id
        for (const id in storedCart) {
            //step-2 get the product using id
            const addedProduct = products.find(product => product.id === id)
            // console.log(addedProduct);
            //step-3 get queantity of the product
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
            setCart(saveCart)
            console.log('added', addedProduct);

        }
    }, [products])
    const addBtnClick = (product) => {
        // console.log(product);
        // const newCart = [...cart, product]
        let newCart = [];
        const exixts = cart.find(pd => pd.id === product.id);
        if (!exixts) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exixts.quantity = exixts.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exixts]
        }
        setCart(newCart);
        addToDb(product.id)

    }
    const handleCleatCart = () => {
        setCart([]);
        deleteShoppingCart()

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addBtnClick={addBtnClick}
                    ></Products>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleCleatCart={handleCleatCart}
                >
                    <Link className='prossed-link' to="/orders">
                    <button className='btn-prossed'>Review orders</button>
                    </Link>
                </Cart>

            </div>

        </div>
    );
};

export default Shop;