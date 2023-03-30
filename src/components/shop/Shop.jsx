import React, { useState, useEffect } from 'react';
import "./shop.css"
import Product from './../product/Product';

const Shop = () => {
    const [products, setProfucts] = useState([])

    useEffect(() => {
        fetch("products.json")
            .then(response => response.json())
            .then(data => setProfucts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            product={product}
                            key={product.id}
                        >

                        </Product>)
                }
            </div>
            <div className="products-summery">
                <h2>Order Summery</h2>
            </div>
        </div>
    );
};

export default Shop;