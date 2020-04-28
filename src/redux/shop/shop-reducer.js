import ShopActionTypes from './shop-action-types';

const INITIAL_STATE = {
    shopData: null,
    isFetching: false,
    errorMessage: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                shopData: action.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}

export default shopReducer;