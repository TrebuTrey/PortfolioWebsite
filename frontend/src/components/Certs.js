import React, { useState, useEffect } from 'react';
import './Certs.css';
import Modal from './Modal';

const certifications = [
  { 
    id: 1, 
    name: 'AWS Cloud Practitioner', 
    issuingOrganization: 'Amazon Web Services', 
    issued: 'July 2025', 
    description: 'Certified in Amazon Web Services (AWS) Cloud Practitioner Foundational, demonstrating a solid understanding of cloud concepts, core AWS services, pricing models, and best practices. Skilled in leveraging AWS to design scalable, secure, and cost-efficient solutions that support business innovation and agility.' , 
    domain: 'amazonaws.com',
    accreditation: 'https://www.credly.com/badges/865acb41-2132-4e76-bdb4-e62b80f031d8/linked_in_profile' 
  },
  { 
    id: 2, 
    name: 'Backend Software Developer', 
    issuingOrganization: 'Promineo Tech', 
    issued: 'June 2025', 
    description: 'Completed Promineo Tech\'s Backend Software Development Program, covering core Java programming, object-oriented principles, and backend application structure. Trained in Spring Boot for building RESTful APIs and Java Database Connectivity (JDBC) for managing data persistence, with hands-on projects reinforcing each concept.', 
    domain: '',
    accreditation: '' 
  },
  {
    id: 3,
    name: 'Lean Six Sigma - Green Belt',
    issuingOrganization: 'Arizona State University',
    issued: 2020,
    description: 'Certified Lean Six Sigma Green Belt, skilled in applying data-driven methodologies to identify process inefficiencies and implement continuous improvement strategies. Experienced in leading projects that reduce waste, improve quality, and enhance operational performance.',
    domain: 'asu.edu',
    accreditation: ''
  },
  { 
    id: 4, 
    name: 'Solidworks Mechanical Designer - Associate', 
    issuingOrganization: 'Dassault Systemes', 
    issued: '2018', 
    description: 'Certified SolidWorks Mechanical Designer - Associate, demonstrating proficiency in transforming 2D blueprints into fully realized 3D models. Skilled in applying geometric dimensioning and tolerancing (GD&T) to ensure precision, and converting detailed 3D designs back into accurate technical drawings for manufacturing.', 
    domain: '3ds.com',
    accreditation: '' 
  },
  { 
    id: 5, 
    name: 'Procore Certification - Superintendent', 
    issuingOrganization: 'Procore Technologies', 
    issued: '2023', 
    description: 'Certified in Procore Superintendent, demonstrating expertise in leveraging the platform\'s tools to manage construction workflows, coordinate subcontractors, and oversee project schedules. Skilled in using Procore to ensure on-site efficiency and effective communication throughout project phases.', 
    domain: 'procore.com',
    accreditation: 'https://verify.skilljar.com/c/t73j9ao5greu' 
  },
  { 
    id: 6, 
    name: 'Smartsheet Core App', 
    issuingOrganization: 'Smartsheet', 
    issued: 'November 2022', 
    description: 'Certified in Smartsheet Core App, showcasing proficiency in utilizing Smartsheet\'s features to streamline project management, automate workflows, and collaborate effectively across teams. Experienced in building and managing sheets, reports, and dashboards to drive project visibility and accountability.', 
    domain: 'smartsheet.com',
    accreditation: 'https://www.credly.com/badges/4c8d7d76-2cd8-4177-8024-7d00dec57f8f/linked_in_profile' 
  },
];

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
