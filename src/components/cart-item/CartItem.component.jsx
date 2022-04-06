import React from 'react';
import './CartItem.styles.scss';

const CartItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item
    return (
        <div className='cart-item'>
            <img src={imageUrl} alt="Item"/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span>{quantity}x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem;
