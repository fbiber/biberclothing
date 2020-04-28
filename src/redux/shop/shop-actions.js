import ShopActionTypes from './shop-action-types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const updateCollections = (collections) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collections
    }
};

export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
};

export const fetchCollectionsSuccess = (collections) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: collections
    }
};

export const fetchCollectionsFailure = (errorMessage) => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload: errorMessage
    }
};
