import React from "react";
import {CollectionPageContainer, TitleContainer, ItemsContainer} from './CollectionPage.styles';

import {connect} from "react-redux";

import {selectedCollection} from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/CollectionItem.component";

// Этот компонент возвращается в компонент высокого порядка withSpinner и оттуда берет проп collection
const CollectionPage = ({collection}) => {
    const {title, items} = collection
    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <ItemsContainer>
                {items.map(item => <CollectionItem item={item}/>)}
            </ItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectedCollection(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
