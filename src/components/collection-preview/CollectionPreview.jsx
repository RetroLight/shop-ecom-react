import React from "react";
import './collectionPreview.scss';

import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, index) => index < 4).map(({id, ...itemProps}) => <CollectionItem key={id} {...itemProps}/>)}
            </div>
        </div>
    )
}

export default CollectionPreview;
