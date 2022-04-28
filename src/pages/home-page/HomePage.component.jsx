import React from 'react';
import {HomePageContainer} from './HomePage.styles';

import DirectoryMenu from '../../components/directory-menu/DirectoryMenu.component';

const HomePage = (props) => {
    return (
        <HomePageContainer>
            <DirectoryMenu />
        </HomePageContainer>
    )
}

export default HomePage;
