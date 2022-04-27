import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();
  console.log(cart);

  const handleRemoveProduct = (id) => {
    // const exists = cart.find(product => product._id === id)
    const newCart = cart.filter((product) => product._id !== id._id);
    setCart(newCart);
    removeFromDb(id._id);
  };

  return (
    <div className="shop-container">
      <div className="review-item-container">
        {cart.map((product) => (
          <ReviewItem
            key={product._id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button
            onClick={() => navigate("/shipment")}
            className="checkout-btn"
          >
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
