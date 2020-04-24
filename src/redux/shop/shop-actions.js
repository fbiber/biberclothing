import ShopActionTypes from './shop-action-types';

export const updateCollections = (collections) => {
    return {
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload: collections
    }
};