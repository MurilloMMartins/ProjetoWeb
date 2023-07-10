import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CrudModal from '../../components/CrudModal';
import api from '../../config';

import './MenuAdminPage.css'

const MenuAdminPage = ({ curUser, allVinyls, setAllVinyls }) => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedVinylObject, setSelectedVinylObject] = useState();

    const userIsAdmin = (curUser !== undefined && curUser.admin_privileges === true);
    useEffect(() => {
        if (!userIsAdmin) {
            navigate('/home');
        }
    }, [userIsAdmin, navigate]);

    if (!userIsAdmin) return null;

    function removeVinyl(vinylId) {
        if (window.confirm("Confirmar exclusão do item?")) {
            api.delete(`/vinyl/${vinylId}`)
            .then(response => {
                if (response.status === 200) {
                    setAllVinyls(allVinyls.filter(vinyl => vinyl.id !== vinylId));
                }
            })
        }
    }

    function handleVinylEdition(vinylObject) {
        setSelectedVinylObject(vinylObject);
        setOpenModal(true);
    }

    function handleVinylAddition() {
        setSelectedVinylObject(undefined);
        setOpenModal(true);
    }

    function saveModifications(vinylObject) {
        if (vinylObject.id === undefined) {
            let greatestId = 0;
            for (const vinyl of allVinyls) {
                greatestId = Math.max(greatestId, vinyl.id);
            }
            vinylObject.id = greatestId + 1;
        }
        setAllVinyls([...(allVinyls.filter(vinyl => vinyl.id !== vinylObject.id)), vinylObject]);
    }
    
    function showVinylInfo(vinylObject) {
        return (
            <li key={vinylObject.id}>
                <h2>{vinylObject.title}</h2>
                <p>Valor: R${vinylObject.price}.00</p>
                <p>Disponível em estoque: {vinylObject.available_qty}</p>
                <button className="menu-admin-vinyl-action-button" onClick={() => handleVinylEdition(vinylObject)}>Editar</button>
                <button className="menu-admin-vinyl-action-button" onClick={() => removeVinyl(vinylObject.id)}>Remover</button>
            </li>
        );
    };

    return (
        <>
            <Header curUser={curUser}/>
            <div className="menu-admin">
                <h1 style={{margin: '20px 0px 0px 20px'}}>Menu administrador</h1>
                <button className="menu-admin-vinyl-action-button add-vinyl-button" onClick={handleVinylAddition}>Adicionar novo álbum</button>
                <ul>
                    {[...allVinyls].map(vinylObject => showVinylInfo(vinylObject))}
                </ul>
                <CrudModal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} vinylObject={selectedVinylObject} saveModifications={saveModifications}/>
            </div>
            <Footer />
        </>
    );
}
 
export default MenuAdminPage;