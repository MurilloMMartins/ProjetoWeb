import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MenuAdminPage = ({ curUser, allVinyls, setAllVinyls, addItemToShoppingCart }) => {
    const navigate = useNavigate();

    const userIsAdmin = (curUser !== undefined && curUser.admin_privileges === true);
    useEffect(() => {
        if (!userIsAdmin) {
            navigate('/home');
        }
    }, [userIsAdmin, navigate]);

    if (!userIsAdmin) return null;

    function showVinylInfo(vinylObject) {
        return (
            <li key={vinylObject.id}>
                <h2>{vinylObject.title}</h2>
                <p>Valor: R${vinylObject.price}.00</p>
                <p>Disponível em estoque: {vinylObject.available_qty}</p>
                <button>Editar</button>
                <button onClick={() => removeVinyl(vinylObject.id)}>Remover</button>
            </li>
        );
    };

    function removeVinyl(vinylId) {
        if (window.confirm("Confirmar exclusão do item?")) {
            setAllVinyls(allVinyls.filter(vinyl => vinyl.id !== vinylId));
        }
    }

    return (
        <>
            <Header curUser={curUser}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Menu administrador</h1>
            <ul>
                {[...allVinyls].map(vinylObject => showVinylInfo(vinylObject))}
            </ul>
            <Footer />
        </>
    );
}
 
export default MenuAdminPage;