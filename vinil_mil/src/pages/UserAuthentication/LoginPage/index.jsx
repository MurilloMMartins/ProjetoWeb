import React from 'react';
import Spacer from 'react-spacer'

import PasswordField from '../../../components/AuthForm/PasswordField';
import UsernameField from '../../../components/AuthForm/UsernameField';
import AuthForm from '../../../components/AuthForm';
import '../UserAuthentication.css'

const LoginPage = () => {
    return (
    <div className="auth-container">
        <h1 className='website-name'>Vinil Mil</h1>
        
        <AuthForm>
            <UsernameField>Usuário ou e-mail</UsernameField>
            <Spacer height='39px'/>
            <PasswordField>Senha</PasswordField>
        </AuthForm>
        
    </div>
    );
}
 
export default LoginPage;