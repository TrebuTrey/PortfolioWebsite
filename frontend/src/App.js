// Update your src/App.js file

import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Contact from './components/Contact';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="section about-section">
        <div className="content-container">
          <h1>Bridging design, engineering, and practical solutions to empower smarter project management.</h1>
          <p>
            My journey began with a solid foundation in mechanical engineering, embedded systems and manufacturing optimization,

            where I developed a deep appreciation for precision, process, and real-world problem solving. 

            Beginning my career applying practical engineering skills through real-time troubleshooting and process efficiency, 

            I developed a strong foundation that prepared me to advance into supervisory and management roles, leading complex semiconductor 

            projects from execution to delivery.
          </p>
          <p>
            Leveraging this unique blend of engineering rigor and industry experience, I specialize in creating software solutions tailored to enhance 
            
            decision-making in project management. Whether it's developing dashboards, automation tools, or data-driven insights, I bring an approach that balances 
            
            technical excellence with usability. Passionate about marrying thoughtful design with practicality, I strive to build tools that are not only functional but 
            
            also intuitive and scalable — enabling teams to operate more efficiently and confidently. I enjoy collaborating across disciplines, tackling challenges with 
            
            creative yet pragmatic solutions, and continuously learning to stay at the forefront of both engineering and software development.
          </p>
          <p>
            Feel free to explore my skillsets and projects below, or reach out if you're interested in connecting or collaborating.
          </p>
        </div>
      </section>

      {/* Skills Section - Fill up with certificates experience */}
      <section id='skills' className='section skills-section'>
        <div className='content-container'>
          <h2>Skills and Certifications</h2>
          <SkillsSection />
        </div>
      </section>

      {/* Projects Section - Placeholder for future content */}
      <section id="projects" className="section projects-section">
        <div className="content-container">
          <h2>Products & Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Contact Section - Now a separate component */}
      <Contact />
    </div>
  );
}

export default App;