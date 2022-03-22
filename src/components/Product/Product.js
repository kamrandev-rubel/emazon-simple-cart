import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product
    console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h3 className='product-name'>{name}</h3>
                <h4 className='product-price'>Price: ${price}</h4>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings: {ratings} Star</small></p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>

            </button>
        </div>
    );
};

export default Product;