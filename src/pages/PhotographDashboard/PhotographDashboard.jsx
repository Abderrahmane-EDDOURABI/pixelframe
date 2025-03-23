import React from 'react'
import './dashboard-photograph.css';
import { Camera, Calendar, DollarSign, Star, BarChart2 } from "lucide-react";

const sections = [
    {
      id: 1,
      icon: <Camera size={40} />,
      title: "Gestion du Portfolio",
      description: "Ajoutez, modifiez et organisez vos photos en quelques clics.",
    },
    {
      id: 2,
      icon: <Calendar size={40} />,
      title: "Réservations & Agenda",
      description: "Gérez facilement vos rendez-vous et disponibilités.",
    },
    {
      id: 3,
      icon: <DollarSign size={40} />,
      title: "Facturation & Paiements",
      description: "Suivez vos transactions et gérez votre facturation.",
    },
    {
      id: 4,
      icon: <Star size={40} />,
      title: "Avis Clients",
      description: "Consultez les retours et avis laissés par vos clients.",
    },
    {
      id: 5,
      icon: <BarChart2 size={40} />,
      title: "Statistiques & Performances",
      description: "Analysez votre activité avec des graphiques détaillés.",
    },
  ];
const PhotographDashboard = () => {
  return (
    <section className="dashboard-photographe">
      <div className="container dashboard-photograph__container">
        <h1>Bienvenue sur votre Dashboard</h1>
        <p>Gérez votre activité de photographe en toute simplicité.</p>
        <div className="dashboard-grid">
          {sections.map((section) => (
            <div key={section.id} className="dashboard-card">
              <div className="icon">{section.icon}</div>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PhotographDashboard