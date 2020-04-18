import CartActionTypes from './cart-action-types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeCartItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const clearItemFromCheckout = (item) => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT,
    payload: item
});