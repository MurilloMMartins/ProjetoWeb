import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spacer from 'react-spacer';
import EditForm from '../../components/EditForm';
import EditField from '../../components/EditForm/EditField';
import HiddenEditField from '../../components/EditForm/HiddenEditField';
import Header from '../../components/Header';

import './FinishOrderPage.css'

const FinishOrderPage = ({ curUser, shoppingCart, setShoppingCart, allVinyls, setAllVinyls }) => {
    const navigate = useNavigate();

    const [orderInfo, setOrderInfo] = useState({
        "card_number": curUser.card_number,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setOrderInfo(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Obrigado por comprar com a VinilMil");

        for(const item of shoppingCart){
            const newItem = allVinyls.find(vinyl => vinyl.id === item[0]);
            newItem.available_qty -= item[1];

            setAllVinyls(allVinyls.filter(vinyl => vinyl !== item[0]));
            setAllVinyls(vinyls => [...vinyls, newItem]);
        }
        setShoppingCart(new Map());

        navigate('/home');
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for(const item of shoppingCart){
            const product = allVinyls.find(vinyl => vinyl.id === item[0]);
            totalPrice += product.price * item[1];
        }
        return totalPrice.toString();
    }

    return (
        <>
            <Header curUser={curUser}/>
            <div className="finish-order-container">
                <h1>Finalizar Compra</h1>

                <EditForm name={'Finalizar Compra'} handleSubmit={handleSubmit}>
                    <div className="info-container">
                        <h2>Informação de Endereço</h2>
                        <EditField name={'country'} handleChange={handleChange}>País/Região</EditField>
                        <Spacer height={'10px'}/>
                        <EditField name={'cep'} handleChange={handleChange}>CEP</EditField>
                        <Spacer height={'10px'}/>
                        <EditField name={'state'} handleChange={handleChange}>Estado</EditField>
                        <Spacer height={'10px'}/>
                        <EditField name={'city'} handleChange={handleChange}>Cidade</EditField>
                        <Spacer height={'10px'}/>
                        <EditField name={'address'} handleChange={handleChange}>Endereço</EditField>
                        <Spacer height={'10px'}/>
                        <EditField name={'complement'} handleChange={handleChange}>Complemento</EditField>
                    </div>

                    <div className="info-container">
                        <h2>Informação de Pagamento</h2>
                        <HiddenEditField name={'card_number'} value={orderInfo.card_number} handleChange={handleChange} required={true}>Número do cartão</HiddenEditField>
                        <Spacer height={'10px'}/>
                        <p>Total: R${calculateTotalPrice()},00</p>
                    </div>
                </EditForm>
            </div>
        </>
    );
}
 
export default FinishOrderPage;