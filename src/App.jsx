import React, { useState, useEffect } from 'react';
import './App.css';
import logo from '../src/assets/images/1.png';
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

// Données des pays
const countriesData = [
  { name: 'Maroc', cities: ['Casablanca', 'Marrakech', 'Rabat', 'Agadir'], continent: 'Afrique', flag: '🇲🇦', population: '37M' },
  { name: 'Sénégal', cities: ['Dakar'], continent: 'Afrique', flag: '🇸🇳', population: '17M' },
  { name: 'Côte d\'Ivoire', cities: ['Abidjan'], continent: 'Afrique', flag: '🇨🇮', population: '27M' },
  { name: 'Mali', cities: ['Bamako'], continent: 'Afrique', flag: '🇲🇱', population: '21M' },
  { name: 'Ghana', cities: ['Accra'], continent: 'Afrique', flag: '🇬🇭', population: '32M' },
  { name: 'Nigéria', cities: ['Lagos', 'Abuja'], continent: 'Afrique', flag: '🇳🇬', population: '218M' },
  { name: 'Éthiopie', cities: ['Addis-Abeba'], continent: 'Afrique', flag: '🇪🇹', population: '120M' },
  { name: 'Afrique du Sud', cities: ['Johannesburg', 'Cape Town'], continent: 'Afrique', flag: '🇿🇦', population: '60M' },
  { name: 'Guinée-Bissau', cities: ['Bissau'], continent: 'Afrique', flag: '🇬🇼', population: '2M' },
  { name: 'France', cities: ['Paris', 'Lyon', 'Marseille'], continent: 'Europe', flag: '🇫🇷', population: '68M' },
  { name: 'Belgique', cities: ['Bruxelles'], continent: 'Europe', flag: '🇧🇪', population: '11M' },
  { name: 'Italie', cities: ['Rome', 'Milan'], continent: 'Europe', flag: '🇮🇹', population: '59M' },
  { name: 'Espagne', cities: ['Barcelone', 'Madrid'], continent: 'Europe', flag: '🇪🇸', population: '47M' },
  { name: 'Allemagne', cities: ['Berlin', 'Francfort'], continent: 'Europe', flag: '🇩🇪', population: '83M' },
  { name: 'Angleterre', cities: ['Londres'], continent: 'Europe', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', population: '56M' },
  { name: 'États-Unis', cities: ['New York', 'Washington', 'Atlanta'], continent: 'Amérique du Nord', flag: '🇺🇸', population: '331M' },
  { name: 'Canada', cities: ['Montréal', 'Toronto'], continent: 'Amérique du Nord', flag: '🇨🇦', population: '38M' },
  { name: 'Turquie', cities: ['Istanbul'], continent: 'Asie', flag: '🇹🇷', population: '84M' },
  { name: 'Chine', cities: ['Pékin', 'Guangzhou'], continent: 'Asie', flag: '🇨🇳', population: '1.4B' },
  { name: 'Émirats Arabes Unis', cities: ['Dubaï', 'Abou Dhabi'], continent: 'Moyen-Orient', flag: '🇦🇪', population: '10M' },
];

const continentIcons = {
  'Afrique': '🌍',
  'Europe': '🏰',
  'Amérique du Nord': '🗽',
  'Asie': '🏯',
  'Moyen-Orient': '🕌',
};

// Composant Navigation
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header class="header-nav">
    <nav class="nav">
    <div className="nav-brand">
  <img src={logo} alt="Logo Jess Voyages" className="nav-logo-img" />
</div>

        
        <div class="nav-links" id="navLinks">
            <a href="#destinations" class="nav-link">
                Destinations
            </a>
            <a href="#booking" class="nav-link">
                Réserver
            </a>
            <a href="#testimonials" class="nav-link">
                Témoignages
            </a>
            <button class="button button-outline nav-button">
                Connexion
            </button>
        </div>

        <button class="mobile-menu-button" onclick="toggleMenu()">
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
          <h1>Explorateur Mondial</h1>
        </div>
        <p className="header-description">
          Découvrez les pays et villes du monde entier dans une interface moderne et interactive
        </p>
        
        <div className="header-buttons">
          <button className="discover-btn" onClick={onDiscoverClick}>
            Découvrir nos destinations
          </button>
          <button className="reserve-header-btn" onClick={onReservationClick}>
            Réserver un billet
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
            <span className="country-flag">{country.flag}</span>
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
          Réserver un billet pour {country.name}
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
        <div className="modal-header">
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
              Confirmer la réservation
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
    <footer className="footer" id="testimonials">
      <div className="footer-content">
        <div className="footer-icon">🌍</div>
        <p className="footer-title">
          Explorateur Mondial - Découvrez le monde, une ville à la fois
        </p>
        <p className="footer-stats">
          {countries.length} pays • {totalCities} villes • {continents.length} continents
        </p>
      </div>
    </footer>
  );
};

// Composant principal
const ExplorateurMondial = () => {
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
    alert(`Réservation confirmée pour ${reservationData.prenom} ${reservationData.nom} vers ${reservationData.destination}`);
    setShowReservationForm(false);
    setReservationData({
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
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

export default ExplorateurMondial;