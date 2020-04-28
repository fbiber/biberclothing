import UserActionTypes from './user-action-types';

export const googleSignInStart = () => {
    return {
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    }
};

export const emailSignInStart = (signInInformation) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: signInInformation
    }
};

export const signInSuccess = (user) => {
    return {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
};

export const signInFailure = (errorMessage) => {
    return {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: errorMessage
    }
};

export const checkUserSession = () => {
    return {
        type: UserActionTypes.CHECK_USER_SESSION
    }
};

export const signOutStart = () => {
    return {
        type: UserActionTypes.SIGN_OUT_START
    }
};

export const signOutSuccess = () => {
    return {
        type: UserActionTypes.SIGN_OUT_SUCCESS
    }
};

export const signOutFailure = (errorMessage) => {
    return {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: errorMessage
    }
};

export const signUpStart = (signUpInformation) => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: signUpInformation
    }
};

export const signUpSuccess = () => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS
    }
};

export const signUpFailure = (errorMessage) => {
    return {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: errorMessage
    }
};