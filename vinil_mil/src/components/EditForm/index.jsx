import React from 'react';

import './EditForm.css'
import SubmitEditButton from './SubmitEditButton';

const EditForm = ({children, name, handleSubmit}) => {
    return (
        <div className="edit-form-container">
            <form onSubmit={handleSubmit} className='edit-form'>
                {children}
                <SubmitEditButton>{name}</SubmitEditButton>
            </form>
        </div>
    );
}
 
export default EditForm;