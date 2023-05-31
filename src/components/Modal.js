import React from "react";
import "./Modal.css";

const Modal = ({ errorMessage, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Error</h2>
        <p>{errorMessage}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
