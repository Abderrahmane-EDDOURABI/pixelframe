import React, { useState } from 'react'
import './quick-search.css';
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./quick-search.css";

const locations = [
  { value: "paris", label: "Paris" },
  { value: "lyon", label: "Lyon" },
  { value: "marseille", label: "Marseille" },
];

const budgets = [
  { value: "100", label: "Moins de 100€" },
  { value: "500", label: "100€ - 500€" },
  { value: "1000", label: "500€ - 1000€" },
  { value: "plus", label: "Plus de 1000€" },
];

const shootings = [
  { value: "mariage", label: "Mariage" },
  { value: "mode", label: "Mode" },
  { value: "evenement", label: "Événement" },
  { value: "corporate", label: "Corporate" },
];

const QuickSearch = () => {
    const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [shootingType, setShootingType] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const queryParams = new URLSearchParams();
    if (location) queryParams.append("location", location);
    if (budget) queryParams.append("budget", budget);
    if (shootingType) queryParams.append("shootingType", shootingType);

    navigate(`/results?${queryParams.toString()}`);
  };
  return (
    <section className="quick-search">
      <div className="container search-filters__container">
      <h2>🔎 Recherche rapide</h2>
      <p>Recherche un photographe.</p>
      <div className="search-filters">
            <Select
            options={locations}
            placeholder="📍 Lieu"
            onChange={(selected) => setSearchParams({ ...searchParams, location: selected.value })}
            className='input__quick-search'
            />
            <Select
            options={budgets}
            placeholder="💰 Budget"
            onChange={(selected) => setSearchParams({ ...searchParams, budget: selected.value })}
            className='input__quick-search'
            />
            <Select
            options={shootings}
            placeholder="📷 Type de shooting"
            onChange={(selected) => setSearchParams({ ...searchParams, shootingType: selected.value })}
            className='input__quick-search'
            />
            <button onClick={handleSearch}>Rechercher</button>

      </div>
      </div>
    </section>
  )
}

export default QuickSearch