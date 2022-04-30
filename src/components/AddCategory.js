import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2 ) {
            setCategories((arr) => {
                return [ inputValue, ...arr ];
            });
            setInputValue('');
        }

    }

    return (
        <form onSubmit = {handleInputSubmit} >
            <input 
                type = "text"
                value = { inputValue }
                onChange = {handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}