import React, { useState, useEffect } from 'react';
import Spacer from 'react-spacer'
import { Link, useNavigate } from 'react-router-dom';

import PasswordField from '../../../components/AuthForm/PasswordField';
import UsernameField from '../../../components/AuthForm/UsernameField';
import AuthForm from '../../../components/AuthForm';
import api from '../../../config';

import '../UserAuthentication.css'
import './LoginPage.css'

const LoginPage = ({ setCurUser, allUsers }) => {
    const navigate = useNavigate();
    
    useEffect(()  => {
        //this is necessary to load out body css style
        document.body.classList.add('user-authentication-body');
    
        return () => {
            document.body.classList.remove('user-authentication-body');
        };
    });    

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;   
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        api.post("/user", inputs)
            .then(response => {
                const data = response.data[0];
                setCurUser(data);
                navigate('/home');
            })
            .catch(error => alert("Login inválido"));
    }

    return (
    <div className="auth-container">
        <h1 className='website-name'>Vinil Mil</h1>

        <Spacer height='50px'/>
        
        <AuthForm name='Entrar' handleSubmit={handleSubmit}>
            <UsernameField name="email" handleChange={handleChange}>Usuário ou e-mail</UsernameField>
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