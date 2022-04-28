import React from 'react';
import {CollectionItemContainer, Image, CollectionFooter, CollectionName, CollectionPrice, AddBtn} from './CollectionItem.styles';


import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItemToCart}) => {
    const {imageUrl, name, price} = item
    return(
        <CollectionItemContainer>
            <Image className='CollectionItemImage' imageUrl={imageUrl}/>
            <CollectionFooter>
                <CollectionName>{name}</CollectionName>
                <CollectionPrice>{price}$</CollectionPrice>
            </CollectionFooter>
            <AddBtn onClick={() => addItemToCart(item)} inverted>Add to cart</AddBtn>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
