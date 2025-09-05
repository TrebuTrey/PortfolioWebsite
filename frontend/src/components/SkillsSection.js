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
          <h4>Programming Language Experience</h4>
          <div className="skills-bar-chart">
            <ul className="bar-chart">
              {/* Backdrop lines */}
              <div className="y-axis">
                <div key={5} className="y-line">5+</div>
                <div key={4} className="y-line">4</div>
                <div key={3} className="y-line">3</div>
                <div key={2} className="y-line">2</div>
                <div key={1} className="y-line">1</div>
                <div key={0} className="y-line"></div>
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
