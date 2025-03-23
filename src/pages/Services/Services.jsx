import React from 'react'
import './services.css';

import imgSrc01 from '../../assets/images/gallery__images/gallery1.jpg'
import imgSrc02 from '../../assets/images/gallery__images/gallery2.jpg'
import imgSrc03 from '../../assets/images/gallery__images/gallery3.jpg'

const servicesData = [
    { title: 'Mariage & Engagement 💍', description: 'Capturer les moments magiques de votre journée spéciale.' },
    { title: 'Événementiel 🎉', description: 'Des photographies dynamiques pour vos événements privés et professionnels.' },
    { title: 'Portraits & Mode 📷', description: 'Des portraits artistiques et des shootings mode avec un éclairage parfait.' },
    { title: 'Corporate & Branding 💼', description: 'Photographies professionnelles pour renforcer l’image de votre entreprise.' },
    { title: 'Immobilier & Architecture 🏡', description: 'Immortalisez vos propriétés avec des photos qui attirent les acheteurs.' },
    { title: 'Produits & E-commerce 🛒', description: 'Des photos de produits qui captivent vos clients sur votre boutique en ligne.' },
  ];
  
  const portfolioData = [
    { imgSrc: imgSrc01, alt: 'Exemple 1', description: 'Exemple de shooting de mariage.' },
    { imgSrc: imgSrc02, alt: 'Exemple 2', description: 'Exemple de shooting de portrait.' },
    { imgSrc: imgSrc03, alt: 'Exemple 3', description: 'Exemple de shooting d’événement.' },
  ];

const Services = () => {
  return (
    <section className='services'>
      <div className="container services-container">
        {/* Présentation générale des services */}
        <section className="intro-section">
          <h1>Nos Services de Photographie</h1>
          <p>Découvrez une large gamme de services adaptés à vos besoins. Nous proposons des photographies professionnelles pour divers types d’événements et de projets.</p>
        </section>

        {/* Catégories de shooting */}
        <section className="categories-section">
          <h2>Nos Catégories de Shooting</h2>
          <div className="categories">
            {servicesData.map((service, index) => (
              <div key={index} className="category-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio dynamique */}
        <section className="portfolio-section">
          <h2>Exemples de Réalisations</h2>
          <div className="portfolio">
            {portfolioData.map((item, index) => (
              <div key={index} className="portfolio-item">
                <div className="portfolio-item__figure">
                <img src={item.imgSrc} alt={item.alt} />
                </div>
                <p>{item.description}</p>
              </div>
            ))}
            <div className="swiper-pagination"></div>
          </div>
        </section>

        {/* Processus de réservation */}
        <section className="booking-section">
          <h2>Processus de Réservation Simple</h2>
          <p>Réservez facilement votre photographe en quelques clics. Choisissez le type de shooting, le photographe et réservez à l’heure qui vous convient.</p>
        </section>

        {/* Avis clients & Témoignages */}
        <section className="testimonials-section">
          <h2>Avis Clients</h2>
          <div className="testimonial">
            <p>"Excellente expérience ! Le photographe a su capturer tous les moments essentiels." - Client satisfait</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Services