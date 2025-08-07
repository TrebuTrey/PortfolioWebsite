// Update your src/App.js file

import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="content-container">
          <h1>Welcome to My Portfolio</h1>
          <p>This is your home section where you can introduce yourself and showcase your main content.</p>
        </div>
      </section>

      {/* Projects Section - Placeholder for future content */}
      <section id="projects" className="section projects-section">
        <div className="content-container">
          <h2>Products & Projects</h2>
          <p>This section will showcase your projects and products. Coming soon!</p>
        </div>
      </section>

      {/* Contact Section - Now a separate component */}
      <Contact />
    </div>
  );
}

export default App;