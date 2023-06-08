import React, { useState } from 'react';

import './AuthForm.css'
import PasswordField from './PasswordField';
import SubmitButton from './SubmitButton';
import UsernameField from './UsernameField';

const AuthForm = ({children, name, handleSubmit}) => {
    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit} className='auth-form'>
                {children}
                <SubmitButton>{name}</SubmitButton>
            </form>
        </div>
    );
}
 
export default AuthForm;