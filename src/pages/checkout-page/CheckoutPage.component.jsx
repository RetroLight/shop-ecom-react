import React from "react";
import './CheckoutPage.styles.scss';

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {selectCartTotalPrice} from "../../redux/cart/cart.selectors";

import CheckItem from "../../components/check-item/CheckItem.component";

const CheckoutPage = ({cartItems, totalCartPrice}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>product</span>
                </div>
                <div className="header-block">
                    <span>description</span>
                </div>
                <div className="header-block">
                    <span>quantity</span>
                </div>
                <div className="header-block">
                    <span>price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>
            </div>
            {cartItems.length ? cartItems.map(item => <CheckItem cartItem={item}/>) : <div className='empty-check'>Your cart is empty =(</div>}
            <div className='total'>
                <span>total ${totalCartPrice}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCartPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);
