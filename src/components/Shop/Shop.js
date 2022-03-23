import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart]= useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getStoreCart()
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            console.log(addedProduct);
        }
    },[])

    const addHandleCart = (product)=>{
        const newcart = [...cart, product]
        setCart(newcart)
        addToDb(product.id)
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