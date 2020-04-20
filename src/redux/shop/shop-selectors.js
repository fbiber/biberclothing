import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    (shop) => shop.shopData
);

export const selectCollections = createSelector(
    [selectShopData],
    (collectionsAsObject) => Object.keys(collectionsAsObject).map(collectionKey => collectionsAsObject[collectionKey])
);

export const selectCollection = (collectionName) => createSelector(
    [selectShopData],
    (collections) => collections[collectionName]
);