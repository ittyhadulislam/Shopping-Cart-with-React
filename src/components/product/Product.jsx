import React from 'react';
import "./product.css"

const product = (props) => {
    // console.log(props.product)
    const { name, img, price, seller, ratings } = props.product
    const addToCart = props.addToCart

    return (
        <div class="card">
            <div className='inner-content'>
                <img src={img} alt="" srcset="" />
                <div class="container">
                    <div className='name-price'>
                        <h4><b>{name}</b></h4>
                        <h4><b>Price : ${price}</b></h4>
                    </div>
                    <hr />
                    <div className='manufacture-rating'>
                        <p>Manufacture : {seller}</p>
                        <p>Rating : {ratings}</p>
                    </div>
                </div>
            </div>
            <button onClick={() => addToCart(props.product)} className='atc-btn'>Add to Cart</button>
        </div>
    );
};

export default product;