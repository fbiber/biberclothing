import React from 'react';
import './form-input.styles.scss';

const FormInput = ({label, onChange, ...otherInputProps}) => (
    <div className="group">
        <input className="form-input" onChange={onChange} {...otherInputProps}></input>
        {
            label ? (
            <label 
                className={`${otherInputProps.value.length ? 'shrink' : ''} form-input-label `}>{label}</label>
             ) :
            null
        }
    </div>
)

export default FormInput;