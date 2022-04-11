export const addCartItem = (cartItems, addedCartItem) => {
    const existingItem = cartItems.find(item => item.id === addedCartItem.id);
    if (existingItem) {
        return cartItems.map(cartItem => cartItem.id === addedCartItem.id ? {
            ...cartItem,
            quantity: cartItem.quantity + 1
        } : cartItem)
    } else {
        return [...cartItems, {...addedCartItem, quantity: 1}]
    }
}

export const decreaseItemQuantity = (cartItems, itemToRemove) => {
    const selectingItem = cartItems.find(item => item.id === itemToRemove.id)

    return selectingItem.quantity !== 1 ?
        cartItems.map(item => item.id === selectingItem.id ? {
            ...item,
            quantity: item.quantity - 1
        } : item)
        :
        cartItems.filter(item => item.id !== selectingItem.id)
}
