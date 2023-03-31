import React, { useState, useEffect } from 'react';
import "./shop.css"
import Product from './../product/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const [products, setProfucts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProfucts(data))
    }, [])

    const addToCart = (product) => {
        // console.log(product)
        const addNewCart = [...cart, product]
        setCart(addNewCart)

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
                        >

                        </Product>)
                }
            </div>
            <div className="products-summery">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;