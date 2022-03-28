import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCartData = localStorage.getItem('shopping-cart')
        let storedCart;
        if (storedCartData) {
            storedCart = JSON.parse(storedCartData)  
        } else {
            storedCart = {}
        }
        
        const savedCart = []
        for (const id in storedCart){
            const addCartData = products.find(i => i.id === id);
            if (addCartData) {
                addCartData.quantity = storedCart[id]
                savedCart.push(addCartData)
            }
        }
        setCart(savedCart)
    }, [products])

    const addHandleCart = (selectedProduct) => {
        let newCart;
        const exists = cart.find(i => i.id = selectedProduct.id)
        if (exists) {
            const rest = cart.filter(i => i.id !== exists.id)
            exists.quantity = exists.quantity + 1;
            newCart=[...rest, exists]
        } else {
            selectedProduct.quantity=1
            newCart = [...cart, selectedProduct]
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addHandleCart={addHandleCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;