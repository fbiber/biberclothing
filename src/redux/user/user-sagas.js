import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from '../user/user-action-types';
import {emailSignInStart, signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from '../user/user-actions';
import {auth, googleProvider, createUserFromDocument, getCurrentUser} from '../../firebase/firebase.utils';

export function* googleSignIn() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserFromDocument, user);
        const snapshot = yield userRef.get();
    
        yield put(signInSuccess({
            id: snapshot.id,
          ...snapshot.data()
          }));
    }
    catch(error) {
        yield put(signInFailure(error.message));
    }
    
}

export function* emailSignIn({payload: {email, password}}) {
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield createUserFromDocument(user);
        const snapshot = yield userRef.get();
    
        yield put(signInSuccess({
            id: snapshot.id,
          ...snapshot.data()
          }));
    }
    catch(error) {
        yield put(signInFailure(error.message));
    }
}

export function* checkUserSession() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        const userRef = yield createUserFromDocument(userAuth);
        const snapshot = yield userRef.get();
    
        yield put(signInSuccess({
            id: snapshot.id,
          ...snapshot.data()
          }));
    } catch(error) {
        yield put(signInFailure(error.message));
    }
}

export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    }
    catch(error) {
        yield put(signOutFailure(error.message));
    }
}

export function* signUp({payload: {email, password, displayName}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield createUserFromDocument(user, {displayName});

        yield put(signUpSuccess());
        yield put(emailSignInStart({email, password}));
    }
    catch(error) {
        yield put(signUpFailure(error.message));
    }
}

export function* onGoogleSignInStart () {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignInStart () {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* onSignOut() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession),
        call(onSignOut),
        call(onSignUpStart)
    ]);
}