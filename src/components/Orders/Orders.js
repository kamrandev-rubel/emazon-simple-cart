import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (id) => {
        // const exists = cart.find(product => product.id === id)
        const newCart = cart.filter(product => product.id !== id.id)
        setCart(newCart)
        removeFromDb(id.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-item-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} >
                    <button className='checkout-btn'>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;