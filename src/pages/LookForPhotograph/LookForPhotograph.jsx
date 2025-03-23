import React, { useState } from 'react'
import './look-for-photograph.css';
import { FaSearch } from 'react-icons/fa';
import { section } from 'framer-motion/client';

import photographOne from '../../assets/images/testimonials__images/avatar1.jpg'
import photographTwo from '../../assets/images/testimonials__images/avatar2.jpg'
import portfolioOne from '../../assets/images/gallery__images/e1.jpg'
import portfolioTwo from '../../assets/images/gallery__images/e2.jpg'
import portfolioThree from '../../assets/images/gallery__images/e3.jpg'
import portfolioFour from '../../assets/images/gallery__images/e4.jpg'
import SearchBar from '../../components/SearchBar/SearchBar';
// Exemple de données pour les photographes
const photographersData = [
    {
      id: 1,
      name: 'John Doe',
      photo: photographOne,
      specialties: ['Mariage', 'Portraits', 'Mode'],
      certifications: ['Photographe diplômé', '5 ans d’expérience'],
      portfolio: [portfolioOne, portfolioTwo],
      rating: 4.8,
      basePrice: 500,
      location: 'Paris, France',
    },
    {
      id: 2,
      name: 'Alice Smith',
      photo: photographTwo,
      specialties: ['Événementiel', 'Corporate'],
      certifications: ['Certifiée en photographie événementielle'],
      portfolio: [portfolioThree, portfolioFour],
      rating: 4.5,
      basePrice: 700,
      location: 'Lyon, France',
    },
    // Plus de photographes ici
  ];

  const LookForPhotograph = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 1000]);

  // Fonction pour filtrer les photographes
  const filterPhotographers = () => {
    return photographersData.filter(photographer => {
      const matchesCategory = selectedCategory ? photographer.specialties.includes(selectedCategory) : true;
      const matchesLocation = selectedLocation ? photographer.location.includes(selectedLocation) : true;
      const matchesPrice = photographer.basePrice >= selectedPriceRange[0] && photographer.basePrice <= selectedPriceRange[1];
      return matchesCategory && matchesLocation && matchesPrice;
    });
  };
  return (
    <section className='look-for-photograph'>
        <div className="container photographers-container">
        {/* Barre de recherche avancée */}
        <div className="search-section">
            <h1>Trouver un Photographe</h1>
            <SearchBar/>
            <div className="filters">
            <label>
                Catégorie :
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="">Toutes</option>
                <option value="Mariage">Mariage</option>
                <option value="Portraits">Portraits</option>
                <option value="Événementiel">Événementiel</option>
                <option value="Corporate">Corporate</option>
                </select>
            </label>
            <label>
                Localisation :
                <input
                type="text"
                placeholder="Ville ou région"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                />
            </label>
            <label>
                Budget :
                <input
                type="range"
                min="0"
                max="1000"
                value={selectedPriceRange[1]}
                onChange={(e) => setSelectedPriceRange([0, e.target.value])}
                />
                <span>{selectedPriceRange[1]} €</span>
            </label>
            </div>
        </div>

        {/* Liste des photographes filtrés */}
        <section className="photographers-list">
            {filterPhotographers().map(photographer => (
            <div key={photographer.id} className="photographer-card">
                <img src={photographer.photo} alt={photographer.name} />
                <h3>{photographer.name}</h3>
                <p><strong>Spécialités : </strong>{photographer.specialties.join(', ')}</p>
                <p><strong>Localisation : </strong>{photographer.location}</p>
                <p><strong>Tarif de base : </strong>{photographer.basePrice} €</p>
                <p><strong>Note : </strong>{photographer.rating} ⭐</p>
                <div className="portfolio">
                {photographer.portfolio.map((image, index) => (
                    <img key={index} src={image} alt={`Portfolio de ${photographer.name}`} />
                ))}
                </div>
                <div className="photographers__buttons">
                  <button className='btn__look'>Réserver</button>
                  <button className='btn__look'>Demander un devis</button>
                </div>
            </div>
            ))}
        </section>

        {/* Carte interactive */}
        <section className="map-section">
            <h2>Localisez nos Photographes</h2>
            <div id="map">
            {/* Tu peux intégrer une carte interactive comme Google Maps ou Leaflet ici */}
            <p>Carte avec les localisations des photographes ici.</p>
            </div>
        </section>

        <div className="contact-section">
            <h2>📍 Notre Localisation</h2>
            <p>Retrouvez-nous ici :</p>
            <div className="map-container">
            <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999996742617!2d2.294481315674993!3d48.85884427928765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc3c2f7d1e5%3A0xe737b7e8dfbff524!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1643810178276!5m2!1sfr!2sfr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            </div>
        </div>
        </div>
    </section>
  )
}

export default LookForPhotograph