// Create a new file: src/components/Navigation.js
import './Navigation.css';

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="/icons/TP3_website_logo.png" alt="Trey Pubins Logo" />
          </div>
          <div className="nav-name">
            <h2>Trey Pubins</h2>
          </div>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-link"
            >
              About
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('skills')}
              className="nav-link"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className="nav-link"
            >
              Products/Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;