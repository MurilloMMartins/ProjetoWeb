import React from 'react';

import './AuthForm.css'
import SubmitButton from './SubmitButton';

const AuthForm = ({children, name}) => {
    return (
        <div className="auth-form-container">
            <form onSubmit={console.log("submited")} className='auth-form'>
                {children}
                <SubmitButton>{name}</SubmitButton>
            </form>
        </div>
    );
}
 
export default AuthForm;