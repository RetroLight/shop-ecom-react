import {cartActionTypes} from "./cart.types";

export const toggleCartHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: cartActionTypes.ADD_CART_ITEM,
    payloads: item
})

export const decreaseCartItem = item => ({
    type: cartActionTypes.DECREASE_CART_ITEM_QUANTITY,
    payloads: item
})

export const deleteCartItem = item => ({
    type: cartActionTypes.DELETE_CART_ITEM,
    payloads: item
})
