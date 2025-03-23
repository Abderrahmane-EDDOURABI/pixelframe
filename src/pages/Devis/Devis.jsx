import React, { useState } from 'react'
import './devis.css';

const Devis = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        type: "",
        location: "",
        date: "",
        budget: "",
        comment: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Devis soumis :", formData);
      };
  return (
    <section className='devis'>
        <div className="container devis-page">
        <h1>Demande de Devis</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nom & Prénom" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Téléphone" onChange={handleChange} required />
            <input type="text" name="type" placeholder="Type de shooting" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Lieu" onChange={handleChange} required />
            <input type="date" name="date" onChange={handleChange} required />
            <input type="number" name="budget" placeholder="Budget estimé (€)" onChange={handleChange} required />
            <textarea name="comment" placeholder="Commentaire" onChange={handleChange}></textarea>
            <button type="submit" className="cta-button">Envoyer</button>
        </form>
        </div>
    </section>
  )
}

export default Devis