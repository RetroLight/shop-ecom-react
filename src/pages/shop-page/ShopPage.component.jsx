import React from "react";
import './ShopPage.styles.scss';
import CollectionsOverview from "../../components/collection-overview/CollectionsOverview.component";

const ShopPage = () => {
    return (
        <div className='shop-page'>
            <CollectionsOverview/>
        </div>
    )
}

export default ShopPage;
