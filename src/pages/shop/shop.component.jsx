import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';

class ShopPage extends React.Component {
    componentDidMount() {
        const {fetchCollections} = this.props;
        fetchCollections();
    }

    render() {
        const {match} = this.props;
        return (
            <div>
                <Route exact path={match.url} component={CollectionsOverviewContainer} />
                <Route path={`${match.url}/:collectionId`} component={CollectionContainer} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollections: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);