import React from 'react'
import './home.css'

import { Link } from 'react-router-dom';
import Pricing from '../Pricing/Pricing';

import image1 from '../../assets/images/header__images/header.jpg';

import Faqs from '../../components/Faqs/Faqs';
import Testimonials from '../../components/Testimonials/Testimonials';
import Statistiques from '../../components/Statistiques/Statistiques';
import WhyChooseUs from '../../components/WhyChooseUse/WhyChooseUs';
import QuickSearch from '../../components/QuickSearch/QuickSearch';
import About from '../../components/About/About';
import HeaderFrames from '../../components/HeaderFrames/HeaderFrames';


const Home = () => {

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container header__container">
          <div className="hero-image">
            <div className="header__img-bg"></div>
            <div className="header__img-lg">
              <img src={image1} alt="header__image" />
            </div>
            <div className="header__img-sm">
              <img src={image1} alt="header__image" />
            </div>
          </div>
          <div className="hero-content">
            <div className="header__head">
              <div className="empty header__empty"></div>
              <a href="#" className='header__tag'>#Best Travel Photographer 2025</a>
            </div>
            <h1>Le photographe idéal, en quelques clics !</h1>
            <p>
              Trouvez le photographe idéal pour vos besoins en images, que vous
              soyez un particulier ou un professionnel.
            </p>
            <div className="cta__buttons">
                <Link className="cta-button" to={"/look-for-photograph"}>
                  Trouver un photographe
                </Link>
                <Link className="cta-button photographer-btn" to={"/photograph-dashboard"}>
                Je suis photographe
                </Link>
            </div>
          </div>
        </div>
      </section>
          <HeaderFrames/>

      <About/>

      {/* Recherche rapide */}
      {/* <section className="search-section">
        <h2>Recherche rapide</h2>
        <form className="search-form">
          <select>
            <option value="shooting">Choisir un type de shooting</option>
            <option value="portrait">Portrait</option>
            <option value="wedding">Mariage</option>
            <option value="event">Événement</option>
          </select>
          <input type="text" placeholder="Votre localisation" />
          <button className="search-btn">Rechercher</button>
        </form>
      </section> */}

      <QuickSearch/>

      {/* Pourquoi Nous Choisir
      <section className="why-choose-us">
        <h2>Pourquoi Nous Choisir ?</h2>
        <div className="advantages">
          <div className="advantage">
            <h3>Photographes experts</h3>
            <p>
              Nos photographes sont des experts dans divers domaines, pour
              répondre à toutes vos demandes.
            </p>
          </div>
          <div className="advantage">
            <h3>Réservation rapide</h3>
            <p>Réservez votre photographe en quelques clics seulement.</p>
          </div>
          <div className="advantage">
            <h3>Prix compétitifs</h3>
            <p>Des tarifs transparents et abordables pour tous les budgets.</p>
          </div>
        </div>
      </section> */}

      <WhyChooseUs/>

      <Testimonials/>

      {/* Statistiques clés
      <section className="stats">
        <h2>Nos Statistiques</h2>
        <div className="stats-item">
          <p>+500 Photographes inscrits</p>
        </div>
        <div className="stats-item">
          <p>+1000 Shootings réalisés</p>
        </div>
      </section> */}
      <Statistiques/>

      <Pricing />

      {/* CTA final */}
      <section className="cta-final">
          <Link className="cta-button" to={"/register"}>S'inscrire</Link>
          <Link className="cta-button" to={"/devis"}>Demander un devis</Link>
      </section>
      <Faqs/>
    </main>
  );
}

export default Home