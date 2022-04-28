import React from "react";
import {CartDropdownContainer, EmptyText, CartItemsContainer, CartDropdownButton} from './CartDropdown.styles';

import {connect} from "react-redux";

import {withRouter} from "react-router-dom";

import CartItem from "../cart-item/CartItem.component";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length
                        ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        :
                        <EmptyText>Your cart is empty</EmptyText>
                }
            </CartItemsContainer>
            <CartDropdownButton onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')
            }}>CHECKOUT</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
    //Здесь используется мемоизация при помощи библиотеки reselect
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
