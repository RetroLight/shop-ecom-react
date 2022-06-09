import React from "react";
import {CollectionsOverviewContainer} from "./CollectionsOverview.styles";

import CollectionPreview from "../collection-preview/CollectionPreview.component";

// Этот компонент возвращается в компонент высокого порядка withSpinner и оттуда берет проп shopCollections
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

export default CollectionsOverview;
