import React from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './ShoppingCartPage.css'

const ShoppingCartPage = ({ allVinyls, curUser, shoppingCart, setShoppingCart }) => {
    const navigate = useNavigate();

    function addProductUnity(productId) {
        const productObject = allVinyls.find(vinyl => vinyl.id == productId);
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
            if (newQty == 0) {
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
        navigate('/home');
    }

    function showProductInfo(productId, quantity) {
        const productObject = allVinyls.find(vinyl => vinyl.id == productId);
        if (productObject === undefined) return (
            <li key={productId}>
                <h2>(Erro ao carregar produto)</h2>
            </li>
        )

        return (
            <li key={productId}>
                <h2>{productObject.title}</h2>
                <p>Disponível em estoque: {productObject.available_qty}</p>
                <p>Quantidade selecionada: {quantity}</p>
                <button onClick={() => addProductUnity(productId)}>+</button>
                <button onClick={() => removeProductUnity(productId)}>-</button>
                <button onClick={() => removeProduct(productId)}>Remover</button>
            </li>
        )
    }

    return (
        <>
        <Header curUser={curUser} />

        <div className="shopping-cart">
            <h1>Carrinho de Compras</h1>

            {shoppingCart.size === 0 ? (
            <p className='empty-cart-message'>O carrinho está vazio.</p>
            ) : (
            <ul>
                {[...shoppingCart].map(([productId, quantity]) => showProductInfo(productId, quantity))}
            </ul>
            )}
            {shoppingCart.size !== 0 ? (
            <button className="leave-shopping-cart-page-button">Finalizar compra</button>
            ) : null
            }
        <button className="leave-shopping-cart-page-button" onClick={leaveShoppingCartPage}>Voltar</button>
        </div>
        <Footer />
        </>
    );
};

export default ShoppingCartPage;
