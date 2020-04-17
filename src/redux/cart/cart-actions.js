import CartActionTypes from './cart-action-types';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});