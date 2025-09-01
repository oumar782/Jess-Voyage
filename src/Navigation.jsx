// src/components/Navigation.jsx
import React, { useState, useEffect } from 'react';
import logo from './assets/images/1.png';
import './app.css';
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header-nav ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-brand">
          <img src={logo} alt="Logo Jess Voyages" className="nav-logo-img" />
          <span className="nav-brand-name">Jess Voyages</span>
        </div>
        <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
          <a href="#destinations" className="nav-link" onClick={() => scrollToSection('destinations')}>
            Destinations
          </a>
          <a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>
            À propos
          </a>
          <a href="#testimonials" className="nav-link" onClick={() => scrollToSection('testimonials')}>
            Témoignages
          </a>
          <a href="/Nos-Gp" className="nav-link">Gp</a>
          <a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </a>
        </div>
        <button className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Navigation;