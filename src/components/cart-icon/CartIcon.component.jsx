import React from "react";
import {CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.styles';

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden, itemQuantity}) => {
    return (
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIcon />
            <ItemCount>{itemQuantity}</ItemCount>
        </CartIconContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    itemQuantity: selectCartItemsCount
    //Здесь используется мемоизация при помощи библиотеки reselect
})


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
