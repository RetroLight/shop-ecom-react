import {connect} from "react-redux";
import {compose} from "redux";
import {createStructuredSelector} from "reselect";

import {selectedCollectionsIsFetching} from "../../redux/shop/shop.selectors";
import {selectOverviewArray} from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/WithSpinner.component";

import CollectionsOverview from "../../components/collection-overview/CollectionsOverview.component";


const mapStateToProps = createStructuredSelector({
    isLoading: selectedCollectionsIsFetching,
    shopCollections: selectOverviewArray
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;
