import React from 'react';
import '../EditField.css'

const EditField = ({children, name, value, handleChange}) => {
    return (
        <div className="edit-field-container">
            <p>{children}:</p>
            <input name={name} type="text" defaultValue={value} className='edit-field-text' onChange={handleChange} placeholder={children.toLowerCase()} autoComplete='new-password' required/>
        </div>
    );
}
 
export default EditField;