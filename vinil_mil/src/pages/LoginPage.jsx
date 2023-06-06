import React from 'react';
import PasswordField from '../components/PasswordField';
import UsernameField from '../components/UsernameField';
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