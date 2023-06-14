import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CrudModal from '../../components/CrudModal';

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
            setAllVinyls(allVinyls.filter(vinyl => vinyl.id !== vinylId));
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
                <button onClick={() => handleVinylEdition(vinylObject)}>Editar</button>
                <button onClick={() => removeVinyl(vinylObject.id)}>Remover</button>
            </li>
        );
    };

    return (
        <>
            <Header curUser={curUser}/>
            <h1 style={{margin: '20px 0px 0px 20px'}}>Menu administrador</h1>
            <ul>
                {[...allVinyls].map(vinylObject => showVinylInfo(vinylObject))}
            </ul>
            <button onClick={handleVinylAddition}>Adicionar novo álbum</button>
            <CrudModal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} vinylObject={selectedVinylObject} saveModifications={saveModifications}/>
            <Footer />
        </>
    );
}
 
export default MenuAdminPage;