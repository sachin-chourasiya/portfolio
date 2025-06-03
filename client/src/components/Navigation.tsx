import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeNav(); // Close mobile menu when clicking nav link
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav 
      className="navbar navbar-expand-lg fixed-top"
      style={{ 
        background: scrolled 
          ? 'rgba(255, 255, 255, 0.98)' 
          : 'rgba(255, 255, 255, 0.95)' 
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => handleNavClick(e, "#home")}>
          Sachin Chourasiya
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'} text-primary fs-4`}></i>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, "#home")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={(e) => handleNavClick(e, "#experience")}>
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={(e) => handleNavClick(e, "#education")}>
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={(e) => handleNavClick(e, "#projects")}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
