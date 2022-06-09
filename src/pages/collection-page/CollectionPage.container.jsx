import {connect} from "react-redux";
import {compose} from "redux";
import CollectionPage from "../collection-page/CollectionPage.component";

import {createStructuredSelector} from "reselect";

import {collectionIsLoaded} from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/WithSpinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !collectionIsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

