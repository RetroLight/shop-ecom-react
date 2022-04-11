import {cartActionTypes} from "./cart.types";
import {addCartItem, decreaseItemQuantity} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, action.payloads)
            }
        case cartActionTypes.DECREASE_CART_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemQuantity(state.cartItems, action.payloads)
            }
        case cartActionTypes.DELETE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payloads.id)
            }
        default:
            return state
    }
}

export default cartReducer;
