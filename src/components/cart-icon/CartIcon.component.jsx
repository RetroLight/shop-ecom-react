import React from "react";
import {CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.styles';

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selectors";

import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden, itemQuantity, currentUser}) => {
    return (
        <CartIconContainer isActive={currentUser ? true : false} onClick={currentUser ? toggleCartHidden : null}>
            <ShoppingIcon />
            <ItemCount>{itemQuantity}</ItemCount>
        </CartIconContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    itemQuantity: selectCartItemsCount,
    currentUser: selectCurrentUser
    //Здесь используется мемоизация при помощи библиотеки reselect
})


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
