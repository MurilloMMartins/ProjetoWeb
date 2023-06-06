import React from 'react';
import './UsernameField.css'

const UsernameField = ({children}) => {
    return (
        <div className="field-container">
            <input type="text" className='field-text' placeholder={children}></input>
        </div>
    );
}
 
export default UsernameField;