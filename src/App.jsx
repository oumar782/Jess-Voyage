import React, { useState, useEffect } from 'react';
import './App.css';

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

  const countries = [
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

  // Calculer les statistiques
  const totalCities = filteredCountries.reduce((sum, country) => sum + country.cities.length, 0);
  const filteredContinents = [...new Set(filteredCountries.map(c => c.continent))];

  useEffect(() => {
    // Extraire tous les continents uniques
    const allContinents = [...new Set(countries.map(c => c.continent))];
    setContinents(allContinents);
    
    // Filtrer les pays
    const filtered = countries.filter(country => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({
      ...reservationData,
      [name]: value
    });
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

  const renderContent = () => {
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
                  <div key={country.name} className="country-card" style={{ animationDelay: `${index * 100}ms` }}>
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
                            onClick={() => handleReservationClick(country.name, city)}
                          >
                            Réserver
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="country-footer">
                      <button 
                        className="reserve-country-btn"
                        onClick={() => handleReservationClick(country.name)}
                      >
                        Réserver un billet pour {country.name}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="app">
      {/* Header */}
      <div className="header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <div className="header-title">
            <div className="globe-icon">🌍</div>
            <h1>Explorateur Mondial</h1>
          </div>
          <p className="header-description">
            Découvrez les pays et villes du monde entier dans une interface moderne et interactive
          </p>
          
          {/* Header Buttons */}
          <div className="header-buttons">
            <button className="discover-btn" onClick={() => window.scrollTo({ top: document.querySelector('.search-container').offsetTop, behavior: 'smooth' })}>
              Découvrir nos destinations
            </button>
            <button className="reserve-header-btn" onClick={() => setShowReservationForm(true)}>
              Réserver un billet
            </button>
          </div>
          
          {/* Stats */}
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

      {/* Search and Filters */}
      <div className="search-container">
        <div className="search-content">
          <div className="search-wrapper">
            {/* Search */}
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
            
            {/* Continent Filter */}
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

      {/* Content */}
      {renderContent()}

      {/* Reservation Form Modal */}
      {showReservationForm && (
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
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-icon">🌍</div>
          <p className="footer-title">
            Explorateur Mondial - Découvrez le monde, une ville à la fois
          </p>
          <p className="footer-stats">
            {countries.length} pays • {countries.reduce((sum, c) => sum + c.cities.length, 0)} villes • {continents.length} continents
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ExplorateurMondial;