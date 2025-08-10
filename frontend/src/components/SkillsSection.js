// SkillsSection.js (or wherever your Skills section is)
import React from 'react';
import Certs from './Certs';
import './SkillsSection.css'; // for your programming languages styles

const programmingLanguages = ['Python', 'Java','JavaScript/TypeScript', 'Excel VBA', 'Matlab'];

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="content-container">
        <Certs />
        
        <div className="programming-langs">
          <h4>Programming Languages</h4>
          <div className="lang-chips">
            {programmingLanguages.map(lang => (
              <span key={lang} className="lang-chip">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
