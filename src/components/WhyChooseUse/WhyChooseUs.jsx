import React from 'react'
import './why-choose-us.css';
import { FaCameraRetro, FaClock, FaHeadset, FaCheckCircle } from "react-icons/fa";

const advantages = [
  { id: 1, title: "Qualité garantie", icon: <FaCameraRetro />, description: "Des photographes professionnels et des retouches haute qualité." },
  { id: 2, title: "Flexibilité", icon: <FaCheckCircle />, description: "Réservez facilement, choisissez votre format et lieu préféré." },
  { id: 3, title: "Livraison rapide", icon: <FaClock />, description: "Recevez vos photos retouchées en moins de 48h." },
  { id: 4, title: "Support client 24/7", icon: <FaHeadset />, description: "Nous sommes disponibles à tout moment pour vous aider." },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container why-choose-us__container">
        <h2>Pourquoi Nous Choisir ?</h2>
        <p>Découvrez ce qui nous rend uniques et pourquoi nos clients nous font confiance.</p>
        <div className="advantages-grid">
          {advantages.map((adv) => (
            <div key={adv.id} className="advantage-card">
              <span className="icon">{adv.icon}</span>
              <h3>{adv.title}</h3>
              <p>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs