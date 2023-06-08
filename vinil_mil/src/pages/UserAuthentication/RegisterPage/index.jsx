import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Spacer from 'react-spacer';

import AuthForm from '../../../components/AuthForm';
import PasswordField from '../../../components/AuthForm/PasswordField';
import UsernameField from '../../../components/AuthForm/UsernameField';

import '../UserAuthentication.css'

const RegisterPage = () => {
    const [inputs, setInputs] = useState({});

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
        <div className='auth-container'>
            <h1 className="website-name">Vinil Mil</h1>

            <AuthForm name='Registrar-se' handleSubmit={handleSubmit}>
                <UsernameField name="username" handleChange={handleChange}>Usuário</UsernameField>
                <Spacer height='32px'/>
                <UsernameField name="email" handleChange={handleChange}>E-mail</UsernameField>
                <Spacer height='32px'/>
                <PasswordField name="password" handleChange={handleChange}>Senha</PasswordField>
                <Spacer height='32px'/>
                <PasswordField name="confirm-password" handleChange={handleChange}>Confirmar Senha</PasswordField>
                <Spacer height='46px'/>
            </AuthForm>

            <Spacer height='24px'/>

            <div className="redirect-container">
                <p>Já possui conta?</p><Link to='/login' className='redirect-link'>Entrar</Link>
            </div>
        </div>
    );
}
 
export default RegisterPage;