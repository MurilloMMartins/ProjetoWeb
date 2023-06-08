import React from 'react';
import PasswordField from '../components/FormFields/PasswordField';
import UsernameField from '../components/FormFields/UsernameField';
import './LoginPage.css'

const LoginPage = () => {
    return (
    <>
        <UsernameField>Usuário ou e-mail</UsernameField>
        <PasswordField>Senha</PasswordField>
    </>
    );
}
 
export default LoginPage;