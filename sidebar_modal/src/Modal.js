import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
    const { isModalopen, closeModal } = useGlobalContext()
    return (
        <div className={`${isModalopen ? 'modal-overlay show-modal' : 'modal-overlay'}`}>
            <div className='modal-container'>
                <h3>Modal Content</h3>
                <button className='close-modal-btn' onClick={closeModal}>
                    <FaTimes></FaTimes>
                </button>
            </div>
        </div>
    )
}

export default Modal