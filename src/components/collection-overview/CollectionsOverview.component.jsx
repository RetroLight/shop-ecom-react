import React from "react";
import {CollectionsOverviewContainer} from "./CollectionsOverview.styles";

import {createStructuredSelector} from "reselect";
import {selectOverviewArray} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const CollectionsOverview = ({shopCollections}) => {
    return (
        <CollectionsOverviewContainer>
            {
                shopCollections.map(({id, ...collectionsProps}) => {
                    return <CollectionPreview key={id} {...collectionsProps}/>
                })
            }
        </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    shopCollections: selectOverviewArray
})
export default connect(mapStateToProps)(CollectionsOverview);
