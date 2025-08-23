import React, { useState } from 'react';
import './Certs.css';
import Modal from './Modal';
import { certifications } from '../data/data';

export default function Certs() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certifications">
      <h3>Degrees & Certifications</h3>
      <div className="cert-list">
        {certifications.map(({ id, name, issuingOrganization, issued, accreditation, description, image }) => (
          <div
            key={id}
            className="cert-card"
            onClick={() => setSelectedCert({ name, issuingOrganization, issued, accreditation, description, image })}
          >
            {image? (
              <img src={image} alt={`${name} logo`} className="cert-logo" />
            ) : (
              <div className="cert-placeholder">📜</div>
            )}
            <div className="cert-info">
              <h5>{name}</h5>
            </div>
            <div className="tooltip">Click to Learn More</div>
          </div>
        ))}
      </div>

      <Modal
        show={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.name}
        issuer={selectedCert?.issuingOrganization}
        issueDate={selectedCert?.issued}
        accreditationUrl={selectedCert?.accreditation}
        description={selectedCert?.description || 'No description available.'}
      />
    </div>
  );
}
