// src/MainPage.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Import des composants extraits
import Navigation from '../src/Navigation';
import Footer from '../src/Footer';

// Import des images
import logo from './assets/images/1.png';
import hero1 from './assets/images/WhatsApp Image 2025-08-25 à 01.27.45_5f769776.jpg';
import hero2 from './assets/images/WhatsApp Image 2025-08-25 à 01.27.46_0a577508.jpg';
import hero3 from './assets/images/WhatsApp Image 2025-08-25 à 01.27.46_e1c29759.jpg';

// Import des images de pays
import marocImg from './assets/images/Senegal.webp';
import senegalImg from './assets/images/maroc.jpg';
import cotedivoireImg from './assets/images/Coteivoire.jpg';
import maliImg from './assets/images/mali.jpg';
import ghanaImg from './assets/images/ghana.jpg';
import nigeriaImg from './assets/images/nigeria.jpg';
import ethiopiaImg from './assets/images/ethiopie.jpg';
import southafricaImg from './assets/images/south.jpg';
import guineabissauImg from './assets/images/guinea.jpg';
import franceImg from './assets/img/paris.jpg';
import belgiumImg from './assets/images/belgique.jpg';
import italyImg from './assets/images/italy.jpg';
import spainImg from './assets/images/spain.jpg';
import germanyImg from './assets/images/allemand.jpg';
import englandImg from './assets/images/england.jpg';
import usaImg from './assets/images/usa.jpg';
import canadaImg from './assets/images/canada.jpg';
import turkeyImg from './assets/images/turkey.jpg';
import chinaImg from './assets/images/china.jpg';
import uaeImg from './assets/images/uae.jpg';

// Import des drapeaux
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

// Images de pays pour les cartes
const countryImages = {
  'Maroc': marocImg,
  'Sénégal': senegalImg,
  'Côte d\'Ivoire': cotedivoireImg,
  'Mali': maliImg,
  'Ghana': ghanaImg,
  'Nigéria': nigeriaImg,
  'Éthiopie': ethiopiaImg,
  'Afrique du Sud': southafricaImg,
  'Guinée-Bissau': guineabissauImg,
  'France': franceImg,
  'Belgique': belgiumImg,
  'Italie': italyImg,
  'Espagne': spainImg,
  'Allemagne': germanyImg,
  'Angleterre': englandImg,
  'États-Unis': usaImg,
  'Canada': canadaImg,
  'Turquie': turkeyImg,
  'Chine': chinaImg,
  'Émirats Arabes Unis': uaeImg
};

// Icône d'avion
const Plane = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" width="20" height="20">
    <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19L8 20.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
);

// Données des pays
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
  'Afrique': '',
  'Europe': '',
  'Amérique du Nord': '',
  'Asie': '',
  'Moyen-Orient': '',
};

const testimonialsData = [
  {
    name: "Sarah Benali",
    location: "Casablanca, Maroc",
    rating: 5,
    text: "Un voyage extraordinaire ! L'équipe de Jess Voyages a organisé chaque détail de notre séjour à Paris. Service impeccable et prix très compétitifs.",
  },
  {
    name: "Ahmed Diallo",
    location: "Dakar, Sénégal",
    rating: 5,
    text: "Grâce à Jess Voyages, j'ai pu découvrir les merveilles de Dubaï. Une expérience inoubliable avec un accompagnement de qualité du début à la fin.",
  },
  {
    name: "Fatima Kone",
    location: "Abidjan, Côte d'Ivoire",
    rating: 5,
    text: "Excellent service ! Notre voyage en famille aux États-Unis s'est déroulé parfaitement. Je recommande vivement leurs services professionnels.",
  },
  {
    name: "Mohamed El Fassi",
    location: "Marrakech, Maroc",
    rating: 4,
    text: "Service de qualité et équipe très réactive. Notre voyage d'affaires à Londres a été organisé avec beaucoup de professionnalisme.",
  }
];

// ✅ TOUT LE RESTE DANS MainPage.jsx

const MainPage = () => {
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

  useEffect(() => {
    const allContinents = [...new Set(countriesData.map(c => c.continent))];
    setContinents(allContinents);
    const filtered = countriesData.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           country.cities.some(city => city.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesContinent = !selectedContinent || country.continent === selectedContinent;
      return matchesSearch && matchesContinent;
    });
    setFilteredCountries(filtered);
  }, [searchTerm, selectedContinent]);

  const totalCities = filteredCountries.reduce((sum, c) => sum + c.cities.length, 0);
  const filteredContinents = [...new Set(filteredCountries.map(c => c.continent))];

  const handleContinentFilter = (continent) => {
    setSelectedContinent(continent);
  };

  const handleReservationClick = (countryName, cityName = '') => {
    const destination = cityName ? `${cityName}, ${countryName}` : countryName;
    setSelectedDestination(destination);
    setReservationData(prev => ({ ...prev, destination }));
    setShowReservationForm(true);
  };

  const handleHeaderReservationClick = () => {
    setSelectedDestination('');
    setReservationData(prev => ({ ...prev, destination: '' }));
    setShowReservationForm(true);
  };

  const handleDiscoverClick = () => {
    const el = document.getElementById('destinations');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Composant Header
  const Header = () => {
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const texts = [
      "Votre partenaire de confiance pour découvrir le monde.",
      "Des destinations exceptionnelles, un service premium.",
      "Voyagez avec style et élégance."
    ];

    React.useEffect(() => {
      const current = textIndex % texts.length;
      const fullText = texts[current];
      const handleTyping = () => {
        if (isDeleting) {
          if (currentText === '') {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
            setTypingSpeed(2000);
            return;
          }
          setCurrentText(fullText.substring(0, currentText.length - 1));
          setTypingSpeed(typingSpeed / 1.5);
        } else {
          if (currentText === fullText) {
            setTypingSpeed(2000);
            setIsDeleting(true);
            return;
          }
          setCurrentText(fullText.substring(0, currentText.length + 1));
          setTypingSpeed(150);
        }
      };
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }, [currentText, isDeleting, textIndex, typingSpeed]);

    const [currentBg, setCurrentBg] = useState(0);
    const bgImages = [hero1, hero2, hero3];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % bgImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="header-hero" style={{ backgroundImage: `url(${bgImages[currentBg]})` }}>
        <div className="header-overlay"></div>
        <Navigation />
        <div className="header-content">
          <div className="header-title">
            <div className="globe-icon"></div>
            <h1>Jess Voyages</h1>
          </div>
          <div className="typewriter-container">
            <p className="header-description typewriter-text">
              {currentText}
              <span className="typewriter-cursor">|</span>
            </p>
          </div>
          <div className="header-buttons">
            <button className="discover-btn" onClick={() => window.location.href = '/Nos-Gp'}>
              <Plane className="btn-icon" />
              Nos prochaines envoi de colis
            </button>
            <button className="reserve-header-btn" onClick={handleHeaderReservationClick}>
              Réserver un billet
            </button>
          </div>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon"></div>
                <div className="stat-info">
                  <div className="stat-number">{filteredCountries.length}</div>
                  <div className="stat-label">Pays</div>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon"></div>
                <div className="stat-info">
                  <div className="stat-number">{totalCities}</div>
                  <div className="stat-label">Villes</div>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon"></div>
                <div className="stat-info">
                  <div className="stat-number">{filteredContinents.length}</div>
                  <div className="stat-label">Continents</div>
                </div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-content">
                <div className="stat-icon"></div>
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
  const SearchAndFilters = () => (
    <div className="search-container" id="destinations">
      <div className="search-content">
        <div className="search-wrapper">
          <div className="search-input-wrapper">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un pays ou ville..."
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

  // Autres composants (CountryCard, CountryList, About, etc.) ici si besoin...

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      {/* Insérez ici les autres composants : About, SearchAndFilters, CountryList, Testimonials, etc. */}
      <SearchAndFilters />
      {/* ... */}
      <Footer 
        countries={countriesData}
        continents={continents}
      />
    </>
  );
};

export default MainPage;