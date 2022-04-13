import React from 'react';
import './CheckItem.styles.scss';

import {connect} from "react-redux";

import {addItem, deleteCartItem, decreaseCartItem} from "../../redux/cart/cart.actions";

const CheckItem = ({cartItem, deleteCartItem, decreaseCartItem, addCartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => decreaseCartItem(cartItem)}>&#10094;</div>
                <span className='quantityVal'>{quantity}</span>
                <div className='arrow' onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => deleteCartItem(cartItem)}>
                <span>&#10005;</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: item => dispatch(deleteCartItem(item)),
    decreaseCartItem: item => dispatch(decreaseCartItem(item)),
    addCartItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckItem);
