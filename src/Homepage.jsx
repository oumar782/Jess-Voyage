import React from 'react';
import { Calendar, Package } from 'lucide-react';
import './style/HomePage.css';

const HomePage = ({ onNavigate }) => {
  const handleNavigation = (page) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      // Redirection simple si React Router n'est pas configuré
      window.location.href = `/${page}`;
    }
  };

  return (
    <div className="homepage">
      <div className="background-gradient"></div>
      <div className="content-container">
        <div className="hero-section">
          <h1 className="main-title">
            GP <span className="highlight">Manager</span>
          </h1>
          <p className="subtitle">
            Système de gestion avancé pour vos colis
          </p>
        </div>

        <div className="navigation-buttons">
          <button 
            className="nav-button calendrier-btn"
            onClick={() => handleNavigation('calendrier')}
          >
            <div className="button-icon">
              <Calendar size={36} />
            </div>
            <div className="button-content">
              <h3>Calendrier d'envoi de GP</h3>
              <p>Planifiez et gérez vos créneaux d'envoi</p>
            </div>
            <div className="button-arrow">→</div>
          </button>

          <button 
            className="nav-button enregistrement-btn"
            onClick={() => handleNavigation('enregistrement')}
          >
            <div className="button-icon">
              <Package size={36} />
            </div>
            <div className="button-content">
              <h3>Enregistrement des Colis</h3>
              <p>Ajouter de nouveaux colis au système</p>
            </div>
            <div className="button-arrow">→</div>
          </button>
        </div>

        <div className="floating-elements">
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
          <div className="floating-square square-1"></div>
          <div className="floating-square square-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;