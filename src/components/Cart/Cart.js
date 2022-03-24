import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log('hello');
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity
    } 
   
    // const total = cart.reduce((previous, current) => {
    //     return previous + current.price
    // }, 0)
    // const shipping = cart.reduce((previous, current) => {
    //     return previous + current.shipping
    // }, 0)
    const totalPrice = total + shipping;
    const tax = (10 / 100) * totalPrice;
    const grandTotal = totalPrice + tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${ total }</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2) }</p>
            <h3>Grand Total: ${grandTotal.toFixed(2) }</h3>
        </div>
    );
};

export default Cart;