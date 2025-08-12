import React, { useState, useEffect } from 'react';
import './Certs.css';
import Modal from './Modal';
import { certifications } from '../data/data';

export default function Certs() {
  const [logos, setLogos] = useState({});
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    async function fetchLogos() {
      const newLogos = {};

      for (const cert of certifications) {
        if (!cert.domain) {
          newLogos[cert.id] = null;
          continue;
        }

        try {
          const response = await fetch(`${cert.domain}`);
          if (!response.ok) throw new Error('Failed to fetch logo');

          const data = await response.json();
          console.log(JSON.stringify(data, null, 2));

          const logoUrl = data.logoUrl || null;
          newLogos[cert.id] = logoUrl;
        } catch (error) {
          console.error(`Error fetching logo for ${cert.name}:`, error);
          newLogos[cert.id] = null;
        }
      }

      setLogos(newLogos);
    }

    fetchLogos();
  }, []);

  return (
    <div className="certifications">
      <h3>Degrees & Certifications</h3>
      <div className="cert-list">
        {certifications.map(({ id, name, issuingOrganization, issued, accreditation, description }) => (
          <div
            key={id}
            className="cert-card"
            onClick={() => setSelectedCert({ name, issuingOrganization, issued, accreditation, description })}
          >
            {logos[id] ? (
              <img src={logos[id]} alt={`${name} logo`} className="cert-logo" />
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
