import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (items) => items.reduce((accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity, 0)
)