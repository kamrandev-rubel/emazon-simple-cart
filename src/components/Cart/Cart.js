import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let shipping = 0
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * quantity
        shipping = shipping + product.shipping *quantity
    }
    const totalPrice = total + shipping
    const taxCount = (10 / 100) * totalPrice
    const grandPrice = totalPrice + taxCount;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${taxCount.toFixed(2)}</p>
            <h3>Grand Total: ${grandPrice.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;