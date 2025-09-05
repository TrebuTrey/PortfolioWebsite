// SkillsSection.js (or wherever your Skills section is)
import React from 'react';
import Certs from './Certs';
import './SkillsSection.css'; // for your programming languages styles
import { programmingLanguages } from '../data/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="content-container">
        <Certs />
        
        <div className="programming-langs">
          <h4>Programming Languages</h4>
          <div className="lang-chips">
            <ul className="lang-chips">
              {programmingLanguages.map(lang => (
                <li key={lang.language} className="lang-chip-wrapper">
                  <div
                    className="lang-chip"
                    style={{
                      "--chip-padding-multiplier": lang.experience
                    }}
                  >
                    {lang.language}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
