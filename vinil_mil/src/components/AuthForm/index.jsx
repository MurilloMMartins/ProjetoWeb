import React from 'react';

import './AuthForm.css'
import SubmitButton from './SubmitButton';

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