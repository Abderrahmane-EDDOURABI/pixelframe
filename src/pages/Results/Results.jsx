import React from 'react'
import { useLocation, useSearchParams } from "react-router-dom";
import "./results.css";
import { ul } from 'framer-motion/client';
const photographers = [
    { id: 1, name: "Studio Parisien", location: "paris", budget: "500", type: "mariage" },
    { id: 2, name: "Lyon Art Photo", location: "lyon", budget: "1000", type: "mode" },
    { id: 3, name: "Provence Memories", location: "marseille", budget: "plus", type: "evenement" },
    { id: 1, name: "Alice", location: "Paris", budget: "150", type: "Mariage" },
    { id: 2, name: "Bob", location: "Lyon", budget: "200", type: "Portrait" },
    { id: 3, name: "Charlie", location: "Marseille", budget: "300", type: "Mode" },
    { id: 4, name: "David", location: "Paris", budget: "100", type: "Corporate" },

];
const Results = () => {
    const [searchParams] = useSearchParams();
  const location = searchParams.get("location") || "";
  const budget = searchParams.get("budget") || "";
  const type = searchParams.get("type") || "";

  const filteredPhotographers = photographers.filter((p) => {
    return (
      (!location || p.location.toLowerCase().includes(location.toLowerCase())) &&
      (!budget || parseInt(p.budget) <= parseInt(budget)) &&
      (!type || p.type.toLowerCase().includes(type.toLowerCase()))
    );
  });
  return (
    <section className="results">
      <h2>Résultats de votre recherche</h2>
      {filteredPhotographers.length > 0 ? (
        <ul>
          {filteredPhotographers.map((p) => (
            <ul key={p.id}>
                <li>{p.name} - 📍 {p.location.toUpperCase()} - {p.type.toUpperCase()}</li>
                </ul>
          ))}
        </ul>
      ) : (
        <p>❌ Aucun photographe trouvé. Essayez d'autres critères.</p>
      )}
    </section>
  )
}

export default Results