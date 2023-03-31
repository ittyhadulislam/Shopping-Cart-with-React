import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import "./cart.css"
const Cart = ({ cart }) => {
    // console.log(cart)
    let total = 0
    let shipping_total = 0
    let quantity = 0

    for (const product of cart) {
        product.quantity = product.quantity || 1
        total = total + (product.price * product.quantity)
        shipping_total = shipping_total + product.shipping
        quantity = quantity + product.quantity
    }

    const tax = (total * 7 / 100).toFixed(2)

    const grandTotal = parseFloat(total + shipping_total + tax).toFixed(2)

    return (
        <div className='cart-container'>
            <h2 className='title'>Order Summery</h2>
            <p>Select Item : {quantity}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping Charge : ${shipping_total}</p>
            <p>Tax : ${tax}</p>
            <h3 className='grand-total'>Grand Total : ${grandTotal}</h3>
            <br />
            <div className='button-group'>
                <button className='atc-button remove'>
                    Clear Cart
                    <span><FontAwesomeIcon icon={faTrash} /></span>
                </button>
                <button className='atc-button review-order'>
                    Review Order
                    <span><FontAwesomeIcon icon={faArrowRight} /></span>
                </button>
            </div>
        </div>
    );
};

export default Cart;