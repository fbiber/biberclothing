export const addCartItem = (cartItems, cartItemToAdd) => {
    var existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem 
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if(existingItem) {
        if(existingItem.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
        } else {
            return cartItems.map(cartItem =>
                cartItem.id === cartItemToRemove.id ?
                {...cartItem, quantity: cartItem.quantity - 1} :
                cartItem
            );
        }
    }

    return cartItems;
}