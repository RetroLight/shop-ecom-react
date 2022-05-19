import React from 'react';
import {MenuItemContainer, CategoryBackgroundImage, ContentContainer} from './MenuItem.styles';

import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <CategoryBackgroundImage className='menuItem__backgroundImage' imageUrl={imageUrl}/>
            <ContentContainer className='menuItem__contentContainer'>
                <h1>{title.toUpperCase()}</h1>
                <span>SHOP NOW</span>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);
