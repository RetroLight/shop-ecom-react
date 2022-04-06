import React from "react";
import './CartDropdown.styles.scss';
import {connect} from "react-redux";

import CartItem from "../cart-item/CartItem.component";
import CustomButton from "../custom-button/CustomButton.component";

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)}
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);
