import React from 'react';

import './SubmitEditButton.css'

const SubmitEditButton = ({children}) => {
    return (
        <>
            <input type="submit" className='submit-edit-button' value={children}/>
        </>
    );
}
 
export default SubmitEditButton;