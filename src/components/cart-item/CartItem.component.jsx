import React from 'react';
import {CartItemContainer, ItemDetailsContainer, ItemImage, ItemName} from "./CartItem.styles.js";

const CartItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt='Image'/>
            <ItemDetailsContainer>
                <ItemName>{name}</ItemName>
                <span>{quantity}x ${price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default CartItem;
