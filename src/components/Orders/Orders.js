import { faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (id) => {
        // const exists = cart.find(product => product.id === id)
        const newCart = cart.filter(product => product.id !== id.id)
        setCart(newCart)
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
                <Cart cart={cart} />
            </div>
        </div>
    );
};

export default Orders;