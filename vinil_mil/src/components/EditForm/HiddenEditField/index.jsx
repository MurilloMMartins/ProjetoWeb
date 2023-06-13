 import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import '../EditField.css'
import './HiddenEditField.css'

const HiddenEditField = ({children, name, value, handleChange, required=true}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="edit-field-container">
            <p>{children}:</p>
            {/* Here we change the input type so the user can see it's password */}
            <input name={name} type={showPassword ? "text" : "password"} defaultValue={value} className='edit-field-text' onChange={handleChange} style={{width: '94%'}} placeholder={children} autoComplete='new-password' required={required}/>
            <input type="checkbox" className='hidden-checkbox' id={name} onClick={handleShowPasswordClick}/>
            <label htmlFor={name}>
                {/* This IconContext is necessary to change the size of the icons */}
                <IconContext.Provider value={{size: '20px' , className: 'show-hidden-icon' }}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}
                </IconContext.Provider>
            </label>
        </div>
    );
}
 
export default HiddenEditField;