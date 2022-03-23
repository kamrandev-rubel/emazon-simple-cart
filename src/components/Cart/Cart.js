import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // let total = 0;
    // let shipping = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    //     shipping = shipping + product.shipping
    // }
    const total = cart.reduce((previous, current) => {
        return previous + current.price
    },0)
    const shipping = cart.reduce((previous, current) => {
        return previous + current.shipping
    }, 0)
    const totalPrice = total + shipping;
    const tax = (10 / 100) * totalPrice;
    const grandTotal = totalPrice + tax
    // const taxTotal = Math.round(tax)
    const taxTotal = tax.toFixed(2)
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${ total }</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${taxTotal }</p>
            <h3>Grand Total: ${ grandTotal}</h3>
        </div>
    );
};

export default Cart;