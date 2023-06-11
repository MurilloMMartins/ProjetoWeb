import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spacer from 'react-spacer';
import EditForm from '../../components/EditForm';
import EditField from '../../components/EditForm/EditField';
import HiddenEditField from '../../components/EditForm/HiddenEditField';
import Header from '../../components/Header';

import './ProfilePage.css'

const ProfilePage = ({curUser, changeData, setCurUser}) => {
    const navigate = useNavigate();

    const [data, setData] = useState(curUser);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(values => ({...values, [name]: value}));
    }

    const handleBasicInfoChange = (event) => {
        event.preventDefault();
        changeData(curUser, data);
    }

    const handleSecurityInfoChange = (event) => {
        event.preventDefault();
        changeData(curUser, data);
    }

    const logOff = () => {
        setCurUser(undefined);
        navigate('/home');
    }

    return (
        <>
            <Header curUser={curUser}/>
            <div className="edit-profile">
                <h1>Perfil</h1>
                <div className="edit-container">
                    <h2>Informações Básicas</h2>
                    <div className="edit-content">
                        <div className="profile-image-container">
                            <p>Foto de Perfil</p>
                            <img className='profile-image-edit' src={require('../../data/placeholders/default-profile.png')} alt='Profile'/>
                            <Spacer height={'10px'}/>
                            <button className='edit-photo'>Alterar Foto</button>
                        </div>

                        <div className='basic-info-container'>
                            <EditForm name={'Salvar Alterações'} handleSubmit={handleBasicInfoChange}>
                                <EditField name={'username'} value={data.username} handleChange={handleChange}>Usuário</EditField>
                                <Spacer height={'10px'}/>
                                <EditField name={'email'} value={data.email} handleChange={handleChange}>E-mail</EditField>
                                <Spacer height={'45px'}/>
                            </EditForm>
                        </div>
                    </div>
                </div>

                <Spacer height={'20px'}/>

                <div className='edit-container'>
                    <h2>Informações de Segurança</h2>
                    <EditForm name={'Salvar Alterações'} handleSubmit={handleSecurityInfoChange}>
                        <HiddenEditField name={'password'} value={data.password} handleChange={handleChange}>Senha</HiddenEditField>
                        <Spacer height={'10px'}/>
                        <HiddenEditField name={'card'} value={'XXXX-XXXX-XXXX-XXXX'}>Cartão</HiddenEditField>
                        <Spacer height={'10px'}/>
                    </EditForm>
                </div>

                <Spacer height={'10px'}/>

                <button className='log-off-user-button' onClick={logOff}>Sair da Conta</button>
            </div>

        </>
    );
}
 
export default ProfilePage;