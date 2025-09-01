import React from 'react';
import './style/Footer.css';

const Footer = ({ countries = [], continents = [] }) => {
  const totalCities = countries.reduce((sum, country) => sum + (country.cities ? country.cities.length : 0), 0);

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Section principale du footer */}
        <div className="footer-content">
          {/* Section Marque */}
          <div className="footer-brand">
            <h3 className="footer-logo">Jess Voyages</h3>
            <p className="footer-description">
              Votre partenaire de confiance pour découvrir le monde. 
              Nous vous accompagnons dans toutes vos aventures à travers la planète.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Section Liens rapides */}
          <div className="footer-section">
            <h4 className="footer-section-title">Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Accueil</a></li>
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Section Services */}
          <div className="footer-section">
            <h4 className="footer-section-title">Nos Services</h4>
            <ul className="footer-links">
              <li>Billets d'avion</li>
              <li>Réservation d'hôtels</li>
              <li>Forfaits voyage</li>
              <li>Assurance voyage</li>
              <li>Location de voitures</li>
              <li>Visites guidées</li>
            </ul>
          </div>

          {/* Section Contact */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+221 77 123 45 67</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>contact@jessvoyages.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Dakar, Sénégal</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Lun-Ven: 8h-18h | Sam: 9h-16h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Statistiques */}
        <div className="footer-stats">
          <div className="stat-item">
            <div className="stat-number">{countries.length}</div>
            <div className="stat-label">Pays</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{totalCities}</div>
            <div className="stat-label">Villes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{continents.length}</div>
            <div className="stat-label">Continents</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>

        {/* Section Copyright */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; 2024 Jess Voyages. Tous droits réservés.
            </p>
            <div className="legal-links">
              <a href="/privacy">Politique de confidentialité</a>
              <a href="/terms">Conditions d'utilisation</a>
              <a href="/cookies">Politique des cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;