import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = (props) => {
    return(
        <button className={`${props.googleBtn ? 'googleBtn' : ''} custom-button`} onClick={props.onClick} type={props.type}>
            {props.children}
        </button>
    )
}

export default CustomButton;
