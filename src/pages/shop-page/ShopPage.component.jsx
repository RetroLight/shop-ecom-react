import React from "react";

import {Route} from "react-router-dom";
import WithSpinner from './../../components/with-spinner/WithSpinner.component';
import CollectionsOverview from "../../components/collection-overview/CollectionsOverview.component";
import CollectionPage from "../collection-page/CollectionPage.component";

import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";

import {connect} from "react-redux";
import {updateCollections} from "../../redux/shop/shop.actions";

const WithSpinnerCollectionsOverview = WithSpinner(CollectionsOverview);
const WithSpinnerCollectionsPage = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionsRef = firestore.collection('collections')

        collectionsRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading: false})
        })
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`}
                       render={(props) => <WithSpinnerCollectionsOverview isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:categoryId`}
                       render={(props) => <WithSpinnerCollectionsPage isLoading={loading} {...props} />}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);
