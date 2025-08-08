import React, { useState, useEffect } from 'react';
import './Certs.css';

const certifications = [
  { id: 1, name: 'Amazon AWS', issued: '2025', domain: 'amazonaws.com' },
  { id: 2, name: 'Dassault Systemes', issued: '2018', domain: '3ds.com' },
  { id: 3, name: 'Procore', issued: '2023', domain: 'procore.com' },
  { id: 4, name: 'Smartsheet', issued: '2023', domain: 'smartsheet.com' },
];

export default function Certs() {
  const [logos, setLogos] = useState({});

  useEffect(() => {
    async function fetchLogos() {
      const newLogos = {};

      for (const cert of certifications) {
        if (!cert.domain) {
          newLogos[cert.id] = null;
          continue;
        }

        try {
          const response = await fetch(`http://localhost:5000/api/logo/${cert.domain}`);
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
      <h4>Certifications</h4>
      <div className="cert-list">
        {certifications.map(({ id, name, issued }) => (
          <div key={id} className="cert-card">
            {logos[id] ? (
              <img src={logos[id]} alt={`${name} logo`} className="cert-logo" />
            ) : (
              <div className="cert-placeholder">📜</div>
            )}
            <div className="cert-info">
              <h5>{name}</h5>
              <p>Issued: {issued}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
