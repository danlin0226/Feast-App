import React from "react";

import "./Modal.scss";

function Modal({ children, title, setIsOpen }) {
  return (
    <>
      <div className="modal-overlay">
        <div className={`modal-content`}>
          <h1>{title}</h1>
          <button onClick={() => setIsOpen(false)}>Close</button>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;
