import UserActionTypes from './user-action-types';

const initialState = {
    currentUser: null,
    errorMessage: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_UP_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                errorMessage: null
            }
        case UserActionTypes.SIGN_OUT_SUCCESS: 
            return {
                ...state,
                currentUser: null,
                errorMessage: null
            }
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;