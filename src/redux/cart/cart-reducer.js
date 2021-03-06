import CartActionTypes from './cart-action-types';
import {addCartItem} from './cart-utils';
import {removeCartItem} from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    items: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                items: addCartItem(state.items, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                items: removeCartItem(state.items, action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CHECKOUT:
            return {
                ...state,
                items: state.items.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.CLEAR_CART:
            return {
                ...state,
                items: []
            }
        default:
            return state
    }
}

export default cartReducer;