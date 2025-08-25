import React, { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/images/1.png';

// Import des drapeaux - chemins corrigés
import moroccoFlag from './assets/images/flag.png';
import senegalFlag from './assets/images/senegal-flag.png';
import cotedivoireFlag from './assets/images/coast.png';
import maliFlag from './assets/images/mali.png';
import ghanaFlag from './assets/images/ghana.png';
import nigeriaFlag from './assets/images/nigeria.png';
import ethiopiaFlag from './assets/images/ethiopie.png';
import southafricaFlag from './assets/images/south-africa.png';
import guineabissauFlag from './assets/images/guinea-bissau.png';
import franceFlag from './assets/images/france.png';
import belgiumFlag from './assets/images/belgium.png';
import italyFlag from './assets/images/italy.png';
import spainFlag from './assets/images/spain.png';
import germanyFlag from './assets/images/germany.png';
import englandFlag from './assets/images/england.png';
import usaFlag from './assets/images/united-states.png';
import canadaFlag from './assets/images/canada.png';
import turkeyFlag from './assets/images/turkey.png';
import chinaFlag from './assets/images/china.png';
import uaeFlag from './assets/images/uae.png';

// Icône d'avion pour la navigation (composant SVG)
const Plane = ({ className }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
  </svg>
);

// Données des pays avec les drapeaux
const countriesData = [
  { name: 'Maroc', cities: ['Casablanca', 'Marrakech', 'Rabat', 'Agadir'], continent: 'Afrique', flag: moroccoFlag, population: '37M' },
  { name: 'Sénégal', cities: ['Dakar'], continent: 'Afrique', flag: senegalFlag, population: '17M' },
  { name: 'Côte d\'Ivoire', cities: ['Abidjan'], continent: 'Afrique', flag: cotedivoireFlag, population: '27M' },
  { name: 'Mali', cities: ['Bamako'], continent: 'Afrique', flag: maliFlag, population: '21M' },
  { name: 'Ghana', cities: ['Accra'], continent: 'Afrique', flag: ghanaFlag, population: '32M' },
  { name: 'Nigéria', cities: ['Lagos', 'Abuja'], continent: 'Afrique', flag: nigeriaFlag, population: '218M' },
  { name: 'Éthiopie', cities: ['Addis-Abeba'], continent: 'Afrique', flag: ethiopiaFlag, population: '120M' },
  { name: 'Afrique du Sud', cities: ['Johannesburg', 'Cape Town'], continent: 'Afrique', flag: southafricaFlag, population: '60M' },
  { name: 'Guinée-Bissau', cities: ['Bissau'], continent: 'Afrique', flag: guineabissauFlag, population: '2M' },
  { name: 'France', cities: ['Paris', 'Lyon', 'Marseille'], continent: 'Europe', flag: franceFlag, population: '68M' },
  { name: 'Belgique', cities: ['Bruxelles'], continent: 'Europe', flag: belgiumFlag, population: '11M' },
  { name: 'Italie', cities: ['Rome', 'Milan'], continent: 'Europe', flag: italyFlag, population: '59M' },
  { name: 'Espagne', cities: ['Barcelone', 'Madrid'], continent: 'Europe', flag: spainFlag, population: '47M' },
  { name: 'Allemagne', cities: ['Berlin', 'Francfort'], continent: 'Europe', flag: germanyFlag, population: '83M' },
  { name: 'Angleterre', cities: ['Londres'], continent: 'Europe', flag: englandFlag, population: '56M' },
  { name: 'États-Unis', cities: ['New York', 'Washington', 'Atlanta'], continent: 'Amérique du Nord', flag: usaFlag, population: '331M' },
  { name: 'Canada', cities: ['Montréal', 'Toronto'], continent: 'Amérique du Nord', flag: canadaFlag, population: '38M' },
  { name: 'Turquie', cities: ['Istanbul'], continent: 'Asie', flag: turkeyFlag, population: '84M' },
  { name: 'Chine', cities: ['Pékin', 'Guangzhou'], continent: 'Asie', flag: chinaFlag, population: '1.4B' },
  { name: 'Émirats Arabes Unis', cities: ['Dubaï', 'Abou Dhabi'], continent: 'Moyen-Orient', flag: uaeFlag, population: '10M' },
];

const continentIcons = {
  'Afrique': '🌍',
  'Europe': '🏰',
  'Amérique du Nord': '🗽',
  'Asie': '🏯',
  'Moyen-Orient': '🕌',
};

// Données des témoignages
const testimonialsData = [
  {
    name: "Sarah Benali",
    location: "Casablanca, Maroc",
    rating: 5,
    text: "Un voyage extraordinaire ! L'équipe de Jess Voyages a organisé chaque détail de notre séjour à Paris. Service impeccable et prix très compétitifs.",
    image: "👩‍💼"
  },
  {
    name: "Ahmed Diallo",
    location: "Dakar, Sénégal",
    rating: 5,
    text: "Grâce à Jess Voyages, j'ai pu découvrir les merveilles de Dubaï. Une expérience inoubliable avec un accompagnement de qualité du début à la fin.",
    image: "👨‍💻"
  },
  {
    name: "Fatima Kone",
    location: "Abidjan, Côte d'Ivoire",
    rating: 5,
    text: "Excellent service ! Notre voyage en famille aux États-Unis s'est déroulé parfaitement. Je recommande vivement leurs services professionnels.",
    image: "👩‍🏫"
  },
  {
    name: "Mohamed El Fassi",
    location: "Marrakech, Maroc",
    rating: 4,
    text: "Service de qualité et équipe très réactive. Notre voyage d'affaires à Londres a été organisé avec beaucoup de professionnalisme.",
    image: "👨‍💼"
  }
];

// Composant Navigation
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="header-nav">
      <nav className="nav">
        <div className="nav-brand">
          <img src={logo} alt="Logo Jess Voyages" className="nav-logo-img" />
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

// Composant Header
const Header = ({ filteredCountries, filteredContinents, totalCities, onDiscoverClick, onReservationClick }) => {
  return (
    <div className="header-hero">
      <Navigation />
      <div className="header-overlay"></div>
      <div className="header-content">
        <div className="header-title">
          <div className="globe-icon">🌍</div>
          <h1>Jess Voyages</h1>
        </div>
        <p className="header-description">
          Votre partenaire de confiance pour découvrir le monde. Des destinations exceptionnelles, un service premium.
        </p>
        
        <div className="header-buttons">
          <button className="discover-btn" onClick={onDiscoverClick}>
            <Plane className="btn-icon" />
            Découvrir nos destinations
          </button>
          <button className="reserve-header-btn" onClick={onReservationClick}>
            ✈️ Réserver un billet
          </button>
        </div>
        
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">🌍</div>
              <div className="stat-info">
                <div className="stat-number">{filteredCountries.length}</div>
                <div className="stat-label">Pays</div>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">📍</div>
              <div className="stat-info">
                <div className="stat-number">{totalCities}</div>
                <div className="stat-label">Villes</div>
              </div>
            </div>
  </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-number">{filteredContinents.length}</div>
                <div className="stat-label">Continents</div>
              </div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <div className="stat-number">15+</div>
                <div className="stat-label">Années d'expérience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant SearchAndFilters
const SearchAndFilters = ({ searchTerm, setSearchTerm, selectedContinent, continents, handleContinentFilter }) => {
  return (
    <div className="search-container" id="destinations">
      <div className="search-content">
        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un pays ou une ville..."
              className="search-input"
            />
          </div>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedContinent === '' ? 'active' : ''}`}
              onClick={() => handleContinentFilter('')}
            >
              Tous
            </button>
            {continents.map(continent => (
              <button
                key={continent}
                className={`filter-btn ${selectedContinent === continent ? 'active' : ''}`}
                onClick={() => handleContinentFilter(continent)}
              >
                {continentIcons[continent]} {continent}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Composant CountryCard
const CountryCard = ({ country, index, onReservationClick }) => {
  return (
    <div className="country-card" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="country-header">
        <div className="country-header-decoration"></div>
        <div className="country-header-content">
          <div className="country-flag-row">
            <img src={country.flag} alt={`Drapeau ${country.name}`} className="country-flag-img" />
            {country.population && (
              <span className="country-population">{country.population}</span>
            )}
          </div>
          <h3 className="country-name">{country.name}</h3>
          <div className="country-info">
            <span className="city-count">📍 {country.cities.length} ville{country.cities.length > 1 ? 's' : ''}</span>
          </div>
        </div>
      </div>
      <div className="cities-list">
        {country.cities.map(city => (
          <div key={city} className="city-item">
            <div className="city-dot"></div>
            <span className="city-name">{city}</span>
            <button 
              className="reserve-city-btn"
              onClick={() => onReservationClick(country.name, city)}
            >
              Réserver
            </button>
          </div>
        ))}
      </div>
      <div className="country-footer">
        <button 
          className="reserve-country-btn"
          onClick={() => onReservationClick(country.name)}
        >
          ✈️ Réserver un billet pour {country.name}
        </button>
      </div>
    </div>
  );
};

// Composant ContinentSection
const ContinentSection = ({ continent, continentCountries, onReservationClick }) => {
  return (
    <div key={continent} className="continent-section">
      <div className="continent-header">
        <div className="continent-title">
          <span className="continent-icon">{continentIcons[continent]}</span>
          <h2>{continent}</h2>
          <span className="continent-count">{continentCountries.length} pays</span>
        </div>
      </div>
      <div className="countries-grid">
        {continentCountries.map((country, index) => (
          <CountryCard 
            key={country.name} 
            country={country} 
            index={index} 
            onReservationClick={onReservationClick}
          />
        ))}
      </div>
    </div>
  );
};

// Composant CountryList
const CountryList = ({ filteredCountries, continents, onReservationClick }) => {
  if (filteredCountries.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🌍</div>
        <h3>Aucun résultat trouvé</h3>
        <p>Essayez de modifier votre recherche ou vos filtres</p>
      </div>
    );
  }

  const groupedCountries = {};
  continents.forEach(continent => {
    groupedCountries[continent] = filteredCountries.filter(c => c.continent === continent);
  });

  return (
    <div className="main-content">
      {continents.map(continent => {
        const continentCountries = groupedCountries[continent];
        if (continentCountries.length === 0) return null;
        
        return (
          <ContinentSection 
            key={continent}
            continent={continent}
            continentCountries={continentCountries}
            onReservationClick={onReservationClick}
          />
        );
      })}
    </div>
  );
};

// Composant About
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2>À propos de Jess Voyages</h2>
          <div className="about-subtitle">
            <span className="about-icon">✈️</span>
            Votre partenaire de confiance depuis plus de 15 ans
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-card-icon">🌟</div>
                <h3>Notre Mission</h3>
              </div>
              <p>
                Chez Jess Voyages, nous rendons le monde accessible à tous. Notre passion est de créer des expériences de voyage inoubliables, 
                en combinant expertise locale, service personnalisé et prix compétitifs.
              </p>
            </div>
            
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-card-icon">🎯</div>
                <h3>Notre Vision</h3>
              </div>
              <p>
                Être la référence en matière de voyages en Afrique et vers le monde entier, en offrant un service d'excellence 
                qui dépasse les attentes de nos clients à chaque étape de leur aventure.
              </p>
            </div>
            
            <div className="about-card">
              <div className="about-card-header">
                <div className="about-card-icon">💎</div>
                <h3>Nos Valeurs</h3>
              </div>
              <p>
                Confiance, transparence et excellence sont au cœur de tout ce que nous faisons. Nous croyons que chaque voyage 
                doit être une source d'enrichissement personnel et de découvertes extraordinaires.
              </p>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature-grid">
              <div className="feature-item">
                <div className="feature-icon">🏆</div>
                <div className="feature-content">
                  <h4>15+ Années d'Expérience</h4>
                  <p>Une expertise reconnue dans l'industrie du voyage</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">🌍</div>
                <div className="feature-content">
                  <h4>20 Pays Desservis</h4>
                  <p>Un réseau mondial pour vos destinations de rêve</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">👥</div>
                <div className="feature-content">
                  <h4>50,000+ Clients Satisfaits</h4>
                  <p>Une communauté de voyageurs qui nous font confiance</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">⭐</div>
                <div className="feature-content">
                  <h4>Service 24/7</h4>
                  <p>Un support disponible à tout moment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant Testimonials
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Témoignages de nos clients</h2>
          <p>Découvrez ce que nos voyageurs disent de leurs expériences</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.image}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </div>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              <div className="testimonial-content">
                <p>"{testimonial.text}"</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <div className="cta-content">
            <h3>Prêt pour votre prochaine aventure ?</h3>
            <p>Rejoignez des milliers de voyageurs satisfaits</p>
            <button className="cta-button">
              🌍 Commencer mon voyage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Composant ReservationModal
const ReservationModal = ({ showReservationForm, setShowReservationForm, reservationData, setReservationData, handleReservationSubmit, selectedDestination }) => {
  if (!showReservationForm) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value
    });
  };

  return (
    <div className="modal-overlay">
      <div className="reservation-modal">
        <div className="modal-headerss">
          <h2>Réserver votre billet</h2>
          <button className="close-modal" onClick={() => setShowReservationForm(false)}>×</button>
        </div>
        <form onSubmit={handleReservationSubmit} className="reservation-form">
          <div className="form-group">
            <label>Destination</label>
            <input 
              type="text" 
              value={reservationData.destination} 
              readOnly 
              className="destination-field"
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Nom *</label>
              <input 
                type="text" 
                name="nom"
                value={reservationData.nom} 
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Prénom *</label>
              <input 
                type="text" 
                name="prenom"
                value={reservationData.prenom} 
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email *</label>
              <input 
                type="email" 
                name="email"
                value={reservationData.email} 
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Téléphone *</label>
              <input 
                type="tel" 
                name="telephone"
                value={reservationData.telephone} 
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Lieu de départ *</label>
            <input 
              type="text" 
              name="lieuDepart"
              value={reservationData.lieuDepart} 
              onChange={handleInputChange}
              placeholder="Ex: Casablanca, Maroc"
              required 
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Date de départ *</label>
              <input 
                type="date" 
                name="dateDepart"
                value={reservationData.dateDepart} 
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Date de retour</label>
              <input 
                type="date" 
                name="dateRetour"
                value={reservationData.dateRetour} 
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Nombre de passagers *</label>
              <select 
                name="nombrePassagers"
                value={reservationData.nombrePassagers} 
                onChange={handleInputChange}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Classe *</label>
              <select 
                name="classe"
                value={reservationData.classe} 
                onChange={handleInputChange}
                required
              >
                <option value="Economique">Économique</option>
                <option value="Affaires">Affaires</option>
                <option value="Premiere">Première</option>
              </select>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={() => setShowReservationForm(false)} className="cancel-btn">
              Annuler
            </button>
            <button type="submit" className="submit-btn">
              ✈️ Confirmer la réservation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Composant Footer
const Footer = ({ countries, continents }) => {
  const totalCities = countries.reduce((sum, c) => sum + c.cities.length, 0);
  
  return (
    <footer class="voyage-footer" id="contact">
    <div class="voyage-container">
        <div class="voyage-content">
            <div class="voyage-brand">
                <img src="https://via.placeholder.com/160x60?text=Jess+Voyages" alt="Logo Jess Voyages" class="voyage-logo" />
                <h3>Jess Voyages</h3>
                <p>Votre partenaire de confiance pour découvrir le monde. Nous vous accompagnons dans toutes vos aventures à travers la planète.</p>
                <div class="social-links">
                    <a href="https://www.facebook.com/" class="social-link facebook" aria-label="Facebook" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" class="social-link instagram" aria-label="Instagram" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" class="social-link twitter" aria-label="Twitter" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/" class="social-link linkedin" aria-label="LinkedIn" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="social-link youtube" aria-label="YouTube" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            
            <div class="voyage-section">
                <h4>Nos Services</h4>
                <ul>
                    <li>Billets d'avion</li>
                    <li>Réservation d'hôtels</li>
                    <li>Forfaits voyage</li>
                    <li>Visa et formalités</li>
                    <li>Location de voitures</li>
                    <li>Assurance voyage</li>
                </ul>
            </div>
            
            <div class="voyage-section">
                <h4>Destinations Populaires</h4>
                <ul>
                    <li>Paris, France</li>
                    <li>Dubaï, EAU</li>
                    <li>New York, USA</li>
                    <li>Londres, UK</li>
                    <li>Tokyo, Japon</li>
                    <li>Bali, Indonésie</li>
                </ul>
            </div>
            
            <div class="voyage-section">
                <h4>Contact</h4>
                <div class="contact-info">
                    <p><i class="fas fa-phone"></i> +212 5XX-XXX-XXX</p>
                    <p><i class="fas fa-envelope"></i> contact@jessvoyages.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> Casablanca, Maroc</p>
                    <p><i class="fas fa-clock"></i> Lun-Ven: 9h-18h | Sam: 10h-16h</p>
                </div>
            </div>
        </div>
        
        <div class="voyage-stats">
            <div class="stat-item">
                <div class="stat-icon">🌍</div>
                <div class="stat-number">85</div>
                <div class="stat-label">pays</div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">📍</div>
                <div class="stat-number">320</div>
                <div class="stat-label">villes</div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">🏛️</div>
                <div class="stat-number">7</div>
                <div class="stat-label">continents</div>
            </div>
            <div class="stat-item">
                <div class="stat-icon">⭐</div>
                <div class="stat-number">15+</div>
                <div class="stat-label">années</div>
            </div>
        </div>
        
        <div class="voyage-bottom">
            <p class="voyage-copyright">&copy; 2024 Jess Voyages. Tous droits réservés.</p>
            <div class="voyage-links">
                <a href="#privacy">Politique de confidentialité</a>
                <a href="#terms">Conditions d'utilisation</a>
                <a href="#cookies">Préférences de cookies</a>
            </div>
        </div>
    </div>
</footer>

  );
};

// Composant principal
const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [continents, setContinents] = useState([]);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [reservationData, setReservationData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    lieuDepart: '',
    dateDepart: '',
    dateRetour: '',
    nombrePassagers: 1,
    classe: 'Economique',
    destination: ''
  });

  // Calculer les statistiques
  const totalCities = filteredCountries.reduce((sum, country) => sum + country.cities.length, 0);
  const filteredContinents = [...new Set(filteredCountries.map(c => c.continent))];

  useEffect(() => {
    // Extraire tous les continents uniques
    const allContinents = [...new Set(countriesData.map(c => c.continent))];
    setContinents(allContinents);
    
    // Filtrer les pays
    const filtered = countriesData.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         country.cities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesContinent = !selectedContinent || country.continent === selectedContinent;
      return matchesSearch && matchesContinent;
    });
    
    setFilteredCountries(filtered);
  }, [searchTerm, selectedContinent]);

  const handleContinentFilter = (continent) => {
    setSelectedContinent(continent);
  };

  const handleReservationClick = (countryName, cityName = '') => {
    const destination = cityName ? `${cityName}, ${countryName}` : countryName;
    setSelectedDestination(destination);
    setReservationData({
      ...reservationData,
      destination: destination
    });
    setShowReservationForm(true);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    alert(`Réservation confirmée pour ${reservationData.prenom} ${reservationData.nom} vers ${reservationData.destination} au départ de ${reservationData.lieuDepart}`);
    setShowReservationForm(false);
    setReservationData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      lieuDepart: '',
      dateDepart: '',
      dateRetour: '',
      nombrePassagers: 1,
      classe: 'Economique',
      destination: ''
    });
  };

  const handleDiscoverClick = () => {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
      window.scrollTo({ top: searchContainer.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div id="app">
      <Header 
        filteredCountries={filteredCountries}
        filteredContinents={filteredContinents}
        totalCities={totalCities}
        onDiscoverClick={handleDiscoverClick}
        onReservationClick={() => setShowReservationForm(true)}
      />
      
      <SearchAndFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedContinent={selectedContinent}
        continents={continents}
        handleContinentFilter={handleContinentFilter}
      />
      
      <CountryList 
        filteredCountries={filteredCountries}
        continents={continents}
        onReservationClick={handleReservationClick}
      />
      
      <About />
      
      <Testimonials />
      
      <ReservationModal 
        showReservationForm={showReservationForm}
        setShowReservationForm={setShowReservationForm}
        reservationData={reservationData}
        setReservationData={setReservationData}
        handleReservationSubmit={handleReservationSubmit}
        selectedDestination={selectedDestination}
      />
      
      <Footer 
        countries={countriesData}
        continents={continents}
      />
    </div>
  );
};

export default App;