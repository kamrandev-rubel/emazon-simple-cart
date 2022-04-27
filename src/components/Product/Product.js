import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { addHandleCart, product } = props;
  const { name, img, price, ratings, seller } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <h4 className="product-price">Price: ${price}</h4>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} Star</small>
        </p>
      </div>
      <button onClick={() => addHandleCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
