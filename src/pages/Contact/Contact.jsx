import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <section className='contact'>
        <div className="container contact-page">
        <h1>Contactez-nous</h1>

        <div className="contact-section">
            <h2>📞 Formulaire de Contact</h2>
            <form>
            <input type="text" placeholder="Nom" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Votre message" required></textarea>
            <button type="submit">Envoyer</button>
            </form>
        </div>

        <div className="contact-section">
            <h2>🌍 Nos Réseaux Sociaux</h2>
            <p>📸 Instagram: @photoService</p>
            <p>📘 Facebook: Photo Service</p>
        </div>

        <div className="contact-section">
            <h2>❓ FAQ rapide</h2>
            <p><strong>Quels sont vos délais de livraison ?</strong> 12 à 48h selon la formule.</p>
            <p><strong>Faites-vous des shootings en extérieur ?</strong> Oui, sur demande.</p>
        </div>

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

export default Contact