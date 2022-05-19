import React from "react";
import {CollectionPreviewContainer, PreviewContainer} from "./CollectionPreview.styles";

import {withRouter} from "react-router-dom";

import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({history, match, title, items, routeName}) => {
    return(
        <CollectionPreviewContainer>
            <h1 onClick={() => history.push(`${match.path}/${routeName}`)}>{title}</h1>
            <PreviewContainer>
                {items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item}/>)}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default withRouter(CollectionPreview);
