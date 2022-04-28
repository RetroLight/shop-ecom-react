import React from "react";

import {CollectionPreviewContainer, PreviewContainer} from "./CollectionPreview.styles";

import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({title, items}) => {
    return(
        <CollectionPreviewContainer>
            <h1>{title}</h1>
            <PreviewContainer>
                {items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item}/>)}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;
