import React, { useState } from 'react';
import Spacer from 'react-spacer'
import { Link } from 'react-router-dom';

import PasswordField from '../../../components/AuthForm/PasswordField';
import UsernameField from '../../../components/AuthForm/UsernameField';
import AuthForm from '../../../components/AuthForm';

import '../UserAuthentication.css'
import './LoginPage.css'

const LoginPage = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;   
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
    <div className="auth-container">
        <h1 className='website-name'>Vinil Mil</h1>

        <Spacer height='50px'/>
        
        <AuthForm name='Entrar' handleSubmit={handleSubmit}>
            <UsernameField name="username" handleChange={handleChange}>Usuário ou e-mail</UsernameField>
            <Spacer height='39px'/>
            <PasswordField name="password" handleChange={handleChange}>Senha</PasswordField>
            <Link to='/forgot-password' className="forgot-password-text">Esqueci a senha</Link>
            <Spacer height='46px'/>
        </AuthForm>

        <Spacer height='48px'/>

        <div className='redirect-container'>
            <p>Não tem conta?</p><Link to='/register' className='redirect-link'>Registrar</Link>
        </div>
        
    </div>
    );
}
 
export default LoginPage;