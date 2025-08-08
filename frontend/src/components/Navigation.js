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
        <div className="nav-logo">
          <h2>TP3</h2>
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