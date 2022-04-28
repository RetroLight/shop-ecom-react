import React from "react";
import {CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, EmptyCheck, TotalPrice, TestDataCard} from './CheckoutPage.styles';

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {selectCartTotalPrice} from "../../redux/cart/cart.selectors";

import CheckItem from "../../components/check-item/CheckItem.component";
import StripeCheckoutButton from "../../components/StripeCheckoutButton/StripeCheckoutButton.component";

const CheckoutPage = ({cartItems, totalCartPrice}) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.length ? cartItems.map(item => <CheckItem cartItem={item}/>) : <EmptyCheck>Your cart is empty =(</EmptyCheck>}
            <TotalPrice>
                <span>total ${totalCartPrice}</span>
            </TotalPrice>
            <TestDataCard>
                <span>Test card data</span>
                <span>Card number: 4242 4242 4242 4242</span>
                <span>Exp date: 01/23 CVC: 123</span>
            </TestDataCard>
            <StripeCheckoutButton price={totalCartPrice}/>
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalCartPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);
