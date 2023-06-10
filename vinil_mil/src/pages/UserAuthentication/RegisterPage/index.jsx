import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Spacer from 'react-spacer';

import AuthForm from '../../../components/AuthForm';
import PasswordField from '../../../components/AuthForm/PasswordField';
import UsernameField from '../../../components/AuthForm/UsernameField';

import '../UserAuthentication.css'

const RegisterPage = ({userMap, createUser}) => {
    const navigate = useNavigate();
    //this is necessary to load out body css style
    useEffect(()  => {
        document.body.classList.add('user-auth-body');
    
        return () => {
            document.body.classList.remove('user-auth-body');
        };
    });    


    const [inputs, setInputs] = useState({
        "username": "",
        "email": "",
        "password": "",
        "confirm-password": ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;   
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userMap.get(inputs["email"]) !== undefined) {
            console.log("Usuário já cadastrado!");
        }
        else if (inputs["password"] !== inputs["confirm-password"]) {
            console.log("As senhas diferem!");
        } else {
            createUser({
                "username": inputs["username"],
                "email": inputs["email"],
                "password": inputs["password"]
            });
            navigate("/home");
        }
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