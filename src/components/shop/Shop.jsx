import React, { useState, useEffect } from 'react';
import "./shop.css"
import Product from './../product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProfucts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProfucts(data))
    }, [])

    useEffect(() => {
        const storeCart = getShoppingCart()
        const saveCart = []
        // console.log(storeCart)
        for (const id in storeCart) {
            // console.log(id)
            const saveProducts = products.find(product => product.id === id)
            // console.log(saveProducts)
            if (saveProducts) {
                const quantity = storeCart[id]
                saveProducts.quantity = quantity
                saveCart.push(saveProducts)
            }
            // console.log(saveProducts)
        }
        setCart(saveCart)
        
    }, [products])

    const addToCart = (product) => {
        // console.log(product)
        const addNewCart = [...cart, product]
        setCart(addNewCart)
        addToDb(product.id)

        const shoppingCart = getShoppingCart()
        // console.log(shoppingCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                        ></Product>)
                }
            </div>
            <div className="products-summery">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;