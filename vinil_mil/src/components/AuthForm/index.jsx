import React from 'react';

import './AuthForm.css'
import SubmitButton from './SubmitButton';

const AuthForm = ({children, name}) => {
    /**
        @todo: Find a way to submit the login information to the parent
    **/
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