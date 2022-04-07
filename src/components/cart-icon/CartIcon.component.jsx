import React from "react";
import {ReactComponent as ShoppingBagIco} from "../../assets/124 shopping-bag.svg";
import './CartIcon.styles.scss';
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartIcon = ({toggleCartHidden, itemQuantity}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingBagIco className='shopping-icon'/>
            <span className='item-count'>{itemQuantity}</span>
        </div>
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
