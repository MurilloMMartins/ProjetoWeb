 import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IconContext } from 'react-icons'

import './FormField.css'
import './ShowPassword.css'

const PasswordField = ({children}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasswordClick = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="field-container">
            {/* Here we change the input type so the user can see it's password */}
            <input type={showPassword ? "text" : "password"} className='field-text' style={{width: '98%'}} placeholder={children}/>
            <input type="checkbox" className='password-checkbox' id='password-checkbox' onClick={handleShowPasswordClick}/>
            <label htmlFor='password-checkbox'>
                {/* This IconContext is necessary to change the size of the icons */}
                <IconContext.Provider value={{size: '20px' , className: 'show-password-icon' }}>
                    {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye/>}
                </IconContext.Provider>
            </label>
        </div>
    );
}
 
export default PasswordField;