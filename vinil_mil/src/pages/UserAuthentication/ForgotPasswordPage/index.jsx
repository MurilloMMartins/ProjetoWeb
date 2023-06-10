import React, { useEffect, useState } from 'react';
import Spacer from 'react-spacer';
import AuthForm from '../../../components/AuthForm';
import UsernameField from '../../../components/AuthForm/UsernameField';

import '../UserAuthentication.css'
import './ForgotPasswordPage.css'

const ForgotPasswordPage = ({ allUsers }) => {
    //this is necessary to load out body css style
    useEffect(()  => {
        document.body.classList.add('user-authentication-body');
    
        return () => {
            document.body.classList.remove('user-authentication-body');
        };
    });    

    const [resetEmail, setResetEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(resetEmail == "" || !allUsers.some(user => user.email === resetEmail)){
            alert("E-mail inválido!");
            return;
        }

        alert(`Email de reset foi mandado para ${resetEmail}`);
    }

    const handleChange = (event) => {
        setResetEmail(event.target.value);
    }

    return (
        <div className="auth-container" style={{height: '400px'}}>
            <h1 className='website-name'>Vinil Mil</h1>
            <h2 className='forgot-password-message'>Insira abaixo o e-mail da conta:</h2>

            <Spacer height={'30px'}/>

            <AuthForm name='Enviar email de mudança de senha' handleSubmit={handleSubmit}>
                <UsernameField name="email" handleChange={handleChange}>E-mail</UsernameField>
                <Spacer height={'30px'}/>
            </AuthForm>
        </div>
    );
}
 
export default ForgotPasswordPage;