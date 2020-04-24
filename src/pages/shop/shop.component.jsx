import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop-actions';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import withSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinner = withSpinner(CollectionPage);

class ShopPage extends React.Component {
    unSubscribeFromSnapshot = null;
    state = {
        loading: true
    }

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collections);
            this.setState({loading: false});
        });
    }

    componentWillUnmount(){
        this.unSubscribeFromSnapshot()
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div>
                <Route exact path={match.url} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.url}/:collectionId`} render={(props) => <CollectionWithSpinner isLoading={loading} {...props} />} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: (collections) => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);