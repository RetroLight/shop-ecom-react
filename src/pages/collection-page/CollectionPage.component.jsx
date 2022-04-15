import React from "react";
import './CollectionPage.styles.scss';

import {connect} from "react-redux";

import {selectedCollection} from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/CollectionItem.component";

const CollectionPage = ({collection}) => {
    const {title, items} = collection
    console.log(collection)
    return (
        <div className='collection-page'>
            <h1 className='title'>{title}</h1>
            <div className="items">
                {items.map(item => <CollectionItem item={item}/>)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectedCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
