import React from 'react'
import './pricing.css';

const Pricing = () => {
    const plans = [
        { name: "Basique", duration: "1h", retouches: "5 photos", delivery: "48h", price: "99€" },
        { name: "Premium", duration: "3h", retouches: "15 photos", delivery: "24h", price: "299€" },
        { name: "VIP", duration: "6h", retouches: "30 photos", delivery: "12h", price: "599€" },
      ];
  return (
    <section className='pricing'>
        <div className="container pricing-page">
        <h2>Nos Tarifs & Forfaits</h2>
        <div className="pricing-table">
            {plans.map((plan, index) => (
            <div key={index} className="pricing-card">
                <h3>{plan.name}</h3>
                <p>📸 Durée : {plan.duration}</p>
                <p>🎨 Retouches : {plan.retouches}</p>
                <p>🚀 Livraison : {plan.delivery}</p>
                <p className="price">{plan.price}</p>
            </div>
            ))}
        </div>
        <div className="custom-service">
            <h3>📞 Photographe sur mesure</h3>
            <p>Contactez-nous pour une prestation personnalisée adaptée à vos besoins.</p>
        </div>
        </div>
    </section>
  )
}

export default Pricing