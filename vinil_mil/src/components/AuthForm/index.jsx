import React from 'react';

import './AuthForm.css'

const AuthForm = ({children}) => {

    return (
        <div className="auth-form-container">
            {children}
        </div>
    );
}
 
export default AuthForm;