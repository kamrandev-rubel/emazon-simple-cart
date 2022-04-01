import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { name, img, price, shipping, quantity, id }= product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details-container'>
                <div className='review-item-info'>
                    <h2 title={name}>{name.length > 20 ? name.slice(0,20)+ '...': name}</h2>
                    <p>Price: <span className='orange-color'>{price}</span></p>
                    <p>Shipping: <span className='orange-color'>{shipping}</span></p>
                </div>
                <div className='review-delete'>
                    <button
                        // onClick={() => handleRemoveProduct(id)}
                        onClick={() => handleRemoveProduct(product)}
                    ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;