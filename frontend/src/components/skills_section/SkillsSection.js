// SkillsSection.js (or wherever your Skills section is)
import React from 'react';
import Certs from './Certs';
import './SkillsSection.css';
import ProgramBarChart from './ProgramBarChart'; 

export default function SkillsSection() {
  return (
    <section id="skills" className="section skills-section">
      <div className="content-container">
        <Certs />

        <div id="programming-langs" style={{ width: "100%", height: 300 }}>
          <ProgramBarChart />
        </div>
      </div>
    </section>
  );
}

