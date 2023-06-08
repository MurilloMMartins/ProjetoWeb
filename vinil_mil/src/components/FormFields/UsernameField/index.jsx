import React from 'react';
import '../FormField.css'

const UsernameField = ({children}) => {
    return (
        <div className="field-container">
            <input type="text" className='field-text' placeholder={children}/>
        </div>
    );
}
 
export default UsernameField;