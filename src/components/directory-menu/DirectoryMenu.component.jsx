import React from 'react';
import {DirectoryMenuContainer} from "./DirectoryMenu.styles";

import {connect} from "react-redux";

import {createStructuredSelector} from "reselect";
import MenuItem from '../menu-item/MenuItem.component';

import {selectDirectorySections} from "../../redux/directory/directory.selectors";

const DirectoryMenu = ({directorySections}) => {
    return (
        <DirectoryMenuContainer>
            {directorySections.map(({id, ...otherProps}) => {
                return <MenuItem id={id} {...otherProps}/>
            })}
        </DirectoryMenuContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    directorySections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);
