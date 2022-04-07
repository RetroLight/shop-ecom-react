import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({googleBtn, inverted, children, onClick, type, ...otherProps}) => {
    return (
        <button className={`${inverted ? 'inverted' : ''} ${googleBtn ? 'google-sign-in' : ''} custom-button`}
                onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default CustomButton;
