import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

const ShopPage = ({fetchCollections, match}) => {
    useEffect(() => {
        fetchCollections();
    }, [fetchCollections]);

    return (
        <div>
            <Route exact path={match.url} component={CollectionsOverviewContainer} />
            <Route path={`${match.url}/:collectionId`} component={CollectionContainer} />
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);