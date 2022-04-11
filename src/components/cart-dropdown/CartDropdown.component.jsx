import React from "react";
import './CartDropdown.styles.scss';
import {connect} from "react-redux";

import {withRouter} from "react-router-dom";

import CartItem from "../cart-item/CartItem.component";
import CustomButton from "../custom-button/CustomButton.component";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                        ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                        :
                        <span className='empty-text'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => {
                dispatch(toggleCartHidden())
                history.push('/checkout')
            }}>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
    //Здесь используется мемоизация при помощи библиотеки reselect
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
