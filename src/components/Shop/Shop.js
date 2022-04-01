import { Link } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    const addHandleCart = (selectedProduct) => {


        let newCart;
        const exists = cart.find(i => i.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(i => i.id !== exists.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]

        }

        //**********************************************************8 */
        // let newCart = [];
        // const exists = cart.find(i => i.id === selectedProduct.id)
        // if (!exists) {
        //     selectedProduct.quantity = 1
        //     newCart = [...cart, selectedProduct]
        // } else {
        //     const rest = cart.filter(i => i.id !== selectedProduct.id)
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists]
        // }

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
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button className='orders-review-btn'>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;