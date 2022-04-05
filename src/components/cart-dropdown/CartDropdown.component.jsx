import React from "react";
import './CartDropdown.styles.scss';

import CustomButton from "../custom-button/CustomButton.component";

const CartDropdown = (props) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>

            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;
