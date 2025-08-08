// Certs.js
import React from 'react';
import './Certs.css';
import { SiAmazonaws, SiDassaultsystemes, SiProcore, SiSmartsheet } from 'react-icons/si';

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Cloud Practitioner',
    issued: '2025',
    Icon: SiAmazonaws,
  },
  {
    id: 2,
    name: 'Solidworks Mechanical Designer - Associate',
    issued: '2018',
    Icon: SiDassaultsystemes,
  },
  {
    id: 3,
    name: 'Procore Certified',
    issued: '2023',
    Icon: SiProcore,
  },
  {
    id: 4,
    name: 'Smartsheet Certified',
    issued: '2023',
    Icon: SiSmartsheet,
  },
];

export default function Certs() {
  return (
    <div className="certifications">
      <h4>Certifications</h4>
      <div className="cert-list">
        {certifications.map(cert => (
          <div key={cert.id} className="cert-card">
            <img src={cert.logo} alt={`${cert.name} Logo`} className="cert-logo" />
            <div className="cert-info">
              <h5>{cert.name}</h5>
              <p>Issued: {cert.issued}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
