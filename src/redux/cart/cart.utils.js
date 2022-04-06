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
