import React from 'react';
import '../FormField.css'

const UsernameField = ({children, name, handleChange}) => {
    return (
        <div className="field-container">
            <input name={name} type="text" className='field-text' onChange={handleChange} placeholder={children} required/>
        </div>
    );
}
 
export default UsernameField;