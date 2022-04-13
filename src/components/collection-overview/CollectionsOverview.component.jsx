import React from "react";
import './CollectionsOverview.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectShopCollections} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

const CollectionsOverview = ({shopCollections}) => {
    return (
        <div className='collections-overview'>
            {
                shopCollections.map(({id, ...collectionsProps}) => {
                    return <CollectionPreview key={id} {...collectionsProps}/>
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shopCollections: selectShopCollections
})
export default connect(mapStateToProps)(CollectionsOverview);
