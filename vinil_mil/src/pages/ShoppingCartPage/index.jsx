import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductModal from '../../components/ProductModal';

import './ShoppingCartPage.css'

const ShoppingCartPage = ({ allVinyls, curUser, shoppingCart, setShoppingCart }) => {
    const navigate = useNavigate();

    function addProductUnity(productId) {
        const productObject = allVinyls.find(vinyl => vinyl._id === productId);
        const curQty = shoppingCart.get(productId);
        const newQty = Math.min(productObject.available_qty, curQty+1);
        if (newQty !== curQty) {
            shoppingCart.set(productId, newQty);
            setShoppingCart(new Map(shoppingCart));
        }
    }

    function removeProductUnity(productId) {
        const curQty = shoppingCart.get(productId);
        const newQty = Math.max(1, curQty-1);
        if (newQty !== curQty) {
            if (newQty === 0) {
                shoppingCart.delete(productId);
            } else {
                shoppingCart.set(productId, newQty);
            }
            setShoppingCart(new Map(shoppingCart));
        }
    }

    function removeProduct(productId) {
        shoppingCart.delete(productId);
        setShoppingCart(new Map(shoppingCart));
    }

    function leaveShoppingCartPage() {
        navigate(-1);
    }

    function showProductInfo(productId, quantity) {
<<<<<<< HEAD
        const productObject = allVinyls.find(vinyl => vinyl.id === productId);
=======
        const productObject = allVinyls.find(vinyl => vinyl._id === productId);
>>>>>>> 7ef3ae02f6fc08fb89477e2cea07fade0bd63cc5
        if (productObject === undefined || productObject.available_qty === 0) {
            shoppingCart.delete(productId);
            setShoppingCart(shoppingCart);
            return null;
        }
        
        if (quantity > productObject.available_qty) {
            shoppingCart.set(productId, productObject.available_qty);
            setShoppingCart(shoppingCart);
        }

        return (
            <li key={productId}>
                <h2>{productObject.title}</h2>
                <p>Disponível em estoque: {productObject.available_qty}</p>
                <p>Quantidade selecionada: {quantity}</p>
                <p>Valor: R${productObject.price},00</p>
                <button onClick={() => addProductUnity(productId)}>+</button>
                <button onClick={() => removeProductUnity(productId)}>-</button>
                <button onClick={() => removeProduct(productId)}>Remover</button>
                <button onClick={() => handleVinylClick(productId)}>Detalhes</button>
            </li>
        )
    }

    const [openModal, setOpenModal] = useState(false);
    const [selectedVinylObject, setSelectedVinylObject] = useState();

    function handleVinylClick(productId) {
        const vinylObject = allVinyls.find(vinyl => vinyl._id === productId);
        setSelectedVinylObject(vinylObject);
        setOpenModal(true);
    }

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        for(const item of shoppingCart){
            const product = allVinyls.find(vinyl => vinyl._id === item[0]);
            if (product !== undefined) {
                totalPrice += product.price * item[1];
            }
        }
        return totalPrice.toString();
    }

    const FinishOrder = () => {
        if(curUser === undefined){
            navigate('/login');
            return;
        }
        navigate('/finish-order');
    }

    return (
        <>
        <Header curUser={curUser} />

        <div className="shopping-cart">
            <h1>Carrinho de Compras</h1>

            {shoppingCart.size === 0 ? (
            <p className='empty-cart-message'>O carrinho está vazio.</p>
            ) : (
            <>
                <ul>
                    {[...shoppingCart].map(([productId, quantity]) => showProductInfo(productId, quantity))}
                </ul>
                <h3>Valor Total: R${calculateTotalPrice()},00</h3>
            </>
            )}
            {shoppingCart.size !== 0 ? (
            <button className="leave-shopping-cart-page-button" onClick={FinishOrder}>Finalizar compra</button>
            ) : null
            }
        <button className="leave-shopping-cart-page-button" onClick={leaveShoppingCartPage}>Voltar</button>
        </div>
        <ProductModal isOpen={openModal} setOpenModal={() => {setOpenModal(!openModal)}} vinylObject={selectedVinylObject} allowItemAddition={false}/>
        <Footer />
        </>
    );
};

export default ShoppingCartPage;
