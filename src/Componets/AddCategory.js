import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        
        setInputValue( e.target.value );

    }

    const handeSubmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            
            setCategories( cats => [ inputValue,...cats  ]);

            setInputValue('');
        }


    }

    return (
        <form onSubmit = { handeSubmit }>
           <input
                type='text'
                value = { inputValue }
                onChange = { handleInputChange }
                className='animate__animated animate__fadeIn animate__fadeIn-1.7s'
                placeholder='Search'
           />
        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
