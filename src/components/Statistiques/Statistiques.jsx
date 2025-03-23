import React, { useEffect, useState } from 'react';
import './statistiques.css';
import { motion } from "framer-motion";

const statsData = [
    { id: 1, label: "Photographes inscrits", value: 1200, icon: "📸" },
    { id: 2, label: "Photos publiées", value: 50000, icon: "🖼️" },
    { id: 3, label: "Réservations réalisées", value: 15000, icon: "📅" },
    { id: 4, label: "Avis clients", value: 9000, icon: "⭐" },
    { id: 5, label: "Villes couvertes", value: 250, icon: "🌎" },
  ];
const Statistiques = () => {
    const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const increments = statsData.map(({ value }, index) => {
      let current = 0;
      const step = Math.ceil(value / 100); // Vitesse d'incrémentation

      return setInterval(() => {
        current += step;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = current >= value ? value : current;
          return newCounts;
        });

        if (current >= value) clearInterval(increments[index]);
      }, 20);
    });

    return () => increments.forEach(clearInterval);
  }, []);
  return (
    <section className="statistics">
      <div className="container statistics__container">
        <h2>Nos Statistiques</h2>
        <p>Découvrez les chiffres clés de notre plateforme.</p>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="stat-card"
              whileHover={{ scale: 1.1 }}
            >
              <span className="icon">{stat.icon}</span>
              <h3>{counts[index]}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistiques