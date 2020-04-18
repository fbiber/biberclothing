import {createSelector} from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.items
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (items) => items.reduce((accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity, 0)
)

export const selectItemsTotal = createSelector(
    [selectCartItems],
    (items) => items.reduce((accumulatorQuantity, cartItem) => accumulatorQuantity + (cartItem.quantity * cartItem.price), 0)
)