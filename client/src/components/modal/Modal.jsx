import React from "react";

import "./Modal.scss";

import close from "../../assets/icons/close.png";

function Modal({ children, setIsOpen, smallModal, largeModal }) {
  return (
    <>
      <div className="modal-overlay">
        <div
          className={`modal-content ${smallModal && "modal-content--small"} ${
            largeModal && "modal-content--large"
          }`}
        >
          <div className="modal">
            <img
              className="modal__close"
              onClick={() => setIsOpen(false)}
              src={close}
              alt=""
            />
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
