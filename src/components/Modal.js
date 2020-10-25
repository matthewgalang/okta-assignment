import React from 'react';

const Modal = ({ modalData, toggleModal, hideModal, modalId, modalVisibility, modalTarget}) => {
    function handleButtonClick() {
        toggleModal(modalId)
    }

    function handleCloseClick() {
        hideModal()
    }

    return (
        <>
            <button className="modal-button" onClick={handleButtonClick}>
                <img src={modalData.imgSrc} alt={modalData.modalName}/>
            </button>
            <div className={((modalVisibility && modalTarget === modalId) ? "visible" : "") + " modal-container"}>
                <div className="modal-content">
                    <button className="modal-close" onClick={handleCloseClick}></button>
                    {modalData.modalContent}
                </div>
            </div>
        </>
    )
}

export default Modal