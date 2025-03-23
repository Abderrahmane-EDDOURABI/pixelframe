import React from 'react'
import './legal.css';

const Legal = () => {
  return (
    <div className="legal-page">
      <h1>⚖️ Mentions Légales</h1>
      <section>
        <h2>📜 Confidentialité & RGPD</h2>
        <p>
          Nous respectons la confidentialité de vos données et appliquons les
          règles du RGPD pour assurer leur protection.
        </p>
      </section>

      <section>
        <h2>📌 Conditions d’Utilisation</h2>
        <p>
          En utilisant ce site, vous acceptez nos conditions d’utilisation.
          Lisez attentivement nos règles pour une expérience optimale.
        </p>
      </section>

      <section>
        <h2>🎨 Propriété Intellectuelle</h2>
        <p>
          Tous les contenus de ce site (textes, images, vidéos) sont protégés
          par les lois de la propriété intellectuelle.
        </p>
      </section>
    </div>
  )
}

export default Legal