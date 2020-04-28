import {createSelector} from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
    [selectShop],
    (shop) => shop.shopData
);

export const selectCollections = createSelector(
    [selectShopData],
    (collectionsAsObject) => collectionsAsObject ? Object.keys(collectionsAsObject).map(collectionKey => collectionsAsObject[collectionKey]) : []
);

export const selectCollection = (collectionName) => createSelector(
    [selectShopData],
    (collections) => collections ? collections[collectionName] : null
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    (shop) => shop.isFetching
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shop) => !!shop.shopData
)