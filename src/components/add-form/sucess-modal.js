import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './success-modal.css'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'antiquewhite',
      borderRadius:'12px'
    },
  };
function SuccessModal({ModalOpen,setModalOpen}) {
  return (
    <Modal isOpen={ModalOpen} style={customStyles}>
        <div className="modal-inner">
            <label>Expense added successfully!</label>
        <Link to='/'>
        <div className='take-home-button'>
            <i class="fi fi-rr-home"></i> Home
        </div>
        </Link>
        </div>
    </Modal>
  )
}

export default SuccessModal