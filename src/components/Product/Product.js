import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, ratings, seller } = props.product
    console.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Product;