import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MenuAdminPage = ({ curUser, allVinyls, setSelectedVinyls, addItemToShoppingCart }) => {
    const navigate = useNavigate();

    const userIsAdmin = (curUser !== undefined && curUser.admin_privileges === true);
    useEffect(() => {
        if (!userIsAdmin) {
            navigate('/home');
        }
    }, [userIsAdmin, navigate]);

    if (!userIsAdmin) return null;


    return (
        <>
            <Header curUser={curUser}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Menu administrador</h1>
            <Footer />
        </>
    );
}
 
export default MenuAdminPage;