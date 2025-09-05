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
          <div className="skills-bar-chart">
            <ul className="bar-chart">
              {/* Backdrop lines */}
              <div className="y-axis">
                {[5, 4, 3, 2, 1, 0].map(i => (
                  <div key={i} className="y-line">{i} yr</div>
                ))}
              </div>
              {programmingLanguages.map((lang) => {
                const heightPercent = (lang.experience / 5) * 100; // scale 1-5 to 0-100%
                return (
                  <li key={lang.language} className="bar-wrapper">
                    <div
                      className="bar"
                      style={{ height: `${heightPercent}%` }}
                      title={`${lang.language}: ${lang.experience}`}
                    ></div>
                    <span className="bar-label">{lang.language}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
