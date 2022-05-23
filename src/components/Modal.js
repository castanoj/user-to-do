import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, closeModal, children }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal_dialog" onClick={handleModalDialogClick}>
        <div className="name-button">
          <h1>New User</h1>
          <button className="buttonx" onClick={closeModal}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
