import React from 'react';
import './DirectoryMenu.styles.scss';
import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import MenuItem from '../menu-item/MenuItem.component';

import {selectDirectorySections} from "../../redux/directory/directory.selectors";

const DirectoryMenu = ({directorySections}) => {
    return (
        <div className='directory-menu'>
            {directorySections.map(({id, ...otherProps}) => {
                return <MenuItem id={id} {...otherProps}/>
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    directorySections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
