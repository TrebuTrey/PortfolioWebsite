// Create a new file: src/components/Navigation.js
import React, { useState, useRef, useEffect} from "react";
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

  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Used for smaller media devices
  const handleLinkClick = (sectionId) => {
    scrollToSection(sectionId);
    setMenuOpen(false); // closes menu after click
  };

  // Close menu if click happens outside of nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <img src="/icons/TP3_website_logo.png" alt="Trey Pubins Logo" />
          </div>
          {/* Hamburger menu button (only visible on mobile) */}
          <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
            ☰
          </button>
          <div className="nav-name">
            <h2>Trey Pubins</h2>
          </div>
        </div>

        {/* Menu links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <button onClick={() => handleLinkClick('home')} className="nav-link">
              About
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('skills')} className="nav-link">
              Skills
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('projects')} className="nav-link">
              Products/Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleLinkClick('contact')} className="nav-link">
              Contact
            </button>
          </li>
          <li>
            <button
              className="nav-link"
              onClick={() => window.open("/certificates/website-resume.pdf", "_blank", "noopener,noreferrer")}
            >
              Résumé
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;