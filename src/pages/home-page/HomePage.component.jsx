import React from 'react';
import './HomePage.styles.scss';

import DirectoryMenu from '../../components/directory-menu/DirectoryMenu.component';

const HomePage = (props) => {
    return (
        <div className='homepage'>
            <DirectoryMenu />
        </div>
    )
}

export default HomePage;