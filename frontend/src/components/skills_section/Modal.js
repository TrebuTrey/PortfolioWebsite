// Modal.js
import React from 'react';
import './Modal.css';

export default function Modal({ show, onClose, title, issuer, issueDate, accreditationUrl, description }) {
  if (!show) return null;

  const passedUrl = accreditationUrl.startsWith("http")
    ? accreditationUrl
    : `${process.env.PUBLIC_URL}${encodeURI(accreditationUrl)}`; //encode spaces for local files

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <h3>{issuer}</h3>
        <h3>
          Issued:{" "}
          {issueDate}
        </h3>
        <p>{description}</p>
        <div className="modal-buttons">
          <button className="close-btn" onClick={onClose}>
            <span>Close</span>
          </button>
          <a href={passedUrl} target="_blank" rel="noopener noreferrer">
            <button className="verify-btn">
              <span>Verify</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
