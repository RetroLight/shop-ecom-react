import React from 'react';
import {FormInputLabel, FormInputContainer, GroupContainer} from './FormInput.styles';


const FormInput = ({handleChange, label, ...inputProps}) => {
    return (
        <GroupContainer>
            <FormInputContainer onChange={handleChange} type="text" {...inputProps}/>
            {
                label ? <FormInputLabel className={inputProps.value.length ? 'labelShrink' : ''}>{label}</FormInputLabel> : null
            }
        </GroupContainer>
    )
}

export default FormInput;
