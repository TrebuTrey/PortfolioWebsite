// Modal.js
import React from 'react';
import './Modal.css';

export default function Modal({ show, onClose, title, issuer, issueDate, accreditationUrl, description }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <h3>{issuer}</h3>
        <h3>
          Issued:{" "}
          <a 
            href={accreditationUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cert-link"
          >
            {issueDate}
          </a>
        </h3>
        <p>{description}</p>
        <button onClick={onClose}><span>Close</span></button>
      </div>
    </div>
  );
}
