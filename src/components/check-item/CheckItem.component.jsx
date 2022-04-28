import React from 'react';

import {CheckoutItemContainer, TextContainer, ImageContainer, QuantityContainer, RemoveBtn} from "./CheckItem.styles";

import {connect} from "react-redux";

import {addItem, deleteCartItem, decreaseCartItem} from "../../redux/cart/cart.actions";


const CheckItem = ({cartItem, deleteCartItem, decreaseCartItem, addCartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item"/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => decreaseCartItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>${price}</TextContainer>
            <RemoveBtn onClick={() => deleteCartItem(cartItem)}>
                <span>&#10005;</span>
            </RemoveBtn>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    deleteCartItem: item => dispatch(deleteCartItem(item)),
    decreaseCartItem: item => dispatch(decreaseCartItem(item)),
    addCartItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckItem);
