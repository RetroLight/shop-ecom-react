import React from "react";

import {Route} from "react-router-dom";
import CollectionsOverviewContainer from "../../components/collection-overview/CollectionsOverview.container";
import CollectionPageContainer from "../collection-page/CollectionPage.container";

import {connect} from "react-redux";
import {shopActionTypes} from "../../redux/shop/shop.types";
import {updateCollectionsStart} from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={match.path} component={CollectionsOverviewContainer}/>
                <Route path={`${match.path}/:categoryId`} component={CollectionPageContainer}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(updateCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);
