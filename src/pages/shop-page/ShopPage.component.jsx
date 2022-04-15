import React from "react";
import './ShopPage.styles.scss';
import {Route} from "react-router-dom";
import CollectionsOverview from "../../components/collection-overview/CollectionsOverview.component";
import CollectionPage from "../collection-page/CollectionPage.component";

const ShopPage = ({match}) => {
    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
        </div>
    )
}

export default ShopPage;
