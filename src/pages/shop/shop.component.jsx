import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({shopData, match}) => {
    return (
        <div>
            <Route exact path={match.url} component={CollectionOverview} />
            <Route path={`${match.url}/:collectionId`} component={CollectionPage} />
        </div>
    );
};

export default ShopPage;