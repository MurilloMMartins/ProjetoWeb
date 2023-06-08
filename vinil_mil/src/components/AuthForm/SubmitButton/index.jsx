import React from 'react';

import './SubmitButton.css'

const SubmitButton = ({children}) => {
    return (
        <>
            <input type="submit" className='submit-button' value={children}/>
        </>
    );
}
 
export default SubmitButton;